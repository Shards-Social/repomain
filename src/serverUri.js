export default process.env.NODE_ENV === "Production"
	? "http://localhost:5000"
	: "http://localhost:3000/";
