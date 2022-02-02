import React from "react";
import Header from "../components/Header";

const UserList = () => {
  //api.themoviedb.org/3/movie/45612?api_key=5f306c4e30002ed15ba233a74718b6ab&language=fr-FR
  https: return (
    <div className="user-list-page">
      <Header />
      <h2>
        Coup de coeur <span>❤️</span>
      </h2>
      <div className="result"></div>
    </div>
  );
};

export default UserList;
