import Category from "../models/Category.js";
import resizePhoto from "../utils/resize.js";

export const addCategory = async (req, res) => {
  try {
    const { name, subName } = req.body;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Category name is required",
      });
    }

    let photo = null;

    if (req.file) {
      //   console.log(req.file);
      const resizedImage = await resizePhoto(req.file.buffer);
      // console.log(resizedImage.buffer);

      photo = {
        data: resizedImage.buffer,
        imageName: req.file.originalname,
        imageType: req.file.mimetype,
      };
    }
    // console.log("photo", photo);

    const category = await Category.create({
      name,
      subName,
      photo,
    });

    return res.status(201).json({
      success: true,
      message: "Category created successfully",
      //   category,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const getCategoryList = async (req, res) => {
  try {
    const data = await Category.find({}).select("-photo");
    // console.log(data);

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
export const getCategoryPhoto = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await Category.findById(id).select("photo");

    if (!category || !category.photo?.data) {
      return res.status(404).json({
        success: false,
        message: "Photo not found",
      });
    }

    res.set("Content-Type", category.photo.imageType);
    return res.send(category.photo.data);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
