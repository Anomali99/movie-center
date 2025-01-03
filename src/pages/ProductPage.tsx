import { FC } from "react";
import { Footer, Header } from "../components";

const ProductPage: FC = () => {
  return (
    <>
      <Header index={1} />

      <section className="flex-grow flex justify-center items-center">
        <div>ProductPage</div>
      </section>
      <Footer />
    </>
  );
};

export default ProductPage;
