import { useParams } from "react-router-dom";
import { usePostDataGetByIdQuery } from "../../services/api/blogPosts/postApi";
import { postResponseType } from "../../types/blogPost/postResponse";
import { useEffect, useState } from "react";
// import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
// import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import loadImage from "../../assets/images/loadImage.png";
const PostDetail = () => {
  const { id } = useParams();
  const { data } = usePostDataGetByIdQuery(id);

  const [postData, setPostData] = useState<postResponseType>();
  const [imageLoaded,setImageLoaded] = useState(false)
  // data dəyəri dəyişdikdə state yenilənir
  useEffect(() => {
    if (data) {
      setPostData(data as postResponseType);
    }
  }, [data]);
  
  return (
    <main>
      <section className="py-8 ">
        <div className="container">
          <div className="flex justify-between h-20">
            <h1 className="text-3xl py-4">
              {postData?.subject}
            </h1>
            <div className="actions text-sm flex gap-3">
              {/* actions */}
              <div className="flex items-center gap-1">
                <button
                  //   onClick={postLike}
                  className="text-lg hover:bg-primary w-8 h-8 rounded-full flex items-center justify-center transition-all z-50 relative"
                >
                  <ThumbUpOutlinedIcon fontSize="inherit" />
                </button>
                {postData?.likeCount}
              </div>
              <div className="flex items-center gap-1">
                <button
                  //   onClick={postDisLike}
                  className="text-lg hover:bg-primary w-8 h-8 rounded-full flex items-center justify-center transition-all"
                >
                  <ThumbDownAltOutlinedIcon fontSize="inherit" />
                </button>
                {postData?.dislikeCount}
              </div>
              <div className="flex items-center gap-1">
                <span className="text-lg w-8 h-8 flex items-center justify-center">
                  <VisibilityOutlinedIcon fontSize="inherit" />
                </span>
                {postData?.viewCount}
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              className="w-full h-100"
              src={`${import.meta.env.VITE_BASE_URL}/${postData?.imageUrl}`}
              alt="post-photo"
              onLoad={()=>{setImageLoaded(true)}}
            />
            {
              !imageLoaded &&
              <img className="w-full h-100 absolute top-0 left-0 blur-sm z-10" src={loadImage} alt="image-load" />
            }
          </div>
          <div>
            <p className="mt-8">{postData?.content}</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PostDetail;
