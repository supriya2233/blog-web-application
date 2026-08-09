# Blog Web Application

A responsive full-stack blog web application allows users to create, view, edit, and delete blog posts. Posts are stored temporarily in memory, so they reset when the server is restarted.

## Overview

This project is a full-stack web application developed to demonstrate the fundamentals of web development using **Node.js, Express.js, and EJS**.
The application provides a clean and responsive blogging interface where users can:
- Create new blog posts
- View all blog posts
- Edit existing posts
- Delete posts
- Add categories to posts
- Format content using paragraphs and section headings
- Switch between light and dark mode
- Use the application across desktop, tablet, and mobile devices

## Application Architecture
The application follows a simple client-server architecture.

                    User
                      |
                      v
              EJS Web Interface
                      |
                      v
               Express.js Server
                      |
        +-------------+-------------+
        |             |             |
        v             v             v
      Create         Read         Update/Delete
        |             |             |
        +-------------+-------------+
                      |
                      v
             In-Memory Post Array

## Installation
Prerequisites:
Make sure the following are installed: Node.js, npm, Git

1. Clone the Repository
git clone https://github.com/supriya2233/blog-web-application.git

3. Navigate to the Project
cd blog-web-application

5. Install Dependencies
npm install
This installs the dependencies listed in package.json.

4. Start the Application
npm start

The application will run at:
http://localhost:3000
Open that address in your browser.

Development Mode: T
Run: npm run dev




