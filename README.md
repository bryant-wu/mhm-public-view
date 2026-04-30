# Modern Height Methods (MHM) Core Platform

## IMPORTANT FOR RESUME READERS!!!
Modern Height Methods (MHM) is the result of three months of iteration (66 commits). This repo, "mhm-public-view" simply organized my showable work and put it neatly into a couple readable folders. The preview is at mhm-app-preview.web.app, and the waitlist is found at mhm-waitlist.web.app.

[![React](https://img.shields.io/badge/React-19.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF.svg)](https://vitejs.dev/)
[![Express](https://img.shields.io/badge/Express-4.21-lightgrey.svg)](https://expressjs.com/)
[![Google GenAI](https://img.shields.io/badge/Google_AI-SDK-orange.svg)](https://ai.google.dev/)
[![Supabase](https://img.shields.io/badge/Supabase-Database-3ECF8E.svg)](https://supabase.com/)

An AI-powered physical optimization and kinetic tracking platform. This monorepo contains the full-stack application, separating the React client from the Express backend.

## Technical Architecture

### Client (Frontend)
* React 19 + TypeScript
* Vite
* `@tanstack/react-query` for state and data fetching
* `react-router-dom` for routing
* Tailwind CSS, Framer Motion, and Radix UI (Shadcn) for UI components

### Server (Backend)
* Node.js + Express
* `@google/genai` SDK for processing biometric inputs and generating training protocols
* Supabase (PostgreSQL) for user state, tracking history, and waitlist management

## Key Features
* **Protocol Generation:** Express server interfaces with Google's GenAI to formulate user-specific physical training routines based on onboarding metrics.
* **UI/UX:** Frontend utilizes Framer Motion for fluid screen transitions and micro-interactions.
* **Data Sync:** React Query caches and synchronizes dashboard metrics, community interactions, and training completions with the Supabase backend.
* **Modular Routing:** Centralized routing system managing the core Training Protocol, Global Social Collective, and Profile Settings views.

## Repository Structure

```text
mhm-core/
├── client/                 # React 19 + Vite Frontend
│   ├── src/
│   │   ├── components/
│   │   ├── contexts/
│   │   ├── pages/
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   └── tailwind.config.js
│
├── server/                 # Express + GenAI Backend
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   └── index.js
│   ├── .env.example
│   └── package.json
│
└── README.md
