import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";

export async function fetchData(username) {
  try {
    const res = await fetch("https://api.github.com/users/" + username, {
      method: "GET",
    });
    const userData = await res.json();
    console.log(userData);
    console.log(username);
  } catch (err) {
    throw err;
  }
  try {
    const res = await fetch(
      "https://api.github.com/users/" + username + "/repos",
      {
        method: "GET",
      }
    );
    const repoData = await res.json();
    console.log(repoData);
    console.log(username);
  } catch (err) {
    throw err;
  }
}

const Form = () => {
  const [username, setUsername] = useState("");

  return (
    <div className="search-dev">
      <label className="label-search-dev">Search Devs</label>
      <form onSubmit={fetchData(username)}>
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
