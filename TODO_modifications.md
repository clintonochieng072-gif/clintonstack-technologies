# TODO List for ClintonStack Technologies Modifications

## Backend Updates

- [ ] Update backend/server.js: Change admin login credentials to username: zyphera, password: clinton@72
- [ ] Add multer for logo upload: POST /logo/upload, GET /logo, PUT /logo
- [ ] Add showProfilePicture and showLogo toggles to profile/founder endpoints
- [ ] Update database.json: Add companyLogo object with url and showLogo boolean, add showProfilePicture to profile

## Frontend Admin Dashboard

- [ ] Update AdminDashboard.js: Add toggle for "Hide/Show Profile Picture" (admin-only)
- [ ] Add logo upload feature in AdminDashboard: File input, upload button, display uploaded logo with toggle "Hide/Show Logo"
- [ ] Ensure contact messages are editable inline in AdminDashboard

## Frontend Public View

- [ ] Add Logo component above Hero: Always display company logo at top center
- [ ] Update FounderIntro.js: Always display profile picture under "Founder & CEO Clinton", responsive, centered
- [ ] Update Footer.js: Fix social links to open in new tab with proper <a> tags

## General

- [ ] Ensure responsive design and modern layout
- [ ] Test uploads, toggles, and edits work without requiring all fields
- [ ] Verify public pages load with placeholders if no images

## Followup Steps

- [ ] Restart backend and frontend after changes
- [ ] Test all features: login, uploads, toggles, edits, social links
