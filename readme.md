# 💰 Personal Finance Tracker

A simple, modern, and responsive **Personal Finance Tracker** built with **HTML, CSS, and JavaScript**.

The application helps users track their income and expenses, understand where their money goes, and monitor their remaining balance through a clean and interactive dashboard.

> 🎓 Graduation Project — HTML / CSS / JavaScript Training

---

## 📌 Project Idea

**Personal Finance Tracker** is a frontend web application designed to help users manage their personal finances.

Users can:

* Add their monthly income.
* Record their daily expenses.
* Categorize expenses.
* Track their total spending.
* See their remaining balance.
* Filter transactions.
* Visualize their spending using charts.
* Save their data locally in the browser.

### Example

If the user has:

```text
Monthly Income: 10,000 EGP

Expenses:
Food          → 500 EGP
Transportation → 300 EGP
Entertainment  → 200 EGP
```

The dashboard automatically calculates:

```text
Total Income:     10,000 EGP
Total Expenses:    1,000 EGP
Remaining Balance: 9,000 EGP
```

---

# ✨ Features

## 📊 Dashboard

The main dashboard provides a quick overview of the user's financial situation.

It displays:

* Total Income
* Total Expenses
* Remaining Balance
* Number of Transactions

---

## 💵 Income Management

Users can add and manage their income.

Each income record can contain:

* Amount
* Source
* Date
* Optional description

---

## 💸 Expense Management

Users can add their expenses with:

* Expense name
* Amount
* Category
* Date
* Optional description

Example categories:

* 🍔 Food
* 🚗 Transportation
* 🎮 Entertainment
* 🛍️ Shopping
* 🏠 Housing
* 💡 Bills
* 📚 Education
* 💊 Health
* 📦 Other

---

## 📈 Financial Statistics

The application automatically calculates:

* Total income
* Total expenses
* Current balance
* Spending by category
* Number of transactions

All calculations are handled dynamically using JavaScript.

---

## 📊 Interactive Charts

The project uses **Chart.js** to visualize financial data.

Planned charts include:

### Expense Distribution

A chart showing how expenses are distributed between categories.

Example:

```text
Food            35%
Transportation  20%
Shopping        15%
Bills           20%
Other           10%
```

### Income vs Expenses

A visual comparison between the user's total income and total expenses.

---

## 🔎 Transaction Filtering

Users can filter their transactions by:

* Income / Expense
* Category
* Date
* Search keyword

This makes it easier to find specific transactions.

---

## 🌙 Dark Mode

The application includes a **Dark / Light Mode**.

The selected theme can be saved using `localStorage`, so the user's preference remains after refreshing the page.

---

## 💾 Local Storage

Since this project is frontend-only, user data will be stored using the browser's:

```javascript
localStorage
```

This allows the application to remember:

* Transactions
* Income
* Expenses
* Theme preference
* Other user settings

No backend or database is required.

---

# 🛠️ Technologies

The project will be built using the following technologies:

### HTML5

Used to create the structure of the application.

Main concepts:

* Semantic HTML
* Forms
* Inputs
* Tables
* Buttons
* Navigation
* Cards

---

### CSS3

Used to create the visual design and responsive layout.

Main concepts:

* Flexbox
* CSS Grid
* Responsive Design
* CSS Variables
* Transitions
* Animations
* Dark Mode
* Media Queries

---

### JavaScript

JavaScript will handle the application's logic and interactivity.

Main concepts:

* Variables
* Functions
* Arrays
* Objects
* Array Methods
* DOM Manipulation
* Events
* Form Validation
* Local Storage
* Date Handling
* Dynamic Rendering

---

### Chart.js

Used to create interactive financial charts.

Charts will be generated dynamically based on the user's transactions.

---

# 🏗️ Project Structure

```text
personal-finance-tracker/
│
├── index.html
│
├── css/
│   ├── style.css
│   ├── responsive.css
│   └── variables.css
│
├── js/
│   ├── app.js
│   ├── transactions.js
│   ├── dashboard.js
│   ├── charts.js
│   └── storage.js
│
├── assets/
│   ├── images/
│   └── icons/
│
└── README.md
```

The structure may change during development depending on the final implementation.

---

# 🎨 UI Design

The application will follow a modern dashboard-style design.

### Main Layout

```text
┌───────────────────────────────────────────────┐
│              Personal Finance                │
│                                               │
│  💰 Income     💸 Expenses    💵 Balance     │
│  10,000 EGP    1,000 EGP      9,000 EGP     │
│                                               │
├───────────────────────────────────────────────┤
│                                               │
│       Expense Distribution                    │
│              📊                               │
│                                               │
├───────────────────────────────────────────────┤
│                                               │
│ Recent Transactions                           │
│                                               │
│ Food              -500 EGP                    │
│ Transportation    -300 EGP                    │
│ Salary           +10,000 EGP                  │
│                                               │
└───────────────────────────────────────────────┘
```

The interface will be:

* Clean
* Modern
* Responsive
* Easy to use
* Mobile-friendly

---

# 🧠 Application Logic

The application will store transactions as JavaScript objects.

Example:

```javascript
{
    id: 1,
    type: "expense",
    title: "Food",
    amount: 500,
    category: "Food",
    date: "2026-09-12"
}
```

An income transaction could look like:

```javascript
{
    id: 2,
    type: "income",
    title: "Salary",
    amount: 10000,
    category: "Salary",
    date: "2026-09-01"
}
```

JavaScript will use these objects to calculate the dashboard statistics.

---

# 🧮 Balance Calculation

The remaining balance will be calculated using:

```text
Balance = Total Income - Total Expenses
```

For example:

```text
Income   = 10,000 EGP
Expenses =  1,000 EGP

Balance  =  9,000 EGP
```

The dashboard will update automatically whenever a transaction is added or removed.

---

# 🔄 User Flow

```text
User Opens Website
        ↓
Dashboard
        ↓
Add Income / Expense
        ↓
Validate Input
        ↓
Save Transaction
        ↓
Update Local Storage
        ↓
Recalculate Statistics
        ↓
Update Dashboard
        ↓
Update Charts
```

---

# 🔐 Data & Privacy

This project does **not** require an account or backend server.

All financial data is stored locally in the user's browser using `localStorage`.

Therefore:

* No account is required.
* No server is required.
* No financial data is sent to an external server.

> This project is an educational frontend application and should not be used as a secure financial record system for sensitive real-world financial data.

---

# 📱 Responsive Design

The application will support:

* 💻 Desktop
* 💻 Laptop
* 📱 Mobile
* 📟 Tablet

The layout will automatically adapt to different screen sizes using CSS media queries.

---

# 🚀 Future Improvements

The current version will focus on HTML, CSS, and JavaScript.

Possible future improvements include:

* User authentication
* Backend API
* Database integration
* Cloud synchronization
* Multiple currencies
* Monthly financial reports
* Export transactions to CSV
* Budget limits
* Spending alerts
* Recurring transactions
* Advanced analytics
* User accounts
* Financial goals

These features are **not required for the current version**.

---

# 🎯 Project Goals

The main goals of this project are to demonstrate practical knowledge of:

* HTML5
* CSS3
* Responsive Web Design
* JavaScript
* DOM Manipulation
* Events
* Forms
* Validation
* Arrays & Objects
* Local Storage
* Data Processing
* Chart.js
* UI/UX fundamentals

The project is intentionally designed to be **simple enough to build with frontend fundamentals while still looking and behaving like a real-world application**.

---

# 📚 Learning Outcomes

By completing this project, the developer should gain practical experience with:

### Frontend Development

Building a complete responsive web interface from scratch.

### JavaScript

Using JavaScript to create dynamic and interactive features.

### DOM Manipulation

Creating, updating, and removing UI elements dynamically.

### Data Management

Storing and managing application data using arrays, objects, and `localStorage`.

### Data Visualization

Representing financial data through interactive charts.

### Responsive Design

Creating an interface that works across desktop and mobile devices.

### Project Organization

Structuring a frontend project into reusable and maintainable files.

---

# 🚀 Getting Started

## 1. Clone the repository

```bash
git clone <repository-url>
```

## 2. Open the project

```bash
cd personal-finance-tracker
```

## 3. Run the project

Since this is a frontend-only application, it can be opened directly in a browser.

For a better development experience, use **VS Code Live Server** or any local development server.

---

# 📝 Project Status

```text
🚧 In Development
```

### Current Phase

* [x] Project idea
* [x] Requirements
* [x] Technology selection
* [ ] UI Design
* [ ] HTML Structure
* [ ] CSS Styling
* [ ] JavaScript Logic
* [ ] Local Storage
* [ ] Charts
* [ ] Filtering
* [ ] Dark Mode
* [ ] Responsive Design
* [ ] Testing
* [ ] Final Presentation

---

# 👨‍💻 Educational Project

This project was created as a graduation project for an **HTML, CSS & JavaScript training program**.

The main purpose is to apply frontend development concepts in a practical project and build a complete interactive web application from scratch.
