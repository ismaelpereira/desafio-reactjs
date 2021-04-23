import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";

export async function fetchUser(username) {
  try {
    const res = await fetch("https://api.github.com/users/" + username, {
      method: "GET",
    });
    const userData = await res.json();
    return userData;
  } catch (err) {
    throw err;
  }
}

export async function fetchRepos(username) {
  try {
    const res = await fetch(
      "https://api.github.com/users/" + username + "/repos",
      {
        method: "GET",
      }
    );
    const repoData = await res.json();
    return repoData;
  } catch (err) {
    throw err;
  }
}

const Form = () => {
  const [username, setUsername] = useState("");
  console.log(username);
  return (
    <div className="search-dev">
      <label className="label-search-dev">Search Devs</label>
      <form
        onSubmit={() => {
          fetchUser(username);
          fetchRepos(username);
        }}
      >
        <input
          className="input-search-dev"
          type="text"
          placeholder="Type the username here..."
          onClick={(e) => setUsername(e.target.value)}
        ></input>
        <Link to={`/profile/`}>
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
