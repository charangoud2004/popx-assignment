import React from "react";
import { FormData } from "../components/FormData";

export const Login = () => {
  return (
    <div className="min-h-screen shadow-lg px-4 flex flex-col ">
      <FormData
        isregister={false}
        Buttontext="Login"
        heading="signin to your popx account"
        lorem="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
      />
    </div>
  );
};
