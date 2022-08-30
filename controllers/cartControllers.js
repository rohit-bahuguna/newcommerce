const cartModal = require("../model/cart");
const productModal = require("../model/product");

const addToCart = async (req, res) => {
  try {
   

    const tempProduct = new cartModal({
      userid: req.userId,
      product: {
        id: req.body.id,
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        image: req.body.image,
        category: req.body.category,
        quantity: req.body.quantity
      },
     
    });

    const response = await tempProduct.save();
    
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(400).json({ massage: error.massage });
  }
};
const getAllCart = async (req, res) => {
  try {
    
    const id = req.userId;
    const cartItems = await cartModal.find({ userid: id });
    res.status(200).json(cartItems);
  } catch (error) {
    console.log(error);
    res.status(400).json({ massage: error.massage });
  }
};

const getOneCart = (req, res) => {
  res.send("not implemented yet");
};

const deleteFromCart = async (req, res) => {
  const id = req.params.id;
  

  try {
    const item = await cartModal.findByIdAndRemove(id);
 
    res.status(200).json(item);
  } catch (error) {
    console.log(error);
    res.status(400).json({ massage: error.massage });
  }
};

const UpdateCart = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedItem = await cartModal.findByIdAndUpdate(id, {product : req.body}, {
      new: true,
    });
    res.status(200).json(updatedItem);
  } catch (error) {
    console.log(error);
    res.status(400).json({ massage: error.massage });
  }
};

module.exports = {
  deleteFromCart,
  getOneCart,
  getAllCart,
  addToCart,
  UpdateCart,
};
