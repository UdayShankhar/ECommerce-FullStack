import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
    {
        name:{type:String,required:true,unique:true},
        slug: { type: String, required: true },
        category: { type: String, required: true },
        image: { type: String, required: true, unique: true },
        price: { type: Number, required: true},
        countInStock:{type:Number,required:true},
        brand: { type: String, required: true },
        rating:{type:Number},
        numReview:{type:Number},
        emi: { type: Number, required: true },
        about1: { type: String, required: true },
        about2: { type: String, required: true },
        storeLink: { type: String, required: true},
        visit:{type:String,required:true}
    },{
        timestamps:true
    }
)

const Product = mongoose.model('Product',productSchema)

export default Product