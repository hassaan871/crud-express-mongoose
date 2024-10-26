const User = require('../models/user')

const handleGetAllUsers = async (req, res) => {
    const allUsers = await User.find({})
    if(!allUsers){return res.json({status: "No User in DataBase"})}
    return res.json(allUsers)
}

const handleGetUserById = async (req, res) => {
    const id = req.params.id
    const user = await User.findOne(id)
    if(!user){return req.status(404).json({eroor: 'User Not Found'})}
    return res.json(user)
}

const handleUpdateUserById = async (req, res) => {
    const id = req.params.id
    await User.findByIdAndUpdate(id, {lastName:"Changed"})
    return res.json({status: "LastName changed successfully"})
}

const handleDeleteUserById = async (req, res) => {
    const id = req.params.id
    await User.findByIdAndDelete(id)
    return res.json({status: "Deleted Success"})
}

const handleCreateNewUser = async (req, res) => {
    const body = req.body
    if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title){
        return res.status(400).json({msg: 'All fields are required'})
    }

    await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title
        
    })

    console.log("result", result);

    return res.status(201).json({msg: "Success", id: result._id})
    
}

module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser
}