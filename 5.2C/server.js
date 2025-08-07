// var express = require("express")
// var app = express()
// app.use(express.static(__dirname+'/public'))
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
// var port = process.env.port || 3000;
// app.listen(port,()=>{
// console.log("App listening to: "+port)
// console.log(`Server is running at http:/localhost:${port}`)
// })
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/myprojectDB', {
// useNewUrlParser: true,
// useUnifiedTopology: true,
// });
// mongoose.connection.on('connected', () => {
// console.log('Connected to MongoDB!');
// });

// var express = require("express")
// var app = express()
// var port = process.env.port || 3004
// const mongoose = require('mongoose');
// // Middleware
// app.use(express.static(__dirname + '/public'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// mongoose.connect('mongodb://localhost:27017/myprojectDB', {
// useNewUrlParser: true,
// useUnifiedTopology: true,
// });
// mongoose.connection.on('connected', () => {
// console.log('Connected to MongoDB');
// });
// // 2. Define your schema and model
// const ProjectSchema = new mongoose.Schema({
// title: String,
// image: String,
// link: String,
// description: String,
// });
// const Project = mongoose.model('Project', ProjectSchema);
// // 3. REST API route
// app.get('/api/projects', async (req, res) => {
// const projects = await Project.find({});
// res.json({ statusCode: 200, data: projects, message: 'Success' });
// });
// // 4. Start server
// app.listen(port, () => {
// console.log(`App listening on port ${port}`);
// });

// const projectsRoute =
// require('./routes/projects');
// app.use('/api/projects', projectsRoute);

// // const express = require('express');
// // const app = express();
// // const PORT = 3004;
// // // Import route file
// // const helloRoute = require('./routes/hello');
// // // Mount the route at /api/hello
// // app.use('/api/hello', helloRoute);
// // // Root route
// // app.get('/', (req, res) => {
// // res.send('Welcome to the Home Page!');
// // });
// // app.listen(PORT, () => {
// // console.log(`Server is running at
// // http://localhost:${PORT}`);
// // });

// // const express = require('express');
// // const mongoose = require('mongoose');
// // const app = express();
// // const PORT = process.env.PORT || 3005;

// // // Middleware
// // app.use(express.static(__dirname + '/public'));
// // app.use(express.json());
// // app.use(express.urlencoded({ extended: false }));

// // // MongoDB connection
// // mongoose.connect('mongodb://localhost:27017/myprojectDB', {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // });
// // mongoose.connection.on('connected', () => {
// //   console.log('Connected to MongoDB');
// // });

// // // Import Routes
// // const projectsRoute = require('./routes/projects');
// // const helloRoute = require('./routes/hello');

// // // Mount Routes
// // app.use('/api/projects', projectsRoute);
// // app.use('/api/hello', helloRoute);

// // // Optional: Root route
// // app.get('/', (req, res) => {
// //   res.send('Welcome to the Home Page!');
// // });

// // // Start Server
// // app.listen(PORT, () => {
// //   console.log(`Server is running at http://localhost:${PORT}`);
// // });

// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();
// const PORT = process.env.PORT || 3005;

// // Middleware
// app.use(express.static(__dirname + '/public'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// // DB connection
// mongoose.connect('mongodb://localhost:27017/myprojectDB', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });
// mongoose.connection.on('connected', () => {
//   console.log('Connected to MongoDB');
// });

// // Routes
// const projectsRoute = require('./routes/projects');
// app.use('/api/projects', projectsRoute);

// // Optional: Home route
// app.get('/', (req, res) => {
//   res.send('Welcome to the Home Page!');
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });
const express = require('express');
const app = express();
const PORT = 3006;

const projectRoutes = require('./routes/projects');

app.use('/api/projects', projectRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
