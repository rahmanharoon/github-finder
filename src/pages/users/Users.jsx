import React from "react";
import { Spinner } from "../../components/layout/Spinner";
import UserItems from "../../components/users/UserItems";
import propTypes from "prop-types";

const Users = ({ users, loading }) => {
  console.log(users);
  return (
    <div style={userStyle}>
      {loading ? (
        <Spinner />
      ) : (
        users.map((item) => <UserItems key={item.id} user={item} />)
      )}
    </div>
  );
};

Users.propTypes = {
  users: propTypes.array.isRequired,
  loading: propTypes.bool.isRequired,
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr",
  gridGap: " 1rem",
};

export default Users;
