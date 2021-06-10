import React from "react";
import PropTypes from "prop-types";
import UserRepoItem from "./UserRepoItems";

const UserRepo = ({ repos }) => {
  return repos.map((repo) => <UserRepoItem repo={repo} key={repo.id} />);
};

UserRepo.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default UserRepo;
