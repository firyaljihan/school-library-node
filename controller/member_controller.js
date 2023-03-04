const modelMember = require("../models/index").member
const query = require('sequelize').Op
exports.getAllMember = async (request, response)=>{ //nama fungsi(function)
    let members = await modelMember.findAll()
    return response.json({
        succes: true,
        data: members,
        message: 'Semua data member'
    })
}

/** create function for filter */
exports.findMember = async (request, response) =>{
    /** define keyword to find data */
    let name = request.body.name
    let gender = request.body.gender
    let address = request.body.address
    let members = await modelMember.findAll({
    where: {
    [query.or]: [
    { name: { [query.substring]: name } },
    { gender: { [query.substring]: gender } },
    { address: { [query.substring]: address } }
    ]
    }
})
    return response.json({
        success: true,
        data: members,
        message: `All Members have been loaded`
    })   
}

/** create function for add new member */
exports.addMember = (request, response) => {
    let newMember = {
        name: request.body.name,
        address: request.body.address,
        gender: request.body.gender,
        contact: request.body.contact
    }
    console.log(newMember) //cek

    modelMember.create(newMember)
    .then(result => {
    /** if insert's process success */
    return response.json({
    success: true,
    data: result,
    message: `New member has been inserted`
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
    
/** create function for update member */
exports.updateMember = (request, response) => {
    let dataMember = {
    name: request.body.name,
    address: request.body.address,
    gender: request.body.gender,
    contact: request.body.contact
}
/** define id member that will be update */
let idMember = request.params.id
/** execute update data based on defined id member */
modelMember.update(dataMember, { where: { id: idMember } })
.then(result => {
/** if update's process success */
return response.json({
success: true,
message: `Data member has been updated`
    })
})
.catch(error => {
/** if update's process fail */
return response.json({
success: false,
message: error.message
    })
})
}

/** create function for delete data */
exports.deleteMember = (request, response) => {
    /** define id member that will be update */
    let idMember = request.params.id
    /** execute delete data based on defined id member */
    modelMember.destroy({ where: { id: idMember } })
    .then(result => {
    /** if update's process success */
    return response.json({
    success: true,
    message: `Data member has been updated`
    })
    })
    .catch(error => {
    /** if update's process fail */
    return response.json({
    success: false,
    message: error.message
    })
})
}
