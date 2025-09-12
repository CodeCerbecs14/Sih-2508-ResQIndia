# 🌐 ResQIndia – Disaster Preparedness & Response Education Platform

**Building a safer, disaster-resilient India through education, gamification, and real-time technology.**

---

## 📖 Overview

**ResQIndia** is a **web-first Progressive Web App (PWA)** that delivers localized, **gamified disaster-preparedness lessons** for schools and colleges.  

It combines **interactive stories, quizzes, videos, and step-by-step drills** with:  
- 🎯 Institution dashboards  
- 📍 Geo-alerts  
- ✅ Government-verified onboarding (UDISE)  

⚡ Designed for **low-bandwidth and offline use**, content can be pre-downloaded and auto-syncs when connectivity returns.

---

## ❌ Problem

- 🇮🇳 India has **~14.71 lakh schools** and **~24.69 crore students**  
- Yet, only **57.2% of schools have computers** and **53.9% have internet access**  
- Existing programs (e.g., **NSSP**) reach only a **tiny fraction** of schools  
- Schools lack **scalable, localized, measurable**, and **offline-ready** solutions for:  
  - Disaster education  
  - Real-time communication  

---

## ✅ Solution (High-Level)

ResQIndia provides **Preparedness-as-a-Service** by delivering:

- 🎮 **Gamified, localized learning modules** (Phaser.js)  
- 🤖 **Offline-first multilingual AI chatbot** (Rasa + LangChain)  
- 📡 **Mesh/offline alerts** (WebRTC → libp2p migration roadmap)  
- 📊 **Institution dashboards** with readiness scores, drill analytics & anonymized reporting (UDISE integration)  

---

## 🚀 Core Features

- **🎓 Personalized Learning Modules**  
  Interactive lessons on earthquakes, floods, fires, cyclones — with progressive difficulty & region-specific scenarios  

- **🏆 Gamified Assessments**  
  Quizzes, choice-driven stories, platformer checkpoints, rewards (points, badges, certificates)  

- **🤖 AI Doubt-Clearing Portal**  
  Multilingual chatbot for “What should I do if…?” + voice support for accessibility  

- **🗺 Geo-Mapping & Regional Awareness**  
  Live maps, state/city plans (e.g., Odisha cyclone evacuation, Himalayan earthquake drills)  

- **📢 Broadcast & Emergency Communication**  
  Secure school authentication, offline peer-to-peer message propagation, and real-time alerts  

- **📊 Institution Dashboards**  
  Drill scheduling, participation metrics, compliance exports, and anonymized government reports  

---

## 🧪 Minimal Viable Product (MVP)

Core pieces to build & demo during hackathon:

- ✅ PWA frontend with **2 gamified modules** (Earthquake, Flood) using Phaser.js  
- ✅ Authentication flow: **Admin → Teacher → Student** (mock/UDISE verification)  
- ✅ Admin dashboard: drill scheduling + participation view (CSV export)  
- ✅ AI chatbot: canned responses + lightweight offline fallback  
- ✅ Offline alert demo: WebRTC peer propagation  
- ✅ Mock integration (sample **IMD/NDMA feed**) triggering demo alert  

---

## 🌟 Unique Selling Points (USP)

- 📡 **Offline-first & low-bandwidth design** – pre-downloadable content + mesh alerts when networks fail  
- 🔗 **Integrated 3-way approach** – gamified student training + institutional planning + multilingual alerts  
- 🏛 **Government-ready onboarding** – UDISE integration & anonymized reporting for policy use  
- 🎮 **Playful learning with measurable outcomes** – assessments + drill analytics tied to gamification  

---

## ⚖️ How ResQIndia Works Differently

| Platform | Focus | Gaps | How ResQIndia is Different |
|----------|-------|------|-----------------------------|
| **FEMA App** | Alerts & checklists (US-centric) | Not localized for India | Localized hazards + gamified learning for schools |
| **Harbor** | Role-play/simulation | No institutional planning/government integration | Adds dashboards + UDISE policy reporting |
| **GeoHazards School App** | Documentation focused | Lacks gamification & alerts | Adds interactive training + offline alerts |

---

## 🛠 Technical Approach (Concise)

- **Frontend:** React + Tailwind + Phaser.js (**PWA + Service Workers**)  
- **Backend / AI:** Node.js + Express; FastAPI / Rasa + LangChain wrappers  
- **Storage & Sync:** PostgreSQL / Firebase (Realtime + Auth); Redis cache  
- **Communications:** Firebase Cloud Messaging (online) + WebRTC mesh demo → **libp2p roadmap**  
- **Integrations:** IMD/NDMA feeds, OpenStreetMap/Mapbox, OpenWeather, UDISE  

---

## 🎯 Impact & Outcomes

- 👩‍🎓 **Students** → Life-saving knowledge + higher retention via gamification  
- 🏫 **Institutions** → Measurable preparedness, drill logs, compliance reports  
- 🏛 **Government & NGOs** → Anonymized readiness data for interventions  
- 🏘 **Communities** → Improved resilience & continuity of alerts during outages  

---

## 📊 How We Measure Success (KPIs)

- 📈 Student module completion rate per school  
- 🧠 Pre/post assessment score improvement  
- 🏃 Drill completion & participation %  
- 📡 Number of devices reached in **offline mesh propagation tests**  
- 🏫 Schools onboarded & verified via **UDISE flows**  

---

## 🎥 Quick Demo Checklist

- ✅ Play a **gamified module** (student view)  
- ✅ Trigger a **demo alert** (mock IMD/NDMA feed → device propagation)  
- ✅ Show **admin dashboard** → drill scheduling & analytics  
- ✅ Show **chatbot query** → offline fallback → online enrichment  

---

## 📌 License

MIT License © 2025 ResQIndia Team
