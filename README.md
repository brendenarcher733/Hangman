#  Hangman 2.0 — Fullstack Web App with React, MongoDB & Docker

Hangman 2.0 is a modern, full-stack word-guessing game built with **React** on the frontend and **Node.js/Express** on the backend. It uses **MongoDB** to store player stats and is fully containerized using **Docker Compose**.

This upgraded version features beautiful styling, dynamic hangman images, win/loss tracking, and real-time win percentage stats fetched from a live API.

---

##  Screenshots

| Game In Progress | Game Over |
|------------------|-----------|
| ![Gameplay](public/images/hangman_2.png) | ![Lost Screen](public/images/hangman_6.png) |

---

##  Features

-Interactive letter-based guessing  
- Real-time win/loss tracking with MongoDB  
- Win percentage display after each round  
- Play again button to reset state  
-Dockerized backend & database  
 -Clean and responsive design  
-Modular file structure for scalability

---

## -Tech Stack

| Layer       | Tech Used             |
|-------------|------------------------|
| Frontend    | React, CSS             |
| Backend     | Node.js, Express       |
| Database    | MongoDB (via Docker)   |
| Container   | Docker + Docker Compose|

---

##  Project Structure

hangman-v2/ ├── client/ # React frontend │ ├── src/ │ │ ├── App.js │ │ ├── App.css │ │ └── HangmanImage.js │ └── public/images/ # 7 hangman stages (0–6) ├── server/ # Node backend │ ├── index.js │ ├── models/Result.js │ ├── Dockerfile │ └── package.json ├── docker-compose.yml # Runs backend + MongoDB └── README.md

yaml
Copy
Edit

---

## 🔧 Installation & Running the App

###  With Docker (Recommended)

#### 1. Clone the repo

```bash
git clone https://github.com/YOUR_USERNAME/hangman-v2.git
cd hangman-v2
2. Start backend + MongoDB with Docker Compose
bash
Copy
Edit
docker compose up --build
Your backend will be live at:
http://localhost:4000/api/word
http://localhost:4000/api/stats

3. Start the frontend React app
bash
Copy
Edit
cd client
npm install
npm start
The game runs on http://localhost:3000

API Endpoints
Method	Endpoint	Description
GET	/api/word	Returns a random word
GET	/api/stats	Returns overall win percentage
POST	/api/result	Records win/loss in MongoDB
 Optional: Backend Testing
If you're using Jest or Supertest, you can write tests like this:

js
Copy
Edit
// server/tests/backend.test.js

const request = require('supertest');
const app = require('../index'); // if exportable

describe('GET /api/word', () => {
  it('returns a word', async () => {
    const res = await request(app).get('/api/word');
    expect(res.body).toHaveProperty('word');
  });
});
Run it with:

bash
Copy
Edit
npm install --save-dev jest supertest
npm test
Future Improvements
Add user authentication and personal win stats

Add difficulty modes (easy/medium/hard)

Deploy backend to Render/Vercel/Heroku

Deploy frontend with Netlify or Vercel

