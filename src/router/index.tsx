import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage, ProductPage, AboutPage, DetailPage } from "../pages";

const Router: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/product/:id" element={<DetailPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
};

export default Router;
