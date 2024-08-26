import React from "react";
import { BlogList } from "../../components/home/BlogList";
import { usePostDataGetAllQuery } from "../../services/api/blogPosts/postApi";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { Fab } from "@mui/material";
import { Link } from "react-router-dom";
const Home = () => {
  const { data: blogData } = usePostDataGetAllQuery("");
  return (
    <main className="py-12">
      <section>
        <div className="container flex justify-end mb-6">
          <Link to="/create-post">
            <Fab size="small" sx={{ boxShadow: "none" }} color="primary">
              <AddOutlinedIcon className="text-white" />
            </Fab>
          </Link>
        </div>
      </section>

      <BlogList blogData={blogData} />
    </main>
  );
};

export default Home;
