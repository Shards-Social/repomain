export default process.env.NODE_ENV === "Development"
	? "http://localhost:5000"
	: "https://repomain.vercel.app/";
