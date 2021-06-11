import React, { useContext } from "react";
import UserItems from "../../components/users/UserItems";
import { Spinner } from "../../components/layout/Spinner";
import GithubContext from "../../context/github/githubContext";

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { loading, users } = githubContext;
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

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr",
  gridGap: " 1rem",
};

export default Users;
