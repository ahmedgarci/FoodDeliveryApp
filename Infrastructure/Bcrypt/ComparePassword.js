const bcrypt = require("bcrypt")

module.exports = (password,encryptedPassword)=>{
    return bcrypt.compareSync(password,encryptedPassword);
}