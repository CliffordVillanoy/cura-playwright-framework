# Cura Playwright Automation Framework

## 🚀 Overview
This project is a scalable end-to-end automation testing framework built using **Playwright** and **TypeScript**. It demonstrates modern automation engineering practices, focusing on clean architecture, maintainability, and test scalability aligned with real-world SDET standards.

---

## 📈 Purpose

This project serves as a portfolio demonstration of building a production-ready automation framework. It showcases the ability to design scalable, maintainable, and efficient test automation solutions aligned with industry best practices.

---

## 🧱 Key Features
- Page Object Model (POM) for maintainable and reusable test design  
- Data-driven testing with centralized test data management  
- Parameterized test execution for scalable scenario coverage  
- Positive and negative test scenarios for robust validation  
- Reusable test setup using Playwright hooks (`beforeEach`)  
- Clean separation of concerns (tests, pages, data, utilities)  

---

## 🛠 Tech Stack
- Playwright  
- TypeScript  
- Node.js  

---

## 🎯 Test Coverage
### Login Module (CURA Healthcare Demo Site)
- Valid login scenario  
- Invalid credentials validation  
- Empty input validation  

---

## 🧠 Framework Design Principles
🔹 Separation of Concerns
Tests → validation and assertions
Pages → UI interactions (POM)
Fixtures → test data
Utils → reusable logic
🔹 Scalability
Easily extendable for new modules and features
Supports multiple datasets and parameterized execution
🔹 Maintainability
Centralized selectors via Page Objects
Reduced duplication using hooks (beforeEach)
Clean and readable test structure

---

👨‍💻 Author

Clifford M. Villanoy

---

## ▶️ Getting Started

Follow the steps below to set up and execute the automation framework locally.

### 1. Install dependencies

- ```bash
- npm install

### 2. Install Playwright browsers

- npx playwright install

### 3. Run all tests

- npx playwright test

### 4. Run tests in headed mode (for debugging)

- npx playwright test --headed

---

