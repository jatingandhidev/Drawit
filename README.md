# Drawit

## Description

A collaborative, real-time whiteboard. Packed with features such as real-time database, whiteboard from scratch with ability to add shapes like Rectangles and Ellipses, Sticky notes and Pencil drawing. Using the newest technologies such as Next.js. 14, Clerk, Convex and LiveBlocks.

---

## Features

- User authentication and management with Clerk.
- Responsive design with Tailwind CSS.
- Modular, reusable UI components from Radix UI and Shadcn.
- State management using Zustand.
- Modern database interaction with Convex.
- Optimized routing and rendering with Next.js.

---

## Tech Stack

### Frontend

- **React (19.0.0-rc-66855b96-20241106)**
- **Next.js (15.0.3)**
- **Shadcn & Radix UI** for components:
  - Alert Dialog
  - Dialog
  - Dropdown Menu
  - Tooltip

### Styling

- **Tailwind CSS (3.4.1)**
- **Tailwind Merge** for class composition.
- **Tailwind Animate** for animation utilities.

### Backend

- **Convex (1.17.3)** for data handling.

### Authentication

- **Clerk (6.5.2)** for secure user authentication.

### Utilities

- **Date-fns (4.1.0)** for date manipulation.
- **Query-string (9.1.1)** for URL parsing and query string manipulation.
- **Clsx (2.1.1)** for conditional class merging.
- **Class-variance-authority (0.7.1)** for consistent variant handling.
- **Lucide-react (0.462.0)** for icons.

### State Management

- **Zustand (5.0.2)**

---

## Setup and Installation

### Prerequisites

- Node.js (latest stable version recommended)
- npm or yarn package manager

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/jatingandhidev/Drawit.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Create a `.env.local` file in the root directory.
   - Add the necessary keys as required by Clerk and Convex.
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Build for production:
   ```bash
   npm run build
   ```
6. Start the production server:
   ```bash
   npm start
   ```

---

## Usage

- **Development Mode:** Visit `http://localhost:3000` to view the application locally.
- **Authentication:** Uses Clerk's React integration for user login and signup.
- **Dynamic Routing:** Implemented with Next.js for optimized navigation.

---

## Architecture

- **Frontend:** Built using React and Next.js, with component-based design principles.
- **Backend:** Utilizes Convex for seamless data storage and retrieval.
- **Authentication:** Secured with Clerk.

## Screenshots/Demo

_(Include screenshots or a link to a live demo if available)_

---

## Contributing

1. Fork the repository.
2. Create a new branch (`feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add your message here'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

---

# Contact

Email: jatingandhi.dev@gmail.com
GitHub: @jatingandhidev

# References

=> Followed this to setup Convex and Clerk

- https://docs.convex.dev/auth/clerk
