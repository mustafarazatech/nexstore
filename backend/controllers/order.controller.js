import Order from "../models/order.model.js";

export const createOrder = async (req, res) => {
  try {
    const { userId, items, totalAmount, paymentMethod, shippingAddress } =
      req.body;

    const orderId =
      "ORD-" + Date.now() + "-" + Math.floor(Math.random() * 10000);

    const order = await Order.create({
      orderId,
      userId,
      items,
      totalAmount,
      paymentMethod,
      shippingAddress,
    });

    res.status(201).json({
      success: true,
      message: "Order created successfully",
      data: order,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

import Order from "../models/order.model.js";

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("userId", "name email")
      .populate("items.productId", "name price")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: orders.length,
      data: orders,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      userId: req.user._id,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: orders,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
