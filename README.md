# FlowTrack for Girlies

**Vanesa Kayla Zahra — 2306161901**

A period tracking web application built with React.js and Express.js. Track your cycle, predict your next period, and understand your body better.

---

## Live Demo

- **Frontend:** https://flowtrack-girlies.vercel.app
- **Backend:** https://flowtrack-backend-production-6bba.up.railway.app

---

## Tech Stack

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Railway](https://img.shields.io/badge/Railway-131415?style=for-the-badge&logo=railway&logoColor=white)

---

## Screenshots

### Landing Page
![Landing Page](https://i.imgur.com/PLACEHOLDER1.png)

### Tracker Page
![Tracker Page](https://i.imgur.com/PLACEHOLDER2.png)

### Delete Confirmation Modal
![Delete Modal](https://i.imgur.com/PLACEHOLDER3.png)

---

## Features

- **Create** — Log a new menstrual cycle with start date, duration, cycle length, and notes
- **Read** — View complete cycle history in chronological order
- **Delete** — Remove cycle data with a custom confirmation modal
- **Predict** — Automatically calculates the next predicted period based on average cycle length

---

## Project Structure
```
flowtrack-frontend/
├── public/
├── src/
│   ├── pages/
│   │   ├── LandingPage.js
│   │   └── TrackerPage.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
└── tailwind.config.js
```

---

## Getting Started

### Prerequisites

- Node.js >= 18
- npm >= 8

### Installation

```bash
git clone https://github.com/VanesaKayla/flowtrack-frontend.git
cd flowtrack-frontend
npm install
npm start
```

The app will run at `http://localhost:3000`.

Make sure the backend is running at `http://localhost:8080` or update the API URL in `src/pages/TrackerPage.js`.

---

## Related Repository

Backend: https://github.com/VanesaKayla/flowtrack-backend
