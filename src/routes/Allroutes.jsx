import { Route, Routes } from "react-router-dom";
import { Login, Register, PageNotFound, ProfilePage, Home } from "../Page";

export const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
