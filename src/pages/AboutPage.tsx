import { FC } from "react";
import { Footer, Header } from "../components";
import { contact } from "../assets";

const AboutPage: FC = () => {
  const contactList = [
    {
      value: `+${import.meta.env.VITE_NO_WA}`,
      svg: (
        <svg
          className="text-primary-600"
          width="30"
          height="30"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
            clip-rule="evenodd"
          />
          <path
            fill="currentColor"
            d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
          />
        </svg>
      ),
    },
    {
      value: import.meta.env.VITE_EMAIL,
      svg: (
        <svg
          className="text-primary-600"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.81501 8.75L10.1985 13.6191C12.8358 15.2015 14.1544 15.9927 15.6032 15.9582C17.0519 15.9237 18.3315 15.0707 20.8905 13.3647L27.185 8.75M12.5 25H17.5C22.214 25 24.5711 25 26.0355 23.5355C27.5 22.0711 27.5 19.714 27.5 15C27.5 10.286 27.5 7.92893 26.0355 6.46447C24.5711 5 22.214 5 17.5 5H12.5C7.78595 5 5.42893 5 3.96447 6.46447C2.5 7.92893 2.5 10.286 2.5 15C2.5 19.714 2.5 22.0711 3.96447 23.5355C5.42893 25 7.78595 25 12.5 25Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      value: "Bungah, Gresik",
      svg: (
        <svg
          className="text-primary-600"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25 12.9169C25 17.716 21.1939 21.5832 18.2779 24.9828C16.8385 26.6609 16.1188 27.5 15 27.5C13.8812 27.5 13.1615 26.6609 11.7221 24.9828C8.80612 21.5832 5 17.716 5 12.9169C5 10.1542 6.05357 7.5046 7.92893 5.55105C9.8043 3.59749 12.3478 2.5 15 2.5C17.6522 2.5 20.1957 3.59749 22.0711 5.55105C23.9464 7.5046 25 10.1542 25 12.9169Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M17.5 11.6148C17.5 13.0531 16.3807 14.219 15 14.219C13.6193 14.219 12.5 13.0531 12.5 11.6148C12.5 10.1765 13.6193 9.01058 15 9.01058C16.3807 9.01058 17.5 10.1765 17.5 11.6148Z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
    },
  ];

  return (
    <>
      <Header index={2} />
      <section className="flex-grow flex justify-center items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className="hidden lg:block lg:mb-0 mb-10">
              <div className="group w-full h-full">
                <div className="relative h-full">
                  <img
                    src={contact}
                    alt="ContactUs"
                    className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-primary-700 object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
              <h2 className="text-primary-600 font-manrope text-4xl font-semibold leading-10 mb-4 lg:mb-11">
                Tentang Kami
              </h2>
              <p className="text-gray-700 leading-relaxed mb-2 lg:mb-6">
                Movie Center adalah platform pembelian film digital yang
                dirancang untuk memudahkan Anda memiliki koleksi film favorit
                secara permanen. Dengan antarmuka yang sederhana dan mudah
                digunakan, Movie Center menyediakan berbagai pilihan film dari
                berbagai genre dan memastikan pengalaman pembelian yang cepat
                dan aman.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 lg:mb-6">
                Kami percaya bahwa setiap orang berhak menikmati hiburan tanpa
                batas, kapan saja, dan di mana saja. Movie Center adalah solusi
                ideal untuk para pecinta film yang ingin memiliki koleksi
                pribadi tanpa perlu berlangganan bulanan.
              </p>
              <h2 className="text-primary-600 font-manrope text-4xl font-semibold leading-10 mb-1 lg:mb-8">
                Hubungi Kami
              </h2>
              <div className="bg-white rounded-lg p-6 block">
                {contactList.map((value, index) => (
                  <div key={index} className="flex items-center mb-6">
                    {value.svg}
                    <h5 className="text-black text-base font-normal leading-6 ml-5">
                      {value.value}
                    </h5>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutPage;
