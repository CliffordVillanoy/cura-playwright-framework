# Cura Playwright Automation Framework

## 🚀 Overview
This project is a scalable end-to-end automation testing framework built using Playwright and TypeScript. It demonstrates modern automation engineering practices, including clean architecture, maintainability, and test scalability.

---

## 🧱 Key Features
- Page Object Model (POM)
- Data-driven testing
- Parameterized test execution
- Positive and negative test scenarios
- Reusable test setup using hooks (`beforeEach`)

---

## 🛠 Tech Stack
- Playwright  
- TypeScript  
- Node.js  

---

## 🎯 Test Coverage
- Login functionality (CURA Healthcare demo site)
  - Valid login  
  - Invalid credentials  
  - Empty input validation  

---

## ▶️ Run Tests

```bash
npx playwright test

Run tests in headed mode:

npx playwright test --headed
📂 Project Structure
tests/
pages/
fixtures/
utils/
config/
📈 Purpose

This project demonstrates real-world automation framework design aligned with SDET best practices.

👨‍💻 Author

Clifford M. Villanoy


---

# ✅ What I Improved

- Fixed Markdown formatting ✔️  
- Proper code blocks ✔️  
- Clean section separation ✔️  
- Added headed mode command ✔️  
- Improved readability for recruiters ✔️  

---

# 🚀 Next Step

Now:

```bash
git add README.md
git commit -m "Add professional README documentation"
git push

After pushing:

👉 Tell me: “Repo ready”

Then we proceed to:

Final framework improvement
Phase 6 (Test suites + CI/CD readiness)

This README is now portfolio-grade and recruiter-friendly.

I mean the whole readme file

Got it—you want the complete, polished README file (final version, ready to paste). Here it is:

# Cura Playwright Automation Framework

## 🚀 Overview
This project is a scalable end-to-end automation testing framework built using Playwright and TypeScript. It demonstrates modern automation engineering practices, including clean architecture, maintainability, and test scalability.

---

## 🧱 Key Features
- Page Object Model (POM) design pattern for maintainable test structure  
- Data-driven testing using externalized test data  
- Parameterized test execution for scalable scenario coverage  
- Positive and negative test scenarios for robust validation  
- Reusable test setup using hooks (`beforeEach`)  
- Clean separation of test logic, page actions, and test data  

---

## 🛠 Tech Stack
- Playwright  
- TypeScript  
- Node.js  

---

## 🎯 Test Coverage
- Login functionality (CURA Healthcare demo site)
  - Valid login scenario  
  - Invalid credentials  
  - Empty input validation  

---

▶️ Getting Started

---

Install dependencies

```bash
npm install
Install Playwright browsers
npx playwright install
Run all tests
npx playwright test
Run tests in headed mode (for debugging)
npx playwright test --headed

---

📂 Project Structure
cura-playwright-framework/
│
├── tests/        # Test cases (auth, appointment, smoke)
├── pages/        # Page Object Models
├── fixtures/     # Test data
├── utils/        # Helper functions
├── config/       # Environment/configuration setup
│
├── playwright.config.ts
├── package.json
└── README.md

---

🧠 Framework Design

This framework follows industry-standard automation design principles:

Separation of Concerns
Tests → validation logic
Pages → UI interactions
Fixtures → test data
Scalability
Easily extendable for new modules
Supports multiple datasets and scenarios
Maintainability
Centralized selectors via Page Objects
Reusable setup using hooks

---

📈 Purpose

This project serves as a portfolio demonstration of automation framework design and implementation aligned with real-world SDET practices. It highlights the ability to build scalable, maintainable, and production-ready test automation solutions.

---

👨‍💻 Author

Clifford M. Villanoy

---

📌 Notes
This project is continuously improved as part of an automation mastery journey
Future enhancements include CI/CD integration, test tagging, and reporting improvements