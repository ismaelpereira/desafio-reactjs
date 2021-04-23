import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";

export const fetchUser = async (username, setUser) => {
  try {
    const res = await fetch("https://api.github.com/users/" + username, {
      method: "GET",
    });
    const userData = await res.json();
    setUser(userData);
  } catch (err) {
    alert("A problem ocurred! Check the developer name");
    throw err;
  }
};

export const fetchRepos = async (username, setRepos) => {
  try {
    const res = await fetch(
      "https://api.github.com/users/" + username + "/repos",
      {
        method: "GET",
      }
    );
    const repoData = await res.json();
    setRepos(repoData);
  } catch (err) {
    alert("A problem ocurred! Check the developer name");
    throw err;
  }
};

export const fetchStarred = async (username, setStarred) => {
  try {
    const res = await fetch(
      "https://api.github.com/users/" + username + "/starred",
      {
        method: "GET",
      }
    );
    const starredData = await res.json();
    setStarred(starredData);
  } catch (err) {
    alert("A problem ocurred! Check the developer name");
    throw err;
  }
};

const Form = () => {
  const [username, setUsername] = useState("");
  return (
    <div className="search-dev">
      <label className="label-search-dev">Search Devs</label>
      <form>
        <input
          className="input-search-dev"
          type="text"
          placeholder="Type the username here..."
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <Link to={`/profile/${username}`}>
          <button type="submit" className="btn-search-dev">
            <SearchIcon />
            Buscar
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Form;
