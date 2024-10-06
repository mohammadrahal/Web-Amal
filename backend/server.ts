require('dotenv').config()
import express from 'express';
// import path from 'path';

const app = express();
const PORT = process.env.PORT;



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
