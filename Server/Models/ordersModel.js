const mongoose= require("mongoose")
const ordersSchema =new mongoose.Schema(
    {
    Firstname: {
        type: String
    },
    Lastname: {
        type: String
    },
    Address: {
        type: String
    },
    email: {
        type: String
    },
    City: {
        type: String
    },
    State: {
        type: String
    },
    Zipcode: {
        type: String
    },
    items: {
        type: Array,
    }
    
    
    
    }
    
)

module.exports=mongoose.model("order",ordersSchema)