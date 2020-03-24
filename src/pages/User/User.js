import React from 'react';
import {useParams} from "react-router-dom";

import "./User.scss";

const User = props => {

   let { id }= useParams();

  return (
    <>
      <p>User</p>
      {
        id && <p>id : { id }</p>
      }
    </>
  );
};

export default User;