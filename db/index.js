//Initialize mongoose
const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/client';

//Start DB async
const mongoDB = async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('MongoDB connected');
    } catch (e) {
        console.error(e.message);

        //Exit
        process.exit(1);
    }

}
module.exports = mongoDB;