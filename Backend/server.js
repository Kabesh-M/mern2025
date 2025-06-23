const express=require('express');
const dotenv=require('dotenv');
const connectDB=require('./config/db');
const router = require('./routers/egRouters');
dotenv.config();
const app=express();
const PORT=process.env.PORT;
connectDB();
app.use(express.json());
app.use(router);
app.get('/get', (req, res) => {
  res.send('Get Route is working!');
});
app.post('/post', (req, res) => {
  res.send('POST Route is working!');
});
app.put('/put', (req, res) => {
  res.send('Put Route is working!');
});
app.delete('/delete', (req, res) => {
  res.send('Delete Route is working!');
});
app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`);
})