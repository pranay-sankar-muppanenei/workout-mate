# 🏋️ Workout Mate

Workout Mate is a full-stack fitness tracking application designed to help users log and manage their workout routines easily.  
It allows users to create, update, and track exercises — making fitness management simple and effective.

---

## 🌐 Live Demo
<a href="[https://workout-mate-ocsd.vercel.app/login]" target="_blank" rel="noopener noreferrer">Click here to try Workout Mate</a>


---

## 🚀 Features

- ✅ User authentication (Sign up & Login)  
- 📝 Add, update, and delete workout records  
- 📊 Dashboard to view all workouts at a glance  
- 🕒 Track date, type, load (kg), and reps for each exercise  
- ⚡ Responsive UI for mobile and desktop  
- 💾 Secure backend with REST API

---

## 🧰 Tech Stack

- **Frontend:** React.js, Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose)  
- **Authentication:** JWT (JSON Web Token)  
- **Others:** React Context,Fetch, React Router DOM

---

## 🏗️ Project Structure

workout-mate/  
├── client/ # React frontend  
│ ├── src/  
│ │ ├── components/  
│ │ ├── pages/  
│ │ ├── context/  
│ │ └── App.js  
│ └── package.json  
├── server/ # Node.js backend  
│ ├── controllers/  
│ ├── models/  
│ ├── routes/  
│ ├── server.js  
│ └── package.json  
└── README.md  


---

## 🛠️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/workout-mate.git
cd workout-mate
# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

# Start backend
cd server
npm run dev

# Start frontend (in another terminal)
cd client
npm start
```
## 🧪 API Endpoints
- Method	Endpoint	Description  
- GET	/api/workouts	Get all workouts  
- POST	/api/workouts	Add a new workout
- PUT	/api/workouts/:id	Update an existing workout  
- DELETE	/api/workouts/:id	Delete a workout  
- POST	/api/user/signup	Register a new user  
- POST	/api/user/login	Login and get token  

## 📅 Future Improvements

- 📲 Add reminders & notifications

- 📉 Workout progress analytics

- 🤝 Social features (friends & challenges)

- 💪 Personalized workout plans

- 🤝 Contributing

## 🤝 **Contributions are Welcome!**

We’d love your help to make this project even better.  
Follow these simple steps to contribute:

1. **Fork** the project 🍴

2. **Create your feature branch:**  
   ```bash
   git checkout -b feature/new-feature
3. git commit -m "✨ Add new feature"
4. git push origin feature/new-feature
5.Open a PR
   



Open a Pull Request 🚀




