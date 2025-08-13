require('dotenv').config()
const app = require('./src/app')
const connectDB = require('./src/db/db')
require('dotenv').config();

connectDB()
console.log("Public Key:", process.env.IMAGEKIT_PUBLIC_KEY);
console.log("Private Key loaded?", !!process.env.IMAGEKIT_PRIVATE_KEY);
console.log("Endpoint:", process.env.IMAGEKIT_URL_ENDPOINT);


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
