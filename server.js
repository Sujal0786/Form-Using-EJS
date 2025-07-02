// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
// Add this line in server.js to serve static files:
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/formCRUDDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Schema and Model
const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Form = mongoose.model('Form', formSchema);

// ROUTES

// Home ➜ Create form
app.get('/', (req, res) => {
  res.render('form');
});

// Create: Handle form submission
app.post('/submit', (req, res) => {
  const newForm = new Form({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  });

  newForm.save()
    .then(() => res.redirect('/list'))
    .catch(err => res.send('Error: ' + err));
});

// Read: Show all entries
app.get('/list', async (req, res) => {
  const forms = await Form.find();
  res.render('list', { forms: forms });
});

// Update: Show edit form
app.get('/edit/:id', async (req, res) => {
  const form = await Form.findById(req.params.id);
  res.render('edit', { form: form });
});

// Update: Handle update
app.post('/update/:id', async (req, res) => {
  await Form.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  });
  res.redirect('/list');
});

// Delete: Handle deletion
app.post('/delete/:id', async (req, res) => {
  await Form.findByIdAndDelete(req.params.id);
  res.redirect('/list');
});

// Start server
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
