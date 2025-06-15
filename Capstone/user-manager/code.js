const mongoose  = require('mongoose');
const User = require('./models/UserSchema');

(async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/userApp');
    //console.log('✅ MongoDB Connected');
  } catch (err) {
    //console.error('❌ DB Connection Failed:', err.message);
    process.exit(1);
  }
})();
//Mapping the global promise to the mongoose promise
mongoose.Promise = global.Promise

//Create Db connection 
// const db = mongoose.connect("mongodb://localhost:27017/todo", { 
//     useNewUrlParser: true, 
//     useUnifiedTopology: true 
// });
// const db = async () => {
//     try {
//     const conn = await mongoose.connect('mongodb://localhost:27017/todo');
//     console.log(`✅ MongoDB Connected: ${27017}`);
// } catch (error) {
//     console.error('❌ MongoDB connection failed:', error.message);
//     process.exit(1); // Exit with failure
// }
// };


//Create User 
const addUser = (user) => {
    User.create(user).then(user => {
        console.info("New User Created");
        mongoose.disconnect().then(() => process.exit(0));
    });
}

const findUser = (name) => {
    const search = new RegExp(name, 'i');
    User.find({$or: [{firstName: search}, {lastName: search}]})
        .then(user => {
            console.info(user);
            console.info(`${user.length} matches`);
            mongoose.disconnect().then(() => process.exit(0));
        });
}

const updateUser = (_id, user) => {
    User.updateOne({_id}, user)
        .then(User => {
            console.info("User Updated")
            mongoose.disconnect().then(() => process.exit(0));
});
}

const removeUser = (_id) => {
    User.deleteOne({_id}).then(user => {
        console.info('User has been removed');
        mongoose.disconnect().then(() => process.exit(0));
    }
    )
}

const listUsers = () => {
    User.find().then(user => {
        console.info(user);
        console.log(`${user.length} Users`);
        mongoose.disconnect().then(() => process.exit(0));
    });
}
module.exports = {
    addUser,
    findUser,
    updateUser,
    removeUser,
    listUsers 
}