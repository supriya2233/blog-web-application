# Blog Web Application

A responsive full-stack blog application built with **Node.js**, **Express.js**, and **EJS**. Posts are stored in-memory and pre-populated with sample articles.

---

## Features

- **Full CRUD**: Create, read, edit, and delete blog posts.
- **Search, Filter & Sort**: Keyword search, category filtering, and sorting (Newest, Oldest, A–Z, Z–A).
- **Pagination**: Paginated article listings (4 per page) with page navigation.
- **Article Detail View**: Dedicated reading page with word count, reading time, and one-click share/copy link.
- **Theme Switcher**: Dark and light mode toggle with preferences saved in `localStorage`.
- **User Feedback**: Form validation error alerts and auto-dismissing flash toast notifications.
- **Content Formatting**: Automatic structuring for paragraphs and section headings (using `## `).
- **Responsive Design**: Optimized for mobile, tablet, and desktop viewports, plus custom 404 page support.

---

## Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.11+ recommended)
- Git & npm

### Installation & Running

1. **Clone the repository:**
   ```bash
   git clone https://github.com/supriya2233/blog-web-application.git
   cd blog-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the server:**
   - **Standard start:**
     ```bash
     npm start
     ```
   - **Development mode (auto-reload on save):**
     ```bash
     npm run dev
     ```

4. Open **http://localhost:3000** in your browser.

---

## Project Structure

```text
blog-app/
├── public/          # Static assets (CSS stylesheets & theme toggle script)
├── views/           # EJS templates (index, post, new, edit, 404)
├── app.js           # Express server, routes, and in-memory post data
└── package.json     # Project dependencies and scripts
```

---

## Writing Articles

When entering content in the post body:
- **Paragraphs**: Separate paragraphs with a blank line.
- **Headings**: Prefix a line with `## ` to create a section heading (e.g., `## Introduction`).
