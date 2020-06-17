const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/DB", (err) => {
   if (!err)
   {
       console.log("Connection to the Database was successful.")
   }
   else
   {
    console.log("Connection to the Database has failed.")
   }
});

module.exports = mongoose;