# busy-cards



## Overview

Busy-Cards is a full-stack web application designed to connect users with trusted, government-verified service providers. The platform focuses on visually appealing and essential services for individuals moving into a new city or home. Users can explore, save, review, and share service providers via digital business cards, making it easier to find reliable professionals for home-related needs and save appealing businesses to a user wallet.



### Problem Space

Relocating to a new city or home often involves searching for trusted service providers for essential tasks like painting, gardening, and repairs. This process can be time-consuming and unreliable, with limited information on quality or verification. Busy-Cards addresses these pain points by offering a centralized platform with government-verified businesses, user reviews, and ratings, ensuring reliability and transparency.


### User Profile

Primary Users: Individuals and families relocating to new homes or cities in Canada, seeking trusted service providers.

Secondary Users: Service providers who want to showcase their work and attract new clients.

Considerations: The platform prioritizes user trust and ease of use with visually appealing galleries, verified badges, and a user-friendly interface.

### Features

1. Home Page: 
    Overview of the platform and navigation to service categories via a dropdown menu.

2. Service Categories:

    Painting

    Gardening and Landscaping

    Home Renovation and Repairs

    Cleaning Services

    Moving and Delivery Services

3. Digital Business Cards:

    Essential details: Business name, contact info, verification status, and ratings.

    Share button for email and social media sharing.

    Save to user wallet for quick access.

4. Details Page:

    Enlarged business card with additional details.

    User reviews and a form to add new reviews.

    Rating system for businesses.

    Image gallery showcasing the business's work.

5. User Interaction:

    Ability to save cards to a user wallet, rate businesses, leave reviews, and share service information.
## Implementation

### Tech Stack

Frontend: React.js

Backend: Node.js with Express

Database: MySQL with Knex.js for query building


Other Tools:

Axios for HTTP requests

Cloudinary for image storage and optimization or Database BLOB Storage to save images as binary large objects (BLOB) in MySQL database


### APIs

Email/Sharing API: For sharing business details.

Cloudinary API: For managing and serving image assets.


### Sitemap

Home Page: Introduction and dropdown menu for navigating service categories.

Category Page: Lists businesses in a selected category as digital business cards.

Details Page: Provides detailed business information, reviews, and a gallery.

User Wallet Page: Displays saved business cards for easy access.


### Mockups

Provide visuals of your app's screens. You can use pictures of hand-drawn sketches, or wireframing tools like Figma.

### Data

Business Categories:

    Name, description, and representative image.

Businesses:

    Name, contact info, verification status, ratings, reviews, and gallery images.

Reviews:

    User ID, rating, review text, and timestamp.

User Wallet:

    User ID and saved business card references.

### Endpoints

GET /categories: Retrieve a list of service categories.

GET /categories/****:id: Retrieve businesses in a specific category.

GET /business/****:id: Retrieve detailed information for a business.

POST /business/:id/review: Add a review for a business.

POST /wallet: Add a business card to a user’s wallet.

GET /wallet: Retrieve saved business cards for a user.


## Roadmap

Week 1: Backend & Frontend Setup
    Goal: Set up the backend, database, and basic frontend structure.
    
    Day 1-2: Database & Backend Setup   
    Tasks:
    1. Design the MySQL schema for service categories, businesses reviews, and user wallets.
    2. Implement API endpoints to retrieve categories (GET /categories) and businesses by categor (GET /categories/:id).
    3. Test the backend with mock data using Postman.

    Day 3-4: Backend Logic & Reviews/Wallet Features
    Tasks:
    1. Implement POST endpoints for reviews (POST /business/:id/review) and saving businesses to the wallet (POST /wallet).
    2. Ensure proper database integration using Knex.js.
    3. Test API functionality.

    Day 5-6: React Setup & Basic UI
    Tasks:
    1. Set up React.js with React Router for navigation.
    2. Create the homepage layout, including the service categories dropdown.
    3. Start styling with Tailwind CSS.
    4. Fetch categories and businesses data from the backend.

    Day 7: Test Backend & Frontend Integration
    Tasks:
    1. Test the integration between frontend and backend.
    2. Ensure category pages load correctly with business data.

Week 2: Feature Development & Finalization
    Goal: Add user interaction, polish the UI, and prepare the project for submission.

    Day 1-2: Business Details Page & User Reviews
    Tasks:
    1. Develop the business details page, displaying business info, gallery, ratings, and reviews.
    2. Implement functionality for users to submit reviews and rate businesses.

    Day 3: Wallet & Sharing Functionality
    Tasks:
    1. Implement the wallet feature where users can save business cards.
    2. Add the social sharing feature (via email or social media).

    Day 4-5: Performance Testing & Bug Fixing
    Tasks:
    1. Test for bugs or performance issues (e.g., slow loading times, broken features).
    2. Optimize API responses, queries, and frontend performance.

    Day 6: UI Polish & Final Testing
    Tasks:
    1. Finalize the UI, ensuring it is visually appealing and fully responsive.
    2. Test all features: business details, reviews, ratings, wallet, and sharing.

    Day 7: Project Documentation & Submission Prep
    Tasks:
    1. Write up the project documentation (API docs, setup instructions).
    2. Prepare a demo or presentation if required.
    3. Final review of code for clarity and completeness.

---

## Future Implementations
1. Images in business details page 
    Adding gallery images to the business details page.

2. User Authentication
    Feature: Implement a user login/signup system using JWT or OAuth.
    Why?: Allow users to create accounts, log in, and save their business cards across devices.

3. Business Profile Management
    Feature: Enable service providers to claim and manage their business profiles (e.g., update contact info, add services).

4. Business advertisment
    Feature: Enable users interested in making special adverts for their business have an advertisment section in the home page for added visibility.

5. Basic Search Functionality
    Feature: Implement a basic search feature that allows users to search for businesses by name, category, or service type.
    Why?: Helps users find businesses more quickly without navigating through categories.

6. Service Availability (Future Booking)
    Feature: Add a system for businesses to specify available slots or service hours.
    Why?: Makes it easier for users to know when a business is available to take on new projects.

7. User Feedback (Rating System Expansion)
    Feature: Expand the rating system to include different types of ratings (e.g., quality of service, reliability, punctuality).
    Why?: Provides more detailed feedback for users and businesses.

8. Admin Dashboard for Content Management
    Feature: Build a simple admin dashboard for platform admins to manage user-submitted businesses and reviews.
    Why?: Gives admins control over the platform's content, ensuring everything meets the standards.


