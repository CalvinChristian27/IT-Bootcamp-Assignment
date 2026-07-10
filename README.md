# Campus Club Documentation
## Overview
Campus Club is a web application that helps students discover, learn about, and join student clubs on campus. The application provides information about various student organizations and upcoming events. The application was built using React, React Router, Vite, and Tailwind CSS.

## Features
- Home page with introduction and featured clubs
- Club listing page with sorting functionality
- Grid and List view toggle
- Detailed club information page
- Join Club functionality with localStorage persistence
- About page with project information
- Custom 404 Not Found page
- Responsive design for mobile, tablet, and desktop devices

## Installation
Due to errors and repeated attempts when using GitHub Pages for the first time, the site is unusable, and the interface can only be viewed via a local installation.
1. Clone the repository <br>
`git clone https://github.com/CalvinChristian27/IT-Bootcamp-Assignment.git`
2. Navigate to the project folder <br>
`cd IT-Bootcamp-Assignment`
3. Install dependencies <br>
`npm install`
4. Start the development server <br>
`npm run dev`

## Project Structure
```text
src/
├── assets/
│   └── images/
│       ├── clubs-header/
│       ├── clubs-hero/
│       ├── about-hero.webp
│       └── hero-section.webp
│
├── components/
│   ├── ClubCard.jsx
│   ├── Navbar.jsx
│   ├── SortDropdown.jsx
│   └── ViewToggle.jsx
│
├── css/
│   └── index.css
│
├── data/
│   └── club.jsx
│
├── pages/
│   ├── About.jsx
│   ├── ClubDetail.jsx
│   ├── Clubs.jsx
│   ├── Home.jsx
│   └── NotFound.jsx
│
├── App.jsx
└── main.jsx
```

# Initial State
When users first open the application, they are directed to the Home Page.
## Home Page
Route:
/
### Features
- Welcome message
- Introduction to the application
- Featured club cards
- Explore Clubs Button
### Screenshot
<img width="1918" height="1078" alt="image" src="https://github.com/user-attachments/assets/2e7a81de-9a0b-46d2-a7ab-613e59162f54" />

## Club Page
Route:
/clubs
### Features
- Display all available student clubs
- Club cards with images and descriptions
- Sorting functionality
- View toggle functionality
### Screenshot
<br>**Screenshot Name A-Z Sort**
<img width="1918" height="1078" alt="image" src="https://github.com/user-attachments/assets/79219dd4-4887-4faf-850e-25f88e2238be" />
<br>**Screenshot Name Z-A Sort**
<img width="1918" height="1078" alt="image" src="https://github.com/user-attachments/assets/1ca4b918-41fd-47d3-be46-e2a173b6cfa7" />
<br>**Screenshot List View Toggle**
<img width="1918" height="1078" alt="image" src="https://github.com/user-attachments/assets/ea9c9e3b-444c-47d7-bf83-ee50ec74bd5d" />

## Club Detail Page
Route:
/clubs/:clubId
### Features
- Club image
- Club description
- Upcoming events
- Join Club functionality
### Screenshot
<img width="1918" height="1078" alt="image" src="https://github.com/user-attachments/assets/0bc9c384-9413-4a17-865c-2eb62fb3a0a5" />
<br> **Screenshot Joined Club**
<img width="1918" height="1078" alt="image" src="https://github.com/user-attachments/assets/7f8a1334-e52d-49e4-ac70-d6e7b437dcbd" />

## About Page
Route:
/about
### Features
- Application description
- Technology stack section
- Information about the project
### Screenshot
<img width="1918" height="1078" alt="image" src="https://github.com/user-attachments/assets/6cb9757e-041e-4062-afe4-551c6f9b6df9" />

### 404 Not Found Page
Route:
*
### Features
- Friendly error message
- Navigation button back to Home Page and Explore Clubs
### Screenshot
<img width="1918" height="1078" alt="image" src="https://github.com/user-attachments/assets/6ea3ab81-df04-40e4-85bb-deaa1888fb4d" />
