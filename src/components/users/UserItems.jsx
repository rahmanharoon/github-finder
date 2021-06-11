import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItems = ({ user: { login, avatar_url } }) => {
  return (
    <div className="card text-center">
      <img src={avatar_url} alt="" className="round-img" />
      <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
        More
      </Link>
    </div>
  );
};

UserItems.propTypes = {
  user: propTypes.object.isRequired,
};

export default UserItems;
