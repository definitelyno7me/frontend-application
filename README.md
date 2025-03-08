## Installation

1. Clone the repository:

```bash
git clone https://github.com/definitelyno7me/frontend-application.git
cd frontend-application
```

2. Install dependencies:

```bash
yarn install
```

## Running Locally

1.  Start the development server:

```bash
yarn dev
```

This will start the application at[http://localhost:3000](http://localhost:3000)

2. Access the Public Lead Submission Form:
   The public lead form can be accessed on the homepage at [http://localhost:3000](http://localhost:3000)

## Design Overview

Frontend Technology Stack

- Next.js: For the frontend framework, including server-side rendering (SSR) and routing.
- React Hook Form: Used for handling form validation and submission.
- Yup: Schema-based validation for the form fields.
- Tailwind CSS: For utility-first styling and responsive design.

### Authentication

A mock authentication system is used to protect the internal lead management UI. It allows only authenticated users to access the /admin page.

File Structure

- src/app: Contains the main application components, including the lead form and lead management UI.
- src/app/api: Contains API routes for managing leads.
- src/components: Common components used across the app, such as the lead form.
- public/assets: Static assets, including images/icons used in the form.

## Design Overview

To view the internal lead management interface, navigate to the /admin route:

- Admin Interface URL: [http://localhost:3000/admin](http://localhost:3000/admin)

This page is secured with a mock authentication system. Only authenticated users can access it.

- Login: Currently, a mock login system is implemented with NextAuth.js.
- Lead Management: The interface allows internal users to view submitted leads, and the status of each lead can be changed manually (e.g., from PENDING to REACHED_OUT).
