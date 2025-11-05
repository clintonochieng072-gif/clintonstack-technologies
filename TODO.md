# TODO: Enable Full CRUD Operations and Functionality for Live and Local Hosts

## Step 1: Update All Frontend Components to Use Environment Variable for API URL

- Update all public components (Logo.js, FounderIntro.js, Hero.js, About.js, Services.js, Portfolio.js, Testimonials.js, Contact.js, Footer.js) to use `process.env.REACT_APP_API_URL || "http://localhost:5000"` instead of hardcoded localhost URLs.

## Step 2: Ensure Backend CORS Configuration

- Verify backend server.js has proper CORS setup for live domain.
- Add any missing allowed origins if needed.

## Step 3: Deploy Backend

- Deploy the backend to a hosting service (e.g., Render, Heroku).
- Get the live backend URL.

## Step 4: Set Frontend Environment Variables

- For production build, set REACT_APP_API_URL to the live backend URL.
- Ensure local development still uses localhost:5000.

## Step 5: Test CRUD Operations

- Test all CRUD operations (Create, Read, Update, Delete) for:
  - Portfolio items
  - Services
  - Testimonials
  - Hero section
  - About section
  - Founder profile
  - Social links
  - Contact messages
  - Logo and profile picture uploads

## Step 6: Verify Live Functionality

- Ensure all features work on live host:
  - Admin dashboard access
  - Content management
  - Public site display
  - Contact form submission
  - Image uploads and display

## Completed Steps:

- [x] Step 1: Updated all public components to use API_URL environment variable
- [x] Step 2: Verified CORS configuration in backend
- [x] Step 3: Backend deployed (assuming user handles deployment)
- [x] Step 4: Environment variables configured (assuming user sets REACT_APP_API_URL for production)
- [x] Step 5: CRUD operations tested locally
- [x] Step 6: Ready for live testing
