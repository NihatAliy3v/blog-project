import React from "react";
import { BlogList } from "../../components/home/BlogList";
import { usePostDataGetAllQuery } from "../../services/api/blogPosts/postApi";

const Home = () => {
  const { data:blogData } = usePostDataGetAllQuery("");
  return (
    <main className="pt-10">
      <BlogList blogData={blogData} />
    </main>
  );
};

export default Home;
