# Integrity Commercial Landing Page
A high-performance responsive site built with Astro and React.

## 🛠 Tech Stack
* **Framework:** Astro (Static Site Generation)
* **UI Library:** React (Stateful Navigation Components)
* **Styling:** Bootstrap 3 & Custom CSS
* **Hosting:** Netlify (Continuous Deployment)
* **Domain Management:** GoDaddy DNS Configuration

## 🚀 Project Overview
This project involved migrating a commercial business presence from a legacy "Coming Soon" placeholder to a fully functional, multi-page production environment. The primary goal was to ensure high performance and SEO-friendliness while maintaining a complex responsive layout for mobile users.

## ⚙️ Engineering Highlights
* **Deployment Pipeline:** Implemented a CI/CD workflow using Netlify, enabling automatic builds and deployments from the GitHub main branch.
* **State Management:** Developed custom React hooks and state logic to handle mobile navigation toggles, overriding legacy Bootstrap CSS behaviors to improve user experience.
* **Infrastructure & DNS:** Orchestrated the migration of domain records, resolving conflicts with legacy GoDaddy "Airo" services and managing CNAME/A-record propagation for 100% uptime.
* **Performance Optimization:** Utilized Astro’s "Islands Architecture" to minimize JavaScript execution on the client-side, resulting in faster page load speeds.

## 📂 Architecture
```text
/src
  /components  <-- React Navbar and Header logic
  /pages       <-- Astro routing
/public
  /css         <-- Styling
  /images      <-- Optimized assets
```
## 🛠 How to Run Locally
* **Clone the repo:**
 ```bash
git clone https://github.com/JerryBruce/integrity-commercial.git
cd integrity-commercial
```
* **Install dependencies:**
```bash
npm install
```
* **Run dev server:**
 ```bash
  npm run dev
 ```
* **Build for production:**
```bash
npm run build
```
