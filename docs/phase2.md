# Project Phase 2 – Basic Structure and Main Functionalities

---

## 1. Environment

- *Frontend*: Developed locally, hosted via Live Server during testing.
- *Backend*: Node.js + Express, running locally at http://localhost:5000.
- *Database: PostgreSQL hosted on **Supabase*.
- *Deployment*: Local for now; cloud deployment planned for Phase 3.
- *Version Control*: All code managed with Git.

---

## 2. Backend

- Built with *Node.js* and *Express.js*.
- API Endpoints:
  - GET /api/events – Returns all available events.
  - GET /api/events/:id – Returns event by ID.
  - POST /api/book – Receives and stores booking data in the database.
- Modular structure using routes/, controllers/, and db.js.

---

## 3. Frontend

- Built with *HTML, **JavaScript, and **Tailwind CSS*.
- Pages implemented:
  - index.html: Displays event list dynamically from backend.
  - details.html: Fetches event by ID and shows detailed info.
  - checkout.html: Displays event info and sends booking to backend.
- JavaScript files used to handle:
  - API calls using fetch
  - Dynamic DOM manipulation
  - Form submission

---

## 4. Database

- *PostgreSQL* via *Supabase*.
- Table: bookings
  - Fields: id, event_id, user_name, email, quantity, payment_method, created_at.
- Data is inserted through the /api/book endpoint.
- Database URL stored securely using .env.

---

## 5. Basic Structure and Architecture

- Clear folder structure separating frontend and backend.
- Modular backend using MVC pattern:
  - routes/, controllers/, db.js, server.js.
- Frontend organized into HTML views and connected via query parameters and fetch requests.
- Logical flow between frontend pages and backend endpoints.

---

## 6. Functionalities

- ✅ View list of events (fetched from backend).
- ✅ View individual event details (details.html).
- ✅ Submit a booking for an event (checkout.html).
- ✅ Store bookings in database with user info.
- ✅ Responsive UI for all screens.

---

## 7. Code Quality and Documentation

- JavaScript split into manageable functions.
- Backend routes and controllers separated for maintainability.
- Environment variables managed via .env.
- Consistent naming conventions and formatting.
- logbook.md maintained with time tracking.
- README.md explains project setup and structure.

---

## 8. Testing and Error Handling

- Basic client-side validation on the checkout form.
- Backend includes:
  - Missing field checks in POST /api/book.
  - Error handling for database operations.
  - Console logs for tracking server actions.
- Frontend fetch calls include .catch() error logging.

---

## 9. User Interface and Interaction

- Styled with *Tailwind CSS* for a modern, responsive layout.
- Event cards, buttons, and forms are interactive and accessible.
- Clear navigation between homepage → details → checkout.
- Real-time updates to DOM with JavaScript (e.g., loading data).
- Alerts for booking confirmation and form validation.

---