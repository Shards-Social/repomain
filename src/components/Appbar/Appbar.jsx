import React, { useState, useEffect } from "react";
import { dp, closeIcon, searchIcon, chatIcon } from "../../assets";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoading } from "../../features/modalSlice";
import useFetch from "../../hooks/useFetch";
import SearchResults from "../SearchResults/SearchResults";
import { fetchUsersService } from "../../services/userServices";
import { fetchPostsService } from "../../services/postServices";
import "./appbar.css";
import { logout } from "../../features/userSlice";
import customHomeIcon from "../../assets/Shardslogoy.png";

const Appbar = () => {
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState({});
  const [greeting, setGreeting] = useState("");

  const dispatch = useDispatch();
  const customFetch = useFetch();

  const getGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour < 12) {
      setGreeting("Good morning");
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting("Good afternoon");
    } else {
      setGreeting("Good night");
    }
  };

  useEffect(() => {
    getGreeting();
  }, []);

  const searchHandler = async (e) => {
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

  const handleRightButton2 = () => {
    // Functionality for right button 2 (Likes)
    console.log("Likes clicked");
  };

  const handleRightButton3 = () => {
    // Functionality for right button 3 (Messages)
    console.log("Messages clicked");
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

      <div className="greeting">
        {greeting}
      </div>

      <div className="appbar__search">
        <form onSubmit={searchHandler} className="searchform">
          <button type="submit" aria-label="search">
            <img src={searchIcon} alt="search" />
          </button>
          <input
            type="text"
            placeholder="Search"
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
      </div>

      <nav className="appbar__profile">
        <div className="appbar__profile__buttons">
          <button className="button-right" onClick={handleRightButton2}>
            Notifications
          </button>
          <button className="button-right" onClick={handleRightButton3}>
            Options
          </button>
        </div>

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
