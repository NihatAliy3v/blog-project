import { Link } from "react-router-dom";
import { postResponseType } from "../../types/blogPost/postResponse";
type blogItemType = { blogItem: postResponseType; key: number };
export const Card: React.FC<blogItemType> = ({ blogItem }) => {
  return (
    <div className="">
      <Link
        className="flex flex-col shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]"
        to="/"
      >
        {/* photo */}
        <div className="w-full h-40">
          <img
            src={`${import.meta.env.VITE_BASE_URL}/${blogItem?.imageUrl}`}
            alt="photo"
            className="w-full h-full"
          />
        </div>
        {/* content */}
        <div className="p-3">
          <div className="border-b border-b-text pb-2 mb-2">
            <h3 className="mb-2 font-semibold text-base">
              {blogItem?.subject}
            </h3>
            <p className="text-sm line-clamp-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repudiandae, nesciunt repellendus. Nihil tenetur quibusdam ipsum
              odit hic nostrum deserunt illo accusamus aperiam, rerum porro
              incidunt.
            </p>
          </div>
          <div className="">
            
          </div>
        </div>
      </Link>
    </div>
  );
};
