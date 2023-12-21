import axios from "axios";
import React, { useEffect, useState } from "react";
import "./loading.css";

let timeout;
const controller = new AbortController();

const Loading = ({ show }) => {
	const [quote, setQuote] = useState(""); // Change initialQuote to ""

	const fetchQuote = async () => {
		try {
			const { data } = await axios.get("", {
				signal: controller.signal,
			});
			setQuote(data.text);
		} catch (err) {
			// Handle errors if needed
		}
	};

	useEffect(() => {
		if (!show) {
			fetchQuote();
			timeout = setTimeout(() => {
				setQuote(q => {
					if (q !== "408 session timeout") return q; // Return current quote if already fetched
					return ""; // Set message for slow internet
				});
			}, 3000);
		}

		return () => {
			clearTimeout(timeout);
			controller.abort();
		};
	}, [show]);

	return (
		<section className="loading">
			<div className="loading__circle"></div>
			<h2>Loading</h2>
			{quote && <p>{quote}</p>} {/* Only render the <p> if quote is not an empty string */}
		</section>
	);
};

export default Loading;
