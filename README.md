# 🚀 Next.js Starter Template

A modern **Next.js 15 starter template** with everything you need pre-configured.  
Includes **Redux Toolkit, Redux Persist, Axios, Tailwind CSS, Theme Toggle (Dark/Light), Zod validation, Cookie management, and ClientJS** — ready to start building immediately.

---

## ✨ Features

- ⚡ **Next.js 15 (App Router)** – server-first React framework  
- 🗂 **Redux Toolkit** – scalable state management  
- 💾 **Redux Persist** – persist Redux state in `localStorage`  
- 🎨 **Dark / Light Theme Toggle** – Tailwind-powered with smooth transitions  
- 🌐 **Axios Setup** – centralized HTTP client with interceptors  
- 🔑 **Cookie Management** – via `js-cookie`  
- 🕵️ **Client Fingerprinting** – with `clientjs`  
- ✅ **Schema Validation** – via `zod`  
- 🛠 **Developer Ready** – minimal setup, maximum productivity  

---

## 📦 Installed Dependencies

```json
{
  "@reduxjs/toolkit": "^2.8.2",
  "axios": "^1.11.0",
  "clientjs": "^0.2.1",
  "js-cookie": "^3.0.5",
  "lucide-react": "^0.542.0",
  "next": "15.5.2",
  "react": "19.1.0",
  "react-dom": "19.1.0",
  "react-redux": "^9.2.0",
  "redux-persist": "^6.0.0",
  "zod": "^4.1.5",
  "tailwindcss": "^3.4.0"
}


git clone https://github.com/rockey223/nextJsStarterTemplate.git
cd nextjs-starter-template


npm install
# or
yarn install
# or
pnpm install


npm run dev


src/
 ├── app/
 │   ├── layout.js          # Root layout
 │   ├── page.js            # Example homepage (Hero section + Theme toggle)
 │   └── utils/axios.js     # Axios setup
 │
 ├── lib/
 │   ├── store.js           # Redux + Persist configuration
 │   └── actions/           # Redux slices
 │
 ├── components/
 │   ├── ThemeToggle.jsx    # Floating theme toggle button
 │   └── ...
 │
 └── styles/                # Global styles (Tailwind)




