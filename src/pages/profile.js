import { Link } from "react-router-dom";
import { useEffect } from "react";
import { fetchData } from "./form";
import GroupIcon from "@material-ui/icons/Group";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import BusinessIcon from "@material-ui/icons/Business";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EmailIcon from "@material-ui/icons/Email";
import LinkIcon from "@material-ui/icons/Link";
import TwitterIcon from "@material-ui/icons/Twitter";

const Profile = (userData, userRepo, username) => {
  useEffect(() => {
    fetchData(username);
  }, []);
  console.log(username);
  console.log("user" + userData);
  console.log("repositorie" + userRepo);

  return (
    <div className="profile-dev">
      <div className="sidebar-profile-dev">
        <div className="dev-profile-picture">Profile Picture</div>
        <div className="dev-full-name">Developer's full name</div>
        <div className="dev-username">@username</div>
        <div className="dev-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt
          congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu,
          feugiat.
        </div>
        <div className="dev-data">
          <GroupIcon fontSize="small" />
          200 Followers
          <FavoriteBorderIcon fontSize="small" /> 130 Following
          <StarBorderIcon fontSize="small" /> 100 Stars
        </div>
        <div className="dev-infos">
          <p>
            <BusinessIcon fontSize="small" />
            Organization
          </p>
          <p>
            <LocationOnIcon fontSize="small" />
            Location
          </p>
          <p>
            <EmailIcon fontSize="small" />
            Email
          </p>
          <p>
            <LinkIcon fontSize="small" />
            www.mywebsite.com
          </p>
          <p>
            <TwitterIcon fontSize="small" />
            @myTwitter
          </p>
        </div>
        <div>
          <Link to="/">
            <button className="profile-go-back">Voltar</button>
          </Link>
        </div>
      </div>
      <div className="repositories-profile-dev">
        <div className="repository-name">Repository Name</div>
        <div className="repository-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt
          congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu,
          feugiat.
        </div>
        <div className="repository-data">
          <StarBorderIcon fontSize="small" />
          100 stars • Updated 30 days ago
        </div>
        <hr className="separator" />
      </div>
    </div>
  );
};

export default Profile;
