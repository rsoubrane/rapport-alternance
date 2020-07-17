//Firebase
import app from "firebase/app";
import "firebase/analytics";

const config = {
	apiKey: "AIzaSyD0hXHujkjaxajBNhRm930q9hQuoekbtEQ",
	projectId: "rapport-alternance",
	appId: "1:230835771057:web:e89848bb472e10452bf490",
	measurementId: "G-WRWK7FL4LN",
};

// Initialize Firebase
app.initializeApp(config);
app.analytics();
