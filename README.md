# Internship Tracker System

## Project Title & Description

**Internship Tracker System** is a web application designed to help manage internships for students. The system allows users to view, add, edit, and delete internship records and student information. It provides a dashboard for tracking internship statuses (Completed, In Progress, Pending), and dynamically handles data with `localStorage`.

This project includes features for managing students, internships, tasks, and an admin dashboard for overall statistics.

## Features Included

- **Dashboard**: Displays total students and a pie chart showing internship statuses (Completed, In Progress, Pending).
- **Students**: View, add, edit, and delete student information, including name, email, and internship status.
- **Internships**: Manage internships by assigning students, updating statuses, and editing details.
- **Tasks**: Track tasks related to internship programs, including task name, status, and due dates.
- **Add/Edit Forms**: Dynamic forms for adding or editing student and internship information with validation.
- **Responsive Layout**: Built with Bootstrap, ensuring mobile-friendly design.
- **LocalStorage**: Stores data persistently in the browser for quick access and manipulation.

## Instructions to Test Login

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Miyul04/internship-tracker.git
   cd internship-tracker
2.** Open the project in a browser**:

-**Navigate to the index.html file in your browser to access the Login page.**
-**The login page doesn't require real credentials but will redirect you to the Dashboard after clicking Login.**

3.**Login**:

-**The username and password fields are static, so entering any value will let you log in successfully.**
-**Once logged in, you'll be redirected to the Dashboard page, where you can manage students, internships, and tasks.**

##**Frameworks/Libraries Used**

-**HTML5**: For the basic structure of the web pages.
-**CSS**: For styling and layout of the web pages.
-**Bootstrap 5**: A CSS framework for building responsive and modern web layouts.
-**Chart.js**: For creating interactive and dynamic charts (used for the internship status pie chart).
-**JavaScript**: Used for dynamic functionality, including the handling of CRUD operations and local storage.
