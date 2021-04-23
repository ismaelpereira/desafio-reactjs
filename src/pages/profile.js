import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchUser, fetchRepos, fetchStarred } from "./form";
import GroupIcon from "@material-ui/icons/Group";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import BusinessIcon from "@material-ui/icons/Business";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EmailIcon from "@material-ui/icons/Email";
import LinkIcon from "@material-ui/icons/Link";
import TwitterIcon from "@material-ui/icons/Twitter";

const Profile = () => {
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [starred, setStarred] = useState([]);
  const { username } = useParams();

  useEffect(() => {
    fetchUser(username, setUser);
    fetchRepos(username, setRepos);
    fetchStarred(username, setStarred);
  }, []);

  const repositories = repos
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .map((repositorie) => (
      <div>
        <a
          className="repository-name"
          href={repositorie.html_url}
          target="_blank"
        >
          {repositorie.name}
        </a>
        <div className="repository-description">{repositorie.description}</div>
        <div className="repository-data">
          <StarBorderIcon fontSize="small" />
          {repositorie.stargazers_count} stars • Updated 30 days ago
          <hr className="separator" />
        </div>
      </div>
    ));

  return (
    <div className="profile-dev">
      <div className="sidebar-profile-dev">
        <img className="dev-profile-picture" src={user.avatar_url} />
        <div className="dev-full-name">{user.name}</div>
        <div className="dev-username">@{username}</div>
        <div className="dev-description">{user.bio}</div>
        <div className="dev-data">
          <GroupIcon fontSize="small" />
          {user.followers} Followers
          <FavoriteBorderIcon fontSize="small" /> {user.following} Following
          <StarBorderIcon fontSize="small" /> {starred.length} Stars
        </div>
        <div className="dev-infos">
          <p>
            <BusinessIcon fontSize="small" />
            {user.company}
          </p>
          <p>
            <LocationOnIcon fontSize="small" />
            {user.location}
          </p>
          <p>
            <EmailIcon fontSize="small" />
            {user.email}
          </p>
          <p>
            <LinkIcon fontSize="small" />
            {user.blog}
          </p>
          <p>
            <TwitterIcon fontSize="small" />{" "}
            <a
              className="twitter-username"
              href={`http://twitter.com/${user.twitter_username}`}
              target="_blank"
            >
              @{user.twitter_username}
            </a>
          </p>
        </div>
        <div>
          <Link to="/">
            <button className="profile-go-back">Voltar</button>
          </Link>
        </div>
      </div>
      <div className="repositories-profile-dev">{repositories}</div>
    </div>
  );
};

export default Profile;
