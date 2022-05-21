const Vendor=require("../model/Product")

// lOGIN API

const Login = async(req,res)=>{
    const { email , phone } = req.body;

        if (!email && !phone) {
            return res.status(422).json({ error: "pllzzz fill all field" });   }
        try {
           const user = new Vendor({ email , phone });
      const userregister = await user.save();
            if (userregister) {
                res.status(201).json({ message: "user registerd succesfully" });
            }
        } catch (err) {
            console.log(err)
        }
    };

// ALL VENDORS DATA API


 const Product_all = async(req,res)=>{
try{
    const products=await Vendor.find();
    res.json(products);
}catch(err){
    res.json({message:error})
}
};

// SINGLE VENDOR DATA API


const Product_details = async(req,res)=>{
    try{
        const product=await Vendor.findById(req.params.VendorId);
        res.json(product);
    }catch(err){
        res.json({error:error})
    }
    };


module.exports={
    Product_all,
    Product_details,
    Login
    
}