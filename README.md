# KushiraX-Technology
KushiraX Technology corporate website built as an internship assignment. Full-stack development using Next.js, Tailwind CSS, and MongoDB. Includes functionalities provided in the blueprint.

## Project Overview

This repository contains the source code for the KushiraX Technology corporate website, built according to the provided Website Blueprint. The project delivers a modern, tech-driven platform designed to highlight services, showcase the portfolio, manage career opportunities, and provide seamless user support.

### 🎯 Key Objectives

* Build brand authority with a professional, high-contrast design.
* Implement a full-stack solution for lead and application management.
* Provide a robust, secure, and fully functional Admin Panel.

---

## 💻 Technology Stack

The project adheres strictly to the required technology stack for a production-ready modern application.

| Feature | Technology Used | Rationale |
| :--- | :--- | :--- |
| *Frontend* | Next.js (App Router) & Tailwind CSS | Chosen for performance, SEO benefits (SSR/SSG), and rapid, utility-first styling. |
| *Backend/API* | Node.js / Next.js API Routes | Used to manage server-side logic and handle database interactions securely. |
| *Database* | MongoDB | NoSQL database used for flexible, scalable storage of leads, applications, and content. |
| *Hosting* | Vercel | Optimized hosting for Next.js applications, ensuring high performance and reliability. |
| *Version Control* | GitHub | Centralized repository for collaboration and submission. |

---

## ✨ Features Implemented

* *Comprehensive Sitemap:* Implementation of all required pages: Home, About Us, Services (with sub-categories), Portfolio, Career/Internship, and Contact.
* *Admin Panel (CMS):* A secure, authenticated dashboard for:
    * Content Management (Services, Portfolio Projects)
    * Lead Management (Contact Leads, Internship Applications, Chatbot Data)
* *Dynamic Forms:* Fully functional Contact, Business Inquiry, and Internship Application forms that successfully capture and store data in the *MongoDB* database via the Next.js API.
* *Chatbot Integration:* Workflow design and API integration for initial user support and lead collection.
* *Responsive Design:* Fully mobile-responsive layout built with Tailwind CSS.

---

## 🛠 Setup and Installation

Instructions on how to run the project locally. (You will fill these out after the conversion is complete)

1.  Clone the repository:
    bash
    git clone [Your GitHub URL]
    cd KushiraX-Technology-Website
    
2.  Install dependencies:
    bash
    npm install
    
3.  Configure environment variables:
    * Create a .env.local file and add your MongoDB URI:
        
        MONGODB_URI=[Your MongoDB Connection String]
        
4.  Run the development server:
    bash
    npm run dev
    
    The application will be accessible at http://localhost:3000.
