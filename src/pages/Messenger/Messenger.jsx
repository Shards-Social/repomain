import React, { useEffect } from "react";
import Messenger from "../../components/Messenger/Messenger";
import { useNavigate } from "react-router-dom";
import "./Messenger.css"; // Import your CSS file here

const MessengerPage = () => {
	const style = {
		height: "calc(100vh - 9rem)",
		borderRadius: "10px",
		overflow: "hidden",
		/* You can move these styles to the CSS file for better organization */
	};

	const navigate = useNavigate();

	useEffect(() => {
		if (window.innerWidth > 800) navigate("/chat");
	});

	return (
		<div className="messenger-page-container"> {/* Use a class for better styling */}
			<div style={style}>
				<Messenger />
			</div>
		</div>
	);
};

export default MessengerPage;
