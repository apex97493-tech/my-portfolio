# Aman Singh — Portfolio

Full-stack personal portfolio for **Aman Singh**, Cyber Security & Software Developer, built with the **MERN stack**.

## Live Demo

- **Frontend:** [https://aman-singh-jklu.vercel.app](https://aman-singh-jklu.vercel.app)
- **Backend:** [https://aman-singh-odgm.onrender.com](https://aman-singh-odgm.onrender.com)

## Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | React 18, Vite, React Router v6, Framer Motion, Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB + Mongoose |
| Animations | Framer Motion (scroll-triggered, typewriter, skill bars) |

## Features

- Typewriter effect hero with profile photo
- Animated skill bars (Framer Motion, scroll-triggered)
- Project cards with filter tabs (All / Fullstack / ML / Simulation)
- Vertical animated timeline (Education + Experience)
- Professional certifications grid
- Contact form → saves to MongoDB (optional Nodemailer email)
- CV download in **PDF** and **DOCX** from Express backend
- Dark / Light mode toggle
- Fully responsive (mobile-first)

## Local Setup

### Prerequisites
- Node.js 18+
- MongoDB Atlas URI (or local MongoDB)

### 1. Clone

```bash
git clone <repo-url>
cd aman-singh-portfolio
```

### 2. Backend

```bash
cd server
cp .env.example .env
# Fill in MONGO_URI and optional EMAIL_USER / EMAIL_PASS
npm install
node index.js
```

Server runs at `http://localhost:5000`.

### 3. Frontend

```bash
cd client
# .env already has VITE_API_URL=http://localhost:5000
npm install
npm run dev
```

Frontend runs at `http://localhost:5173`.

### 4. CV Files

Place `resume.pdf` and `resume.docx` in `server/assets/cv/`.

## Environment Variables

**`server/.env`**
```
PORT=5000
MONGO_URI=mongodb+srv://...
CLIENT_URL=http://localhost:5173
EMAIL_USER=          # optional
EMAIL_PASS=          # optional
```

**`client/.env`**
```
VITE_API_URL=http://localhost:5000
```

> **Never commit `.env` files.** They are in `.gitignore`.

## Deployment

- **Frontend → Vercel:** connect `/client`, set build command `npm run build`, output `dist`. Add `VITE_API_URL` pointing to your backend.
- **Backend → Render:** connect `/server`, start command `node index.js`. Add all env vars in Render dashboard.

## Folder Structure

```
aman-singh-portfolio/
├── client/
│   └── src/
│       ├── components/  (Navbar, Hero, About, Skills, Projects, Timeline, Certs, Contact, Footer)
│       ├── hooks/       (useTypewriter.js, useScrollAnimation.js)
│       └── pages/       (Home.jsx)
└── server/
    ├── models/          (Contact.js)
    ├── routes/          (contact.js, download.js)
    ├── assets/cv/       (resume.pdf, resume.docx)
    └── index.js
```
