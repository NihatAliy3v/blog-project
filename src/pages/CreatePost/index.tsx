import { useEffect } from "react";

import { PostForm } from "../../components/createPost/PostForm";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../../features/auth/authSlice";
import { RootState } from "../../app/store";
const CreatePost = () => {
  const userData = useSelector<RootState>((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("access-token");
    dispatch(setCredentials(token));
  }, []);
  return (
    <main className="py-12">
      <section>
        <div className="container ">
          <PostForm userInfo={userData} />
        </div>
      </section>
    </main>
  );
};

export default CreatePost;
