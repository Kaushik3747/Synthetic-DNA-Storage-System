
# 🧬 Synthetic DNA Storage System

### 🔬 A Full-Stack MERN Application for DNA-Based Digital Data Storage

Encode digital information into synthetic DNA sequences, securely store it in MongoDB, and decode it back using DNA-inspired encoding algorithms.

<p>

![React](https://img.shields.io/badge/React-Frontend-61DAFB?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-API-black?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?logo=mongodb)
![JWT](https://img.shields.io/badge/JWT-Secure-orange)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-UI-38B2AC?logo=tailwindcss)

</p>

---

### 🚀 Modern MERN Stack • 🔐 JWT Authentication • 🧬 DNA Encoding • 📊 Interactive Dashboard

</div>

---

# 📖 Project Overview

The **Synthetic DNA Storage System** is a full-stack web application that demonstrates how digital information can be represented using **synthetic DNA sequences**.

The application converts text into **Binary**, maps the binary data into **DNA nucleotides (A, T, C, G)**, securely stores the generated DNA sequence in MongoDB, and allows users to decode it back to its original text.



---

# ✨ Features

## 🔐 User Authentication

- ✅ User Registration
- ✅ Secure Login
- ✅ JWT Authentication
- ✅ Protected Routes
- ✅ User Profile

---

## 🧬 DNA Encoding

Convert digital text into DNA sequences.

```
Text
   │
   ▼
Binary
   │
   ▼
DNA Sequence
```

### Features

- 🔹 Text → Binary Conversion
- 🔹 Binary → DNA Mapping
- 🔹 MongoDB Storage
- 🔹 Secure Data Saving

---

## 🔬 DNA Decoding

Convert DNA sequences back into readable text.

```
DNA Sequence
      │
      ▼
Binary Data
      │
      ▼
Original Text
```

---

## 📁 File Support

Supported formats

- 📄 TXT Files
- 📑 PDF Files

---

## 📊 Dashboard

Interactive dashboard displaying

- 📈 Total DNA Records
- 🧬 Total DNA Bases
- 💾 Binary Bit Count
- 📅 Recent Upload
- 📊 Circular Progress Analytics

---

## 📜 Storage History

Manage previously encoded DNA records.

Features include

- 🔍 Search Records
- 🗑 Delete Records
- 📋 Copy DNA Sequence
- 📥 Download DNA Sequence
- 📥 Download Original Text
- 👁 Preview Stored Data
- 📊 GC & AT Content

---

## 📈 DNA Analytics

Each DNA sequence includes

- 🧬 DNA Length
- 💾 Binary Length
- 🟢 GC Content
- 🔵 AT Content

---

## 🎨 Modern User Interface

- 🌙 Dark Theme
- 📱 Responsive Design
- ✨ Tailwind CSS
- ⚡ Interactive Components
- 🎯 Smooth Navigation

---

# 🏗️ System Architecture

```text
              👤 User
                 │
                 ▼
      ⚛️ React Frontend (Vite)
                 │
             Axios API
                 │
                 ▼
        🚀 Express.js Server
                 │
      🧬 DNA Encoding Logic
                 │
                 ▼
         🍃 MongoDB Database
```

---

# 🔄 Workflow

```text
          User Input
               │
               ▼
         Text Encoding
               │
               ▼
      Binary Conversion
               │
               ▼
      DNA Sequence Generation
               │
               ▼
        MongoDB Storage
               │
               ▼
        DNA Retrieval
               │
               ▼
      Binary Conversion
               │
               ▼
         Original Text
```

---

# 🧬 DNA Encoding Mapping

| Binary | DNA |
|---------|-----|
| 00 | 🟢 A |
| 01 | 🔵 T |
| 10 | 🟣 C |
| 11 | 🟠 G |

---

# 🛠️ Technology Stack

## 💻 Frontend

- ⚛️ React.js
- ⚡ Vite
- 🎨 Tailwind CSS
- 🔄 Axios
- 🧭 React Router DOM
- 🎭 Framer Motion
- 🎯 React Icons

---

## ⚙️ Backend

- 🟢 Node.js
- 🚀 Express.js
- 🔐 JWT Authentication
- 📂 Multer
- 🍃 MongoDB
- 📦 Mongoose

---

# 📂 Project Structure

```text
Synthetic-DNA-Storage-System

├── client
│   ├── src
│   ├── components
│   ├── pages
│   ├── services
│   └── assets
│
├── server
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── utils
│   └── config
│
├── docs
│
├── .gitignore
│
└── README.md
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/Kaushik3747/Synthetic-DNA-Storage-System.git
```

## Backend

```bash
cd server

npm install

npm run dev
```

## Frontend

```bash
cd client

npm install

npm run dev
```

---

# 🔑 Environment Variables

Create a `.env` file inside the **server** folder.

```env
PORT=5000

MONGO_URI=YOUR_MONGODB_CONNECTION_STRING

JWT_SECRET=YOUR_SECRET_KEY
```

---

# 🌐 REST API

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/register` | Register User |
| POST | `/api/auth/login` | Login User |
| POST | `/api/dna/encode` | Encode Text to DNA |
| POST | `/api/dna/decode` | Decode DNA |
| GET | `/api/dna/history` | Get Storage History |
| GET | `/api/dna/stats` | Dashboard Statistics |
| DELETE | `/api/dna/:id` | Delete DNA Record |

---

# 📸 Application Screenshots

| Module | Screenshot |
|---------|------------|
| 🔐 Login | `docs/login.png` |
| 🏠 Dashboard | `docs/dashboard.png` |
| 🧬 Encode | `docs/encode.png` |
| 🔬 Decode | `docs/decode.png` |
| 📁 Upload | `docs/upload.png` |
| 📜 History | `docs/history.png` |
| 👤 Profile | `docs/profile.png` |

> Replace these placeholders with actual screenshots from your application.

---

# 🎯 Learning Outcomes

This project demonstrates practical experience in:

- 💻 Full-Stack MERN Development
- 🔐 JWT Authentication
- 🍃 MongoDB Integration
- 📡 REST API Development
- 🧬 DNA Data Encoding Concepts
- 📂 File Upload Handling
- 📊 Data Visualization
- 🎨 Responsive UI Development

---

# 🔮 Future Enhancements

- 🌐 Cloud Deployment
- 📄 DOCX & CSV File Support
- 📊 Advanced Dashboard Analytics
- 📑 PDF Report Generation
- 🧬 Interactive DNA Visualization
- ⚡ Performance Optimization

---

# 📚 Applications

- 🧬 Bioinformatics Education
- 🧪 Synthetic Biology Demonstrations
- 💾 DNA Data Storage Research
- 🎓 Academic Projects
- 🔬 Data Encoding Research

---

# 👨‍💻 Developer

**Kaushik Sriram Kumar**

🎓 B.Tech – Electronics and Communication Engineering

🏫 SRM Institute of Science and Technology

🔗 GitHub: **https://github.com/Kaushik3747**

---

# 📄 License

This project is licensed under the **MIT License**.

---

<div align="center">



