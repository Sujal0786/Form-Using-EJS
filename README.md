
# 📝 Node.js + Express + MongoDB CRUD Form App

A simple **CRUD** (Create, Read, Update, Delete) web app built with:
- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **EJS templates**
- **Custom CSS**

---

## ✅ Features

✔️ Submit a form and store data in MongoDB  
✔️ View all entries in a table  
✔️ Edit any entry  
✔️ Delete any entry  
✔️ Clean and responsive CSS design

---

## 📂 Project Structure

```
form-crud-app/
├── server.js          # Main Node.js server
├── package.json
├── views/             # EJS templates
│   ├── form.ejs       # Create form
│   ├── list.ejs       # Read entries
│   ├── edit.ejs       # Update form
├── public/            # Static assets
│   └── style.css      # CSS styling
```

---

## 🚀 How to Run

### 1️⃣ Clone the repo

```bash
git clone https://github.com/your-username/form-crud-app.git
cd form-crud-app
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Make sure MongoDB is running

For local MongoDB:
```bash
mongod
```

Or use MongoDB Atlas and update your `mongoose.connect()` URI in `server.js`.

---

### 4️⃣ Run the server

```bash
node server.js
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 🖼️ Pages

| Page           | URL               | Description                         |
|----------------|-------------------|-------------------------------------|
| **Create**     | `/`               | Submit a new form                   |
| **Read**       | `/list`           | View all entries in a table         |
| **Update**     | `/edit/:id`       | Edit an existing entry              |
| **Delete**     | `/delete/:id`     | Delete an entry (from table view)   |

---

## 🎨 Styling

Custom CSS is served from the `public/style.css` file:
- Clean form layout
- Zebra-striped table
- Hover effects for buttons & links
- Responsive container for nice alignment

---

## ⚙️ Technologies

- **Node.js**
- **Express.js**
- **MongoDB & Mongoose**
- **EJS Templating**
- **HTML / CSS**

---

## 🤝 License

This project is free to use for learning or as a starter for your own CRUD apps.

---


