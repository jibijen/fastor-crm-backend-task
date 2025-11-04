# Fastor CRM - Node.js Backend Assignment

This is the complete backend REST API for the Fastor CRM assignment, built as part of the Node.js Developer selection process.

The API is built with **Node.js**, **Express**, **MongoDB** (with Mongoose), and uses **JWT** for authentication, fulfilling all technical requirements.

## ✅ Features & Acceptance Criteria

This API successfully implements all required business logic:

* **Employee Authentication**: Secure API for employee registration and login.
* **Public Enquiry Form**: A public-facing API to submit new client enquiries without authentication.
* **Fetch Unclaimed Leads**: An authenticated endpoint for employees to see all "public" enquiries that have not been claimed.
* **Claim Leads**: An authenticated endpoint for an employee to claim a public lead, making it private.
* **Fetch Claimed Leads**: An authenticated endpoint for an employee to see only the leads they have personally claimed.

## 🚀 How to Run Locally

### 1. Prerequisites

* [Node.js](https://nodejs.org/) installed
* [MongoDB](https://www.mongodb.com/try/download/community) (or a MongoDB Atlas account)

### 2. Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/jibijen/fastor-crm-backend-task.git](https://github.com/jibijen/fastor-crm-backend-task.git)
    cd fastor-crm-backend-task
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    * Rename the `.env.example` file to `.env`.
    * Open the new `.env` file and fill in your values:

    ```.env
    MONGO_URI=your_mongodb_connection_string_here
    JWT_SECRET=a_very_strong_and_secret_key
    ```

### 3. Start the Server

```bash
node server.js
