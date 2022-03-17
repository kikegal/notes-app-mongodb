const {Schema, model} = require('mongoose')
const bcrypt = require('bcryptjs')

const UserSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
}, {
    
    timestamps:true
})

UserSchema.methods.encryptPassword = async password =>{  //creating password encrypt
    const salt = await bcrypt.genSalt(10)  //generate Salt
    bcrypt.hash(password, salt)
} 
UserSchema.methods.matchPassword = function(password){      // method for return true or false
    return await bcrypt.compare(password, this.password)
}

module.export = model('user', UserSchema)