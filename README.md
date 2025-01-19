

🛒 E-commerce Platform using MERN Stack

Welcome to the E-commerce Platform project repository! This project is a fully-featured e-commerce web application built using the MERN stack (MongoDB, Express.js, React, and Node.js). 🚀

🌟 Features
	•	🛍️ User-friendly shopping experience.
	•	🔑 User authentication: Sign-up, login, and profile management.
	•	🛒 Cart management: Add, update, and remove products.
	•	💳 Payment gateway integration for a seamless checkout process.
	•	🛠️ Admin panel: Manage products, categories, and user orders.
	•	🔍 Search functionality: Easily find products by category or name.
	•	📦 Real-time order tracking.

🏗️ Tech Stack
	•	Frontend: React.js ⚛️
	•	Backend: Node.js + Express.js 🖥️
	•	Database: MongoDB 🗄️
	•	Styling: CSS & TailwindCSS 🎨

🚀 Installation and Setup

Clone the Repository

git clone https://github.com/shubhampund9325/Ecommerce-Platform-using-MERN-Stack-.git

Navigate to the Project Directory

cd Ecommerce-Platform-using-MERN-Stack-

Install Dependencies
	•	Backend dependencies:

cd backend
npm install


	•	Frontend dependencies:

cd frontend
npm install



Environment Variables

Create a .env file in the backend directory and include:

MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>
PAYMENT_GATEWAY_KEY=<your-payment-gateway-key>

Start the Application
	•	Start the backend server:

cd backend
npm start


	•	Start the frontend server:

cd frontend
npm start

📂 Project Structure

Ecommerce-Platform-using-MERN-Stack-
├── backend
│   ├── models
│   ├── routes
│   ├── controllers
│   ├── utils
│   └── server.js
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── context
│   │   └── App.js
└── README.md

🛠️ Usage
	1.	Register as a new user or log in with existing credentials.
	2.	Browse the product catalog and add items to the cart.
	3.	Proceed to checkout and make a payment. 💳
	4.	Admin users can manage products, categories, and orders.

🔧 Development

Backend API Endpoints

Method	Endpoint	Description
GET	/api/products	Fetch all products
POST	/api/products	Add a new product (Admin)
PUT	/api/products	Update a product (Admin)
DELETE	/api/products	Delete a product (Admin)

Future Enhancements
	•	📈 Add analytics dashboard for admins.
	•	📱 Optimize for mobile devices.
	•	🌍 Add multi-language support.

🤝 Contributing

Contributions are welcome! 🎉
	1.	Fork the repository.
	2.	Create a new branch (feature-branch-name).
	3.	Commit your changes.
	4.	Push to the branch.
	5.	Open a pull request.

🧑‍💻 Author

Developed with ❤️ by Shubham Pund.
Feel free to reach out via LinkedIn or GitHub.

 
