# TODO List for ClintonStack Technologies Updates

## Backend Updates

- [x] Add multer dependency to backend/package.json
- [x] Create backend/uploads folder
- [x] Update backend/server.js: add multer middleware, file upload route for profile photo, PUT endpoint for contact messages (/contact/:id)
- [x] Update backend/database.json: add "profile" object with name, title, photo

## Frontend Updates

- [x] Update frontend/src/components/FounderIntro.js: display uploaded profile photo instead of placeholder, update layout with text and image side by side, add fade-in animation
- [x] Update frontend/src/components/Admin/ManageFounder.js: replace URL input with file upload input, handle multipart form data
- [x] Update frontend/src/components/Admin/AdminDashboard.js: add edit functionality for contact messages with inline forms, PUT requests to update messages
- [x] Update frontend/src/styles.css: add styles for profile photo display (circular border, shadow)

## Followup Steps

- [x] Restart backend server after changes
- [ ] Test file upload functionality
- [ ] Test contact message editing
- [ ] Test frontend display of uploaded photo
- [ ] Verify responsive design
