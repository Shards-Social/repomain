export default process.env.NODE_ENV === "development"
	? "http://localhost:5000"
	: "https://lumi.up.railway.app";
