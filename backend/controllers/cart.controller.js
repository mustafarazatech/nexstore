import Cart from "../models/Cart.js";

export const addCart = async (req, res) => {
  try {
    const userId = req.user;
    // console.log(userId._id);
    // console.log();
    const { productId, quantity, price } = req.body;
    // console.log(quantity);

    const existCart = await Cart.findOne({
      user: userId._id,
      product: productId,
    });

    if (existCart) {
      existCart.quantity = quantity;
      await existCart.save();

      return res.status(200).json({
        success: true,
        message: "Cart updated",
        data: existCart,
      });
    }

    const cart = await Cart.create({
      user: userId._id,
      product: productId,
      quantity,
      price,
    });

    return res.status(201).json({
      success: true,
      message: "Product added to cart",
      data: cart,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const getCartItems = async (req, res) => {
  try {
    const userId = req.user;

    const cartItems = await Cart.find({ user: userId._id }).populate(
      "product",
      "-photo",
    );

    console.log(cartItems);

    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );

    return res.status(200).json({
      success: true,
      count: cartItems.length,
      total,
      data: cartItems,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
