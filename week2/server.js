// var express = require("express")
// const path = require('path');
// var app = express()
// var port = process.env.port || 3001;

// // Middleware to parse JSON bodies (for POST requests)
// app.use(express.json());

// // Serve static files from the "public" folder
// app.use(express.static(path.join(__dirname, 'public')));

// // In-memory array to store quotes
// let quotes = [
//   "The best way to predict the future is to invent it.",
//   "Life is 10% what happens to us and 90% how we react to it.",
//   "The only limit to our realization of tomorrow is our doubts of today.",
//   "Do not wait to strike till the iron is hot; but make it hot by striking."
// ];

// // GET endpoint to retrieve a random quote
// // Usage example: http://localhost:3000/api/quote
// app.get('/api/quote', (req, res) => {
//   const randomIndex = Math.floor(Math.random() * quotes.length);
//   res.json({ quote: quotes[randomIndex] });
// });

// // Optional: POST endpoint to add a new quote
// // Example POST body: { "quote": "Your new inspirational quote." }
// app.post('/api/quote', (req, res) => {
//   const { quote } = req.body;
//   if (!quote || typeof quote !== 'string') {
//     return res.status(400).json({ error: 'Please provide a valid quote.' });
//   }
//   quotes.push(quote);
//   res.json({ message: 'Quote added successfully.', quotes });
// });

// // Additional example endpoint to check server health
// app.post('/health', (req, res) => {
//   res.send('Server is healthy!');
// });


// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

var express = require("express")
const path = require('path'); // Make sure to include this
var app = express()
var port = process.env.port || 3003;

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// GET endpoint to calculate the square of a number
// Example: http://localhost:3000/square?num=5
app.get('/square', (req, res) => {
  const num = parseFloat(req.query.num);
  
  if (isNaN(num)) {
    return res.send("Error: Please provide a valid number using query parameter 'num'.");
  }
  
  const square = num * num;
  res.send(`The square of ${num} is: ${square}`);
});

// GET endpoint to add two numbers
// Example: http://localhost:3000/add?num1=5&num2=3
app.get('/add', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res.send("Error: Please provide two valid numbers using query parameters 'num1' and 'num2'.");
  }

  const sum = num1 + num2;
  res.send(`The sum of ${num1} and ${num2} is: ${sum}`);
});
app.use(express.json()); // make sure this is at the top if not already

// POST route to multiply two numbers
app.post('/multiply', (req, res) => {
  const { num1, num2 } = req.body;

  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return res.status(400).send("Please send numbers in the body as JSON");
  }

  const result = num1 * num2;
  res.send({ result });
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});