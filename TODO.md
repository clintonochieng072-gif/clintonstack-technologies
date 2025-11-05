# TODO List for Public View Modifications

## 1. Remove Large Logo Section from Public View

- [x] Remove `<Logo />` component from `PublicView.js` since small logo icon is in navbar header.

## 2. Modify FounderIntro Section

- [x] Update `FounderIntro.js` to display small profile picture (w-20 h-20) on the right side.
- [x] Make profile picture visibility conditional based on `profile.showProfilePicture`.
- [x] Strip "Updated " prefix from founder name display.

## 3. Add Profile Picture Upload to Admin Settings

- [x] Update `Settings.js` to include profile picture upload input and display current profile picture.
- [x] Ensure `handleProfileUpload` is passed from `AdminDashboard.js` to `Settings.js`.

## 4. Remove "Updated" Prefixes from Public View Displays

- [x] Update `Hero.js` to strip "Updated " from heading display.
- [x] Update `About.js` to strip "Updated " from title display.
- [x] Update `FounderIntro.js` to strip "Updated " from name display.

## 5. Testing

- [ ] Test the changes in the frontend to ensure small icons, conditional visibility, and no "Updated" prefixes.
- [ ] Verify profile picture upload works in admin settings.
