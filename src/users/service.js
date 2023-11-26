const User = require('../types/user');

async function createUser(userData) {
    try {
        const newUser = new User(userData);
        const savedUser = await newUser.save();
        console.log('User created:', savedUser);
        return savedUser;
      } catch (error) {
        console.error('Error creating user:', error.message);
        throw error;
      }
}

async function getUserById(id) {
    try {
        const user = await User.findById(id);
        return user;
    } catch (error) {
        console.error('Error getting user:', error.message);
        throw error;
    }
}

async function updateUser(userId, updatedUserData) {
    try {
      const updatedUser = await User.findByIdAndUpdate(userId, updatedUserData, {
        new: true,
        runValidators: true, 
      });
  
      if (!updatedUser) {
        throw new Error('User not found');
      }
  
      console.log('User updated:', updatedUser);
      return updatedUser;
    } catch (error) {
      console.error('Error updating user:', error.message);
      throw error;
    }
  }

  async function deleteUser(userId) {
    try {
      const deletedUser = await User.findByIdAndDelete(userId);
  
      if (!deletedUser) {
        throw new Error('User not found');
      }
  
      console.log('User deleted:', deletedUser);
      return deletedUser;
    } catch (error) {
      console.error('Error deleting user:', error.message);
      throw error;
    }
}

module.exports = {
    createUser,
    getUserById,
    updateUser,
    deleteUser,
}