const mongosse = require("mongoose");

const subscriberSchema =  new mongosse.Schema({
    name: {
        type: String,
        required: true
    },
    subscribedToChannel : {
        type: String,
        required: true
    },
    subscribeDate: {
        type : Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongosse.model("subscriber", subscriberSchema)