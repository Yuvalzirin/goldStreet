const { orders, items, users } = require('../models/index');

    async function createUser(firstName, lastName, email, password, userType) {
        try {
            const user = new User({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                userType: userType, // Add userType if provided
            });
    
            return await user.save();
        } catch (error) {
            console.error('Error creating user:', error);
            throw error; // Re-throw the error to be caught by the caller
        }
    }
    

const getUser = async(existingEmail,password) =>{
    return await users.findOne({password:password,userName:existingEmail})
}

const getUsers = async() =>{
    return await User.find({})
}

const updateUser = async (existingEmail,firstName,lastName, userType) => {
    const user = await getUser(existingEmail);
    if (!user)
        return null;
        user.firstName=firstName,
        user.lastName=lastName,
        user.userType=userType

    await user.save();
    return user;
}

const deleteUser = async (email) => {
    const user = await getUser(email);
    if (!user)
        return null;
    await user.deleteOne();
    return user;
}
async function createAdmin(firstName,lastName,email,password,userType){
    const admin = new User(
        {
        firstName:firstName,
        lastName:lastName,
        email:email,
        password:password

        });
    if (userType)
        admin.userType=userType
    
    return await admin.save()
}

module.exports = {
    createUser,
    getUser,
    getUsers,
    updateUser,
    deleteUser,
    createAdmin
}