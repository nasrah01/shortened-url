import mongoose from 'mongoose';
import config from 'config'

const db = async () => {
  const dbUri = config.get("dbUri") as string;

  try {
    await mongoose
    .connect(dbUri)
    .then(() => {
      console.log(`DB connected to ${dbUri}`)
    }) 
  } catch (error) {
    console.log(error)
  }
}

export default db;