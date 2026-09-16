import userModel from "../models/userModel.js"

// add to cart fun for user db

const addToCart = async (req, res) => {

    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if (!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = 1
        }
        else {
            cartData[req.body.itemId] += 1
        }
        await userModel.findByIdAndUpdate(req.body.userId, { cartData });
        res.json({ success: true, message: "added to cart" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "error" })
    }

}


// remove items from user cart

const removeFromCart = async (req, res) => {

    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if (cartData[req.body.itemId] > 1) {
            cartData[req.body.itemId] -= 1;
        }
        else{
            delete cartData[req.body.itemId]   /// if you remove this and whtever is in cart with 0 valuein db can be shown as fav or most
        }
        await userModel.findByIdAndUpdate(req.body.userId, { cartData });
        res.json({ success: true, message: "removed from cART" })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "error" })

    }

}

// fetch user cart data

const getCart = async (req, res) => {
    
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        res.json({success:true,cartData})

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "error aa gya" })
    }


}

export { addToCart, getCart, removeFromCart }
