import { userTypes } from "@/app/common/types/userTypes";
import React from "react";

const HomePage = ({ name, age }: userTypes) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{age}</p>
    </div>
  );
};

export default HomePage;
