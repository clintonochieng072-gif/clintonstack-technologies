# TODO List for Partial Updates on Admin Page

## Backend Updates

- [x] Update PUT /portfolio/:id to merge only provided fields
- [x] Update PUT /services/:id to merge only provided fields
- [x] Update PUT /testimonials/:id to merge only provided fields
- [x] Update PUT /hero to merge only provided fields
- [x] Update PUT /about to merge only provided fields

## Frontend Updates

- [x] Update ManagePortfolio.js to send only filled fields
- [x] Update ManageServices.js to send only filled fields
- [x] Update ManageTestimonials.js to send only filled fields
- [x] Update ManageHero.js to send only filled fields
- [x] Update ManageAbout.js to send only filled fields
- [x] Add success messages showing which fields were updated

## Testing

- [x] Test partial updates for all forms (portfolio, services, testimonials, hero, about)
- [x] Verify changes reflect on frontend immediately (API responses confirmed)
- [x] Test authentication (JWT login, unauthorized access blocked)
- [x] Test error handling (invalid credentials, non-existent items)
- [x] Test contact form submission
- [x] Test contact messages retrieval
- [x] Test edge cases (empty updates, empty strings)
- [x] Ensure JWT auth still works
