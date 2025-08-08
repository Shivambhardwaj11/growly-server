# Growly – AI Ad Creative Generator 🚀

Growly is a full-stack landing page application built with the **MERN stack (MongoDB, Express.js, React, Node.js)**. It collects user leads (name, email, phone number, business type, and message) through a form and stores them in a MongoDB database for further marketing or communication purposes.

---

## ✨ Features

- Responsive and modern React landing page
- Lead capture form
- Real-time form validation and alerts
- Backend API using Express.js
- MongoDB integration with Mongoose
- Secure environment variable handling
- CORS configured for local development

---

## 📁 Project Structure

```
growly/
├── client/            # React frontend
│   └── src/
│       └── components/
│           └── LeadForm.jsx
├── server/            # Express backend
│   ├── server.js
│   ├── lead.model.js
│   └── .env
└── README.md
```

---

## ⚙️ Technologies Used

- **Frontend**: React, JavaScript, Vite
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Other Tools**: Mongoose, dotenv, cors

---

## 🔧 Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/your-username/growly.git
cd growly
```

---

### 2. Setup Backend (Server)

```bash
cd server
npm install
```

Create a `.env` file in the `server` directory:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Then start the server:

```bash
node server.js
```

---

### 3. Setup Frontend (Client)

```bash
cd ../client
npm install
npm run dev
```

The React app will start on `http://localhost:5173`.

---

## 🔗 API Endpoint

| Method | Endpoint         | Description              |
|--------|------------------|--------------------------|
| POST   | `/api/leads`     | Submit lead form data    |

---

## 📬 Form Data Collected

- Name
- Email
- Phone
- Business Type
- Message

---

## 📌 Notes

- Make sure your MongoDB Atlas cluster has your current IP **whitelisted**.
- Backend runs on `http://localhost:5000`
- Frontend (Vite) runs on `http://localhost:5173`

---

## 📄 License

This project is open-source and free to use under the MIT License.

---

## 👨‍💻 Author

Made with ❤️ by [Shivam Bhardwaj](https://github.com/your-username)
