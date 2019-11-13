const mongoose = require('mongoose');
      mongoose.Promise = global.Promise,
      chalk = require('chalk');

//-----Database Connection----------

try {
    mongoose.connect(`mongodb://localhost:27017/${process.env._MongoDBDatabaseName_}`,  { useUnifiedTopology: true, useNewUrlParser: true, 'useCreateIndex':true }).catch((err) => {
     if(err) return console.error(chalk.red(' [ ✗ ] '), err);
     console.log(chalk.green(' [ ✓ ]'), `Connected to Database : ${envConfig['MongoDB']['DatabaseName']}`); 
    }) 
  } catch (error) {
      return console.error(chalk.red(' [ ✗ ] '), error);
  };

//------------------------------------