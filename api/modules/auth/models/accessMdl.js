
const bcrypt = require('bcryptjs');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ramesh')

const userSchema = new mongoose.Schema({
  username: { type: String},
  password : { type: String},
  lang : { type : String}
});

const User = mongoose.model('users', userSchema);

exports.loginMdl = async function(data,user){
    console.log(data.user)
    const obj = {username : data.user}
    // const userData = await User.findOne(obj).select('-password');
    const userData = await User.findOne(obj);
    // const userData = await User.aggregate([
    //     { $match: { username: data.user } },
    //     { $project: { password: 0 } } // Exclude the password field
    //   ]);
    console.log("userdata",userData)
    if(!userData) return null;
    const hashedPassword =await bcrypt.compare(data.password, userData.password);
    console.log("hashedPassword",hashedPassword)
    // delete userData.password
    if(hashedPassword){
        return userData
    }

}

exports.updateMdl =async function (data, user) {
    
    const updateData = await User.findOneAndUpdate({username:data.user,a_in : 1},{
        lang : data.lang
    })
    console.log("update data",updateData)
}