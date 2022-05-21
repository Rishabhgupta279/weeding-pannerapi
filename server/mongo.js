const mongoose = require('mongoose');

const DB = 'mongodb+srv://Rishabh:Rishabh@cluster0.iatjz.mongodb.net/Mern?retryWrites=true&w=majority'

mongoose.connect(DB).then(() => {
    console.log(`success`);
}) .catch((err) => console.log(`failure`));


