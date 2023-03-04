const modelAdmin = require("../models/index").admin
const query = require('sequelize').Op

exports.getAllAdmin = async (request, response)=>{ //nama fungsi(function)
    let admins = await modelAdmin.findAll()
    return response.json({
        succes: true,
        data: admins,
        message: 'Semua data admin'
    })
}

exports.findAdmin = async (request, response) =>{
    let name = request.body.name
    let username = request.body.username
    let address = request.body.address
    let admins = await modelAdmin.findAll({
    where: {
    [query.or]: [
    { name: { [query.substring]: name } },
    { username: { [query.substring]: username } },
    { address: { [query.substring]: address } }
    ]
    }
})
    return response.json({
        success: true,
        data: admins,
        message: `All Members have been loaded`
    })   
}

exports.addAdmin = (request, response) => {
    /** prepare data from request */
    let newAdmin = {
    name: request.body.name,
    address: request.body.address,
    username: request.body.username,
    contact: request.body.contact,
    username: request.body.username,
    password: request.body.password
    }
    /** execute inserting data to member's table */
    modelAdmin.create(newAdmin)
    .then(result => {
    /** if insert's process success */
    return response.json({
    success: true,
    data: result,
    message: `New admin has been inserted`
        })
    })
    .catch(error => {
    /** if insert's process fail */
    return response.json({
    success: false,
    message: error.message
        })
    })
}
    
exports.updateAdmin = (request, response) => {
    let dataAdmin = {
    name: request.body.name,
    address: request.body.address,
    username: request.body.username,
    contact: request.body.contact
}
let idAdmin = request.params.id
modelAdmin.update(dataAdmin, { where: { id: idAdmin } })
.then(result => {
return response.json({
success: true,
message: `Data admin has been updated`
    })
})
.catch(error => {
return response.json({
success: false,
message: error.message
    })
})
}

exports.deleteAdmin = (request, response) => {
    let idAdmin = request.params.id
    
    modelAdmin.destroy({ where: { id: idAdmin } })
    .then(result => {
    return response.json({
    success: true,
    message: `Data admin has been updated`
    })
    })
    .catch(error => {
    return response.json({
    success: false,
    message: error.message
    })
})
}
   