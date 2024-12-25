const express = require('express');
const app = express();
const tasks = require('./routes/task')

//middleware
app.use(express.json());

const port = 3000;



app.get('/', (req,res) => {
    res.send('hello to you')
});
app.use('/api/v1/tasks', tasks);


app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})











//app.post('./api/v1/tasks')create new task
//app.get('/api/v1/tasks')get all tasks
//app.get('/api/v1/tasks')get single task
//app.patch('/api/v1/tasks')update task
//pp.delete('/api/v1/tasks')delete task
