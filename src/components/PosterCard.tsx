import { FC } from "react";

type PropsType = {
  href: string;
  imgUrl: string;
  title: string;
  price: string;
  year: string;
  description: string;
};

const PosterCard: FC<PropsType> = (props) => {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 hover:scale-110 hover:z-30">
      <a href={props.href} className="flex flex-row h-52 lg:h-96">
        <img
          className="relative h-full rounded-l-lg aspect-poster bg-cover"
          alt={props.title}
          src={props.imgUrl}
        />
        <div className="w-full p-4 pt-2 flex flex-col">
          <h4 className="mb-1 lg:mb-2 lg:text-2xl font-bold tracking-tight text-gray-900">
            {`${props.title} (${props.year})`}
          </h4>
          <p className="flex-grow font-normal text-gray-700 text-[8px] lg:text-base">
            {props.description}
          </p>
          <div className="flex justify-end mt-auto">
            <h5 className="text-sm lg:text-lg font-semibold text-gray-900">
              {props.price}
            </h5>
          </div>
        </div>
      </a>
    </div>
  );
};

export default PosterCard;
