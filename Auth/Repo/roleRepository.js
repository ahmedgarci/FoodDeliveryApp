const Role = require("../Entities/RoleEntity");

class roleRepository{
    static async getRoleUser(){
        return await Role.findOne({role:"USER"})
    }
}

module.exports = roleRepository;