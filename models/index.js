const mongoose = require('mongoose')
const schema = mongoose.Schema

const orderScheme = new schema(

    {

        totalAmount: {
            type: Number,
            required: true
        },

        user: {
            type: mongoose.Schema.Types.ObjectId, ref: 'users'
        },
        items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'items' }],
        addedDate:{
            type:String,
        }

    }
)
const userScheme = new schema(
    {
        userName:
        {
            type: String,
            required: true
        },

        password:
        {
            type: String,
            required: true
        },
        userType: {
            type: String,
            enum: ['admin', 'user'],
            default: 'user'
        },
    
        orders: [{ type: mongoose.Schema.Types.Array, ref: 'orders' }]
        , adress:
        {
            type: String,
        }


    })

const data = new schema({

    productName:
    {
        type: String,
        required: true
    },
    price:
    {
        type: Number,
        required: true
    },
    stock:
    {
        type: Number,
        required: true
    },
    PhotoFileName:
    {
        type: String
    },
    gender: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
    

})



const items = mongoose.model("items", data)
const orders = mongoose.model("orders", orderScheme)
const users = mongoose.model("users", userScheme)
module.exports = { orders, items, users }