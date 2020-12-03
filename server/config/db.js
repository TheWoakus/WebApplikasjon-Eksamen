import mongoose from 'mongoose';

const connectDatabase = async () => {
  let conDb;
  try {
    conDb = await mongoose.connect(process.env.DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  } catch (error) {
    console.log(error.message);
  }

  console.log(`Connected to mongodb ${conDb.connection.host}`);
};

export default connectDatabase;
