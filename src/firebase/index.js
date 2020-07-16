//Firebase
import app from "firebase/app";
import "firebase/analytics";

const config = {
	apiKey: "AIzaSyD0hXHujkjaxajBNhRm930q9hQuoekbtEQ",
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_DATABASE_URL,
	projectId: "rapport-alternance",
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
	appId: "1:230835771057:web:e89848bb472e10452bf490",
	measurementId: "G-WRWK7FL4LN",
};

// Initialize Firebase
app.initializeApp(config);
app.analytics();
