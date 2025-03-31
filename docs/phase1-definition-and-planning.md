# Phase 1 - Definition and Planning

## Project Name: TicketPro

### Purpose:
TicketPro is a ticketing system website where users can browse, search, and purchase tickets for events like concerts, sports, theater, and more. The website will provide a seamless user experience with features like event filtering, ticket purchasing, and user accounts. The goal is to make event discovery and ticket buying easy, fast, and secure for all users.



## 1. User Personas

### User Persona 1: Sarah
- **Age**: 28
- **Occupation**: Graphic Designer
- **Location**: New York, USA
- **Goals**:
  - Easily find and purchase tickets for concerts and events.
  - Stay updated on upcoming events in her area.
- **Pain Points**:
  - Struggles to find affordable tickets.
  - Often misses out on popular events due to slow or confusing ticketing platforms.
- **Behavior**:
  - Prefers mobile-friendly websites.
  - Frequently checks event listings on weekends.
- **Technology Proficiency**: High (comfortable with apps and websites).

### User Persona 2: John
- **Age**: 35
- **Occupation**: Software Engineer
- **Location**: San Francisco, USA
- **Goals**:
  - Buy tickets for sports events and manage them in one place.
  - Compare prices and seating options easily.
- **Pain Points**:
  - Finds it difficult to compare prices across different platforms.
  - Often encounters hidden fees during checkout.
- **Behavior**:
  - Prefers desktop websites for detailed comparisons.
  - Buys tickets in bulk for friends and family.
- **Technology Proficiency**: Very high (tech-savvy).

### User Persona 3: Emily
- **Age**: 22
- **Occupation**: College Student
- **Location**: London, UK
- **Goals**:
  - Find cheap tickets for local events and concerts.
  - Get student discounts on event tickets.
- **Pain Points**:
  - Limited budget for entertainment.
  - Confused by hidden fees on ticketing platforms.
- **Behavior**:
  - Uses mobile apps for last-minute ticket purchases.
  - Relies on social media for event recommendations.
- **Technology Proficiency**: Medium (comfortable with apps but prefers simplicity).

### User Persona 4: Michael
- **Age**: 45
- **Occupation**: Business Owner
- **Location**: Berlin, Germany
- **Goals**:
  - Purchase bulk tickets for corporate events and client entertainment.
  - Streamline the invoicing process for ticket purchases.
- **Pain Points**:
  - Needs a simple process for bulk purchases.
  - Struggles with platforms that don’t support corporate invoicing.
- **Behavior**:
  - Prefers desktop websites for bulk transactions.
  - Plans events months in advance.
- **Technology Proficiency**: Medium (prefers straightforward interfaces).

### User Persona 5: Lisa
- **Age**: 30
- **Occupation**: Event Planner
- **Location**: Paris, France
- **Goals**:
  - Discover unique events and manage ticket purchases for clients.
  - Access detailed event information (e.g., seating charts, venue policies).
- **Pain Points**:
  - Spends too much time searching for events across multiple platforms.
  - Needs a centralized platform for managing client tickets.
- **Behavior**:
  - Uses both mobile and desktop platforms.
  - Frequently contacts event organizers for group bookings.
- **Technology Proficiency**: High (comfortable with advanced features).



## 2. Use Cases and User Flows

### Use Case 1: User Searches for an Event
**Description**: A user searches for a specific event using the search bar.  
**Preconditions**: The user is on the homepage.  
**Steps**:
1. The user types the event name (e.g., "Taylor Swift Concert") in the search bar.
2. The system displays a list of relevant events.
3. The user clicks on the desired event to view details (e.g., date, time, location, ticket prices).
**Postconditions**: The user is redirected to the event details page.

### Use Case 2: User Purchases a Ticket
**Description**: A user purchases a ticket for an event.  
**Preconditions**: The user is on the event details page.  
**Steps**:
1. The user selects the ticket type (e.g., standard or VIP).
2. The user enters the number of tickets required.
3. The user clicks "Proceed to Checkout."
4. The user enters payment details (e.g., card number, expiry date, CVV).
5. The user confirms the purchase.
6. The system sends a confirmation email with the ticket details.
**Postconditions**: The user receives a confirmation email and the ticket is added to their account.

### Use Case 3: User Filters Events by Category
**Description**: A user filters events by category (e.g., concerts, sports, theater).  
**Preconditions**: The user is on the homepage or event list page.  
**Steps**:
1. The user clicks on a category (e.g., "Concerts").
2. The system displays a list of events in that category.
3. The user selects an event to view details.
**Postconditions**: The user is redirected to the event details page.

### Use Case 4: User Creates an Account
**Description**: A new user creates an account to save their preferences and purchase history.  
**Preconditions**: The user is on the homepage.  
**Steps**:
1. The user clicks "Sign Up."
2. The user enters their details (e.g., name, email, password).
3. The user confirms their email address via a verification link.
4. The system creates the account and logs the user in.
**Postconditions**: The user can log in and access their account.

### Use Case 5: User Contacts Support
**Actor**: User  
**Description**: A user contacts customer support for assistance.  
**Preconditions**: The user is on the website.  
**Steps**:
1. The user clicks "Help" or "Contact Support."
2. The user fills out a support form with their query.
3. The system sends the query to the support team and provides a reference number.
4. The user receives a response via email or chat.
**Postconditions**: The user’s query is resolved, and they receive confirmation.


## 3. UI Prototypes

### Screen 1: Homepage
- **Header**:
  - Logo: "TicketPro" with a link to the homepage.
  - Navigation Menu: Links to "Events," "Venues," "Gift Cards," and "Help."
  - Search Bar: Allows users to search for events, artists, or venues.
- **Hero Section**:
  - Featured Event: Large banner showcasing a popular event (e.g., Taylor Swift Concert).
  - Call-to-Action Button: "View Details" redirects to the event details page.
- **Trending Events**:
  - List of events with images, titles, dates, and prices.
  - Each event card links to its respective event details page.

### Screen 2: Event Details Page
- **Event Information**:
  - Title: Name of the event (e.g., "NBA: Lakers vs Warriors").
  - Date and Time: Displayed prominently.
  - Location: Venue name and address.
- **Ticket Options**:
  - Standard Ticket: General admission, standing.
  - VIP Ticket: Premium seating, meet & greet.
  - Prices displayed for each option.
- **Call-to-Action Button**: "Buy Tickets" redirects to the checkout page.

### Screen 3: Checkout Page
- **User Details**:
  - Form fields for name, email, and phone number.
- **Payment Details**:
  - Card number, expiry date, and CVV.
- **Order Summary**:
  - Displays the selected tickets, quantities, and total price.
- **Call-to-Action Button**: "Confirm Purchase" completes the transaction.

**Link to Figma Design**: https://www.figma.com/design/DRHUi1WEkJzFu5ewsAvdNC/Untitled?node-id=0-1&p=f&t=YkiPBUqI8KdMOqqV-0




## 4. Information Architecture and Technical Design

### Sitemap


### System Architecture
- **Frontend**:
  - Built with **HTML**, **CSS**, and **JavaScript**.
  - Styled using **Tailwind CSS** for responsive design.
  - Interactive features (e.g., search, filtering) implemented with JavaScript.
- **Backend** (Optional for Phase 1):
  - Built with **Node.js** and **Express.js**.
  - Handles user authentication, ticket purchases, and order management.
- **Database**:
  - Uses **PostgreSQL** to store event data, user accounts, and order history.
- **APIs**:
  - Integrates with payment gateways (e.g., Stripe) for secure transactions.
  - Fetches event data from external APIs (e.g., Ticketmaster).

### Technologies
- **Frontend**: HTML, CSS, JavaScript, Tailwind CSS
- **Backend**: Node.js, Express.js (optional for Phase 1)
- **Database**: PostgreSQL
- **APIs**: Payment gateway integration, event data APIs




## 5. Project Management and User Testing

### Timeline
- **Week 1**: Define user personas and use cases.
  - Tasks: Research target audience, write user personas, define use cases.
- **Week 2**: Create UI prototypes and plan information architecture.
  - Tasks: Design homepage, event details, and checkout pages; create sitemap.
- **Week 3**: Build the homepage and event list.
  - Tasks: Implement HTML/CSS for homepage, add event filtering functionality.
- **Week 4**: Build the event details and checkout pages.
  - Tasks: Implement event details page, create checkout form, integrate payment gateway.

### User Testing
- **Participants**: 3-5 friends or colleagues.
- **Testing Methodology**:
  1. **Task-Based Testing**:
     - Ask participants to complete specific tasks (e.g., search for an event, purchase a ticket).
  2. **Usability Testing**:
     - Observe how participants navigate the website and identify pain points.
  3. **Feedback Collection**:
     - Use surveys or interviews to gather feedback on design and functionality.
- **Improvements**:
  - Use feedback to refine the UI, fix bugs, and improve user experience.

