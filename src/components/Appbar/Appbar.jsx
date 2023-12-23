import React, { useState } from "react";
import { dp, closeIcon, searchIcon, hamburger, chatIcon, homeIcon } from "../../assets";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoading, toggleSidebar } from "../../features/modalSlice";
import useFetch from "../../hooks/useFetch";
import SearchResults from "../SearchResults/SearchResults";
import { fetchUsersService } from "../../services/userServices";
import { fetchPostsService } from "../../services/postServices";
import "./appbar.css";
import { logout } from "../../features/userSlice";
import customHomeIcon from "../../assets/Shardslogoy.png";


const Appbar = () => {
	
	

	//local states
	const [query, setQuery] = useState("");
	const [searchResult, setSearchResult] = useState({});

	const dispatch = useDispatch();
	const customFetch = useFetch();

	const searchHandler = async e => {
		e.preventDefault();
		if (query.length > 0) {
			dispatch(setIsLoading(true));
			const { posts } = await customFetch(fetchPostsService, { query });
			const { users } = await customFetch(fetchUsersService, { query });
			setSearchResult({ posts, users });
			dispatch(setIsLoading(false));
		}
	};

	const reset = () => {
		setQuery("");
		setSearchResult({});
	};


  const gotoLogin = () => dispatch(logout());

  const handleLeftButton1 = () => {
    // Functionality for left button 1
    console.log("Left Button 1 clicked");
  };

  const handleLeftButton2 = () => {
    // Functionality for left button 2
    console.log("Left Button 2 clicked");
  };

  const handleLeftButton3 = () => {
    // Functionality for left button 3
    console.log("Left Button 3 clicked");
  };

  const handleRightButton1 = () => {
    // Functionality for right button 1
    console.log("Right Button 1 clicked");
  };

  const handleRightButton2 = () => {
    // Functionality for right button 2
    console.log("Right Button 2 clicked");
  };

  const handleRightButton3 = () => {
    // Functionality for right button 3
    console.log("Right Button 3 clicked");
  };

  const {
    user: { id, profileImage, isGuest },
    modal: { isSidebarVisible },
  } = useSelector((state) => state);

  return (
	<header className={searchResult.posts || searchResult.users ? "appbar topZ" : "appbar"}>
	  <div className="appbar__logo">
		<Link to="/">
		  <img src={customHomeIcon} alt="home" className="home-icon" />
		</Link>
	  </div>
  
	  <div className="appbar__search">
		<button className="button-left" onClick={handleLeftButton1}>
		  Home
		</button>
		<button className="button-left" onClick={handleLeftButton2}>
		  Videos
		</button>
		<button className="button-left" onClick={handleLeftButton3}>
		 Fourms
		</button>
  
	
		<form onSubmit={searchHandler} className="searchform">
		  <button type="submit" aria-label="search">
			<img src={searchIcon} alt="search" />
		  </button>
		  <input
			type="text"
			placeholder="Tap to search..."
			value={query}
			onChange={(e) => setQuery(e.target.value)}
		  />
		  <button onClick={reset} type="button" aria-label="clear search">
			<img src={closeIcon} alt="close" className="close" />
		  </button>
		  {(searchResult.posts || searchResult.users) && (
			<SearchResults searchResult={searchResult} reset={reset} />
		  )}
		</form>
  
		
		<button className="button-right" onClick={handleRightButton1}>
		  Notifications
		</button>
		<button className="button-right" onClick={handleRightButton2}>
		  Likes
		</button>
		<button className="button-right" onClick={handleRightButton3}>
		  Messages
		</button>
	  </div>


      <nav className="appbar__profile">
        {isGuest ? (
          <button className="login-btn" onClick={gotoLogin}>
            Login
          </button>
        ) : (
          <>
            <Link to={`/user/${id}`}>
              <img
                src={profileImage || dp}
                alt="profileImage"
                className="appbar__profile__dp"
                title="profile"
              />
            </Link>
            <Link to="/chat">
              <img src={chatIcon} alt="chat" className="chat" />
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Appbar;
