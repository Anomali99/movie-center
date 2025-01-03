import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage, ProductPage, AboutPage } from "../pages";

const Router: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
};

export default Router;
