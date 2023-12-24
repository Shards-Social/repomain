export default process.env.NODE_ENV === "Production"
	? "http://localhost:5000"
	: "https://repomain.vercel.app/";
