import React from "react";
import { postResponseType } from "../../types/blogPost/postResponse";
import { Card } from "../ui/Card";

type blogDataType = {
  blogData: postResponseType[];
};

export const BlogList: React.FC<blogDataType> = ({ blogData }) => {
  console.log(blogData);
  return (
    <section>
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {blogData?.map((blogItem) => (
          <Card blogItem={blogItem} key={blogItem?.id}/>
        ))}
        
      </div>
    </section>
  );
};
