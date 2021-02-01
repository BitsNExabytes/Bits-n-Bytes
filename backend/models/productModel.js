import mongoose from 'mongoose';


//create schema for reviews
const reviewSchema = mongoose.Schema({

    name:{type: String, required: true},
    rating:{type: Number, required: true},
    commment:{type: String, required: true}
},{
    timestamps: true
})

//create schema for users
const productSchema = mongoose.Schema({


    user:{

        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'  // adds a relation betweent he product and the user

    },

    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
       
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
       
    },
    description: {
        type: String,
        required: true,
       
    },

    reviews: [reviewSchema],
    rating: {
        type: Number,
        required: true,
        default: 0
       
    },
    numReviews: {
        type: Number,
        required: true,
        default: 0
       
    },
    price: {
        type: Number,
        required: true,
        default: 0
       
    },
    countInStock: {
        type: Number,
        required: true,
        default: 0
       
    },
}, {
    // create fields automatically
    timestamps: true
})


// create a model from this schema, and call it user
const Product = mongoose.model('Product', productSchema);

export default Product