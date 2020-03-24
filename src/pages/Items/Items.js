import React from 'react';
import {useParams} from "react-router-dom";

import "./Items.scss";

const Items = props => {

   let { id }= useParams();

  return (
    <>
      <p>Items</p>
      {
        id && <p>id : { id }</p>
      }
    </>
  );
};

export default Items;