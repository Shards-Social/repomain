import React from "react";
import { logout } from "../../features/userSlice";
import { useDispatch } from "react-redux";
import "./Guest.css";

const GradientBackground = () => {
	return (
		<gradient-container>
			<gradient-color></gradient-color>
			<gradient-color></gradient-color>
			<gradient-color></gradient-color>
			<gradient-color></gradient-color>
			<gradient-backdrop></gradient-backdrop>
		</gradient-container>
	);
};

const Guest = () => {
	const dispatch = useDispatch();
	const gotoLogin = () => dispatch(logout());

	return (
		<article className="profilecard guest">
			<GradientBackground />
			<h2>You are not logged in!</h2>
			<p>You must login to use all features</p>
			<div className="btn-group">
				<button onClick={gotoLogin}>Login/signup</button>
			</div>
		</article>
	);
};

export default Guest;
