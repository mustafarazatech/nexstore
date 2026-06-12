import Product from "../models/Product.js";
import resizePhoto from "../utils/resize.js";

export const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      discountPrice,
      stock,
      brand,
      category,
      isActive,
    } = req.body;

    // Validation
    if (!name || !description || !price || !stock || !category) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields",
      });
    }

    let photo = null;

    if (req.file) {
      const resizedImage = await resizePhoto(req.file.buffer);
      console.log(resizedImage);

      photo = {
        data: resizedImage.buffer,
        imageType: resizedImage.imageType,
        imageName: req.file.originalname,
      };
    }

    const product = await Product.create({
      name,
      description,
      price,
      discountPrice,
      stock,
      brand,
      category,
      photo,
      isActive,
    });

    return res.status(201).json({
      success: true,
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
export const getProductList = async (req, res) => {
  try {
    const data = await Product.find({})
      .populate("category", "name")
      .select("-photo");

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const getProductPhoto = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id).select("photo");

    if (!product || !product.photo?.data) {
      return res.status(404).json({
        success: false,
        message: "Photo not found",
      });
    }

    res.set("Content-Type", product.photo.imageType);

    return res.send(product.photo.data);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
