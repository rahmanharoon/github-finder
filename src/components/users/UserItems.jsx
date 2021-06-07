import React from "react";
import propTypes from 'prop-types'

const UserItems = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className="card text-center">
      <img src={avatar_url} alt="" className="round-img" />
      <a href={html_url} className="btn btn-dark btn-sm my-1">
        More
      </a>
    </div>
  );
};

UserItems.propTypes = {
  user: propTypes.object.isRequired,
}

export default UserItems;
