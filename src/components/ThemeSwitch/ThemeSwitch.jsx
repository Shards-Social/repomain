import React, { useState } from "react";
import { useLocation } from "react-router-dom"; // Import the useLocation hook
import "./themeSwitch.css";
import { AiFillFormatPainter } from "react-icons/ai";

const ThemeSwitch = ({ setTheme }) => {
  const location = useLocation(); // Use the useLocation hook
  const [isOpen, setIsOpen] = useState(false);
  const className = isOpen ? "theme-switch open" : "theme-switch";
  const changeTheme = (e) => {
    setTheme(e.currentTarget.classList[0]);
    setIsOpen(false);
  };

  // Check if the current location is the specific page where you want to show ThemeSwitch
  const isSpecificPage = location.pathname === "/specific-page"; // Replace "/specific-page" with your desired page route

  if (!isSpecificPage) {
    return null; // Don't render the ThemeSwitch component if not on the specific page
  }

  return (
		<div className={className}>
			<div className="switch" onClick={() => setIsOpen(!isOpen)}>
				<AiFillFormatPainter />
			</div>
			<div className="themes">
				<div className="dark" onClick={changeTheme}>
					<p className="tooltip">Dark</p>
				</div>
				<div className="dark-contrast" onClick={changeTheme}>
					<p className="tooltip">Dark Contrast</p>
				</div>
				<div className="dark-blue-tint" onClick={changeTheme}>
					<p className="tooltip">Dark Blue Tint</p>
				</div>
			</div>
		</div>
	);
};

export default ThemeSwitch;
