import { Link } from "react-router-dom";
import { postResponseType } from "../../types/blogPost/postResponse";
// import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
// import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
type blogItemType = { blogItem: postResponseType; key: number };
export const Card: React.FC<blogItemType> = ({ blogItem }) => {
  const postLike = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };
  const postDisLike = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };
  return (
    <div className="">
      <Link
        className="flex flex-col shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]"
        to={`/post/${blogItem?.id}`}
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
          <div className="actions text-sm flex justify-between">
            <div className="flex gap-3">
              <div className="flex items-center gap-1">
                <button
                  onClick={postLike}
                  className="text-xl hover:bg-primary w-8 h-8 rounded-full flex items-center justify-center transition-all z-50 relative"
                >
                  <ThumbUpOutlinedIcon fontSize="inherit" />
                </button>
                {blogItem?.likeCount}
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={postDisLike}
                  className="text-xl hover:bg-primary w-8 h-8 rounded-full flex items-center justify-center transition-all"
                >
                  <ThumbDownAltOutlinedIcon fontSize="inherit" />
                </button>{" "}
                {blogItem?.dislikeCount}
              </div>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-xl w-8 h-8 flex items-center justify-center">
                <VisibilityOutlinedIcon fontSize="inherit" />
              </span>
              {blogItem?.viewCount}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
