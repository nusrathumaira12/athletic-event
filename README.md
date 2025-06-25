# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

---

## 📂 Client Repository

🔗 [https://github.com/nusrathumaira12/athletic-event](https://github.com/nusrathumaira12/athletic-event)

---

## 📡 Backend Repository

🔒 This project uses a separate backend (Node.js, Express, MongoDB) for secure API and JWT auth.  
https://github.com/nusrathumaira12/athletic-event-server

---

## 🛠️ Tech Stack

- **Frontend:** React, Tailwind CSS  
- **Authentication:** Firebase (Email/Password + Google)  
- **Protected Routes:** JWT Tokens with axios  
- **Routing:** React Router DOM  
- **State & Effects:** React Hooks  

---

## ✨ Features

- 🔐 Firebase login and registration (Email & Google)  
- 🛡️ JWT-based route protection (using custom backend)  
- 📅 View event list with search by name/location  
- 🧾 My Bookings page with delete functionality  
- 🧰 Toggle layout: Table/Card View  
- 🌐 Fully responsive on mobile and desktop  

---

## 📦 Key Dependencies

- firebase
- axios
- react-router-dom
- sweetalert2
- jwt-decode
- framer-motion
- classnames
- moment

---

## 🧪 How to Run on Local Machine

1️⃣ Clone the Repository and Enter Folder

```bash
git clone https://github.com/nusrathumaira12/athletic-event.git
cd athletic-event
```

2️⃣ Install Dependencies  
3️⃣ Add Firebase and Backend Config  
4️⃣ Start the Development Server

```bash
npm install
```

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

```bash
npm run dev
```

5️⃣ Open your browser at [http://localhost:3000](http://localhost:3000)

---

🙋‍♀️ Author  
Nusrat Humaira  
Frontend Developer | MERN Stack Learner  
📧 nusrathum31@gmail.com  
🔗 [GitHub Profile](https://github.com/nusrathumaira12)
