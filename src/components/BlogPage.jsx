import React, { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import Spinner from "./Spinner";

const BlogPage = () => {
  // consuming data from provider
  const { posts, loader } = useContext(BlogContext);

  return (
    <div className=" w-full h-full flex flex-col gap-8 mt-16 pt-6 mb-10 pb-4">
      {/*  map in posts array to get all data */}

      {posts.map((post) => {
        return (
          <div key={post.id}>
            {loader ? (
              <Spinner />
            ) : (
              //  card

              <div className=" w-1/2 m-auto flex flex-col gap-1">
                <h2 className="font-bold">{post.title}</h2>
                <div className="text-xs">
                  By <span className="italic">{post.author}</span> on{" "}
                  <span className="font-semibold">{post.category}</span>
                </div>
                <div className="text-xs">
                  Posted on <span>{post.date}</span>
                </div>
                <p className="text-sm">{post.content}</p>
                <div>
                  {post.tags.map((tag, index) => {
                    return (
                      <span
                        key={index}
                        className="mr-2 cursor-pointer underline font-semibold text-xs text-blue-600"
                      >
                        #{tag}
                      </span>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default BlogPage;
