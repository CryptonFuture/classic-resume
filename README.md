# Classic Two-Column Resume Template

A professional resume template matching the classic green sidebar design (like Jane Doe Professional Designer style).

Built with **React + Vite + Tailwind CSS**.

---

## Design

- **Left Sidebar (Green)**: Photo, Contact, Education, Skills (progress bars), Languages
- **Right Panel (White)**: Name, About Me, Experience, Certifications
- Print / PDF ready
- Fully responsive

---

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:5173

---

## Edit Your Data

Open and edit:

```
src/data/resumeData.js
```

Change:
- Name, title, contact info, about text
- Education
- Skills + Soft Skills (with %)
- Languages
- Experience
- Certifications

### Add Your Photo

1. Put your photo in the `public/` folder (e.g. `public/photo.jpg`)
2. In `resumeData.js` set:
```js
photo: "/photo.jpg"
```

---

## Download as PDF

Click the **Download / Print PDF** button, or press `Ctrl+P` → Save as PDF.

---

## Tech Stack

- React 18
- Vite 5
- Tailwind CSS 3
- Lucide React icons
```# classic-resume
