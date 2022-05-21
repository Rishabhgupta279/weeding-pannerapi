
const router =require("express").Router();
const productcontroller=require("../Controller/Pcontroller")
//  const User = require('../model/UserSchema')

//get all vendor api
router.get("/", productcontroller.Product_all)


//get single vendor api
 router.get("/:VendorId",productcontroller.Product_details);

 
//login using email and password api api
 router.post("/",productcontroller.Login);


//get all vendor api
router.get("/", productcontroller.Product_all)


module.exports= router;