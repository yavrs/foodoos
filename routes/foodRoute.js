import express from 'express'
import { addFood, listFood, removeFood } from '../controllers/foodController.js'
import multer from 'multer' // for saving image in db
import _default from "validator";



const foodRouter = express.Router(); //// by this we use many get post put mathoda


// image storage engine

const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, File, cb) => {
        return cb(null, `${Date.now()}${File.originalname}`);
    }

});


const upload = multer({ storage: storage })


foodRouter.post("/add", upload.single("image"), addFood)
foodRouter.get("/list",listFood)
foodRouter.post("/remove", removeFood)




export default foodRouter;

