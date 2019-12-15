const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
     _id: {
        type: String 
    }, 
    photo: {
        type: String
    }
})



UserSchema.set('toJSON', { virtuals: true });


const User = mongoose.model('User', UserSchema)

module.exports = User