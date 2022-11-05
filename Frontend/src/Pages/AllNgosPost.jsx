import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleNGOPost from "../Components/Home/SingleNGOPost";

export default function AllNgosPost() {
  const [allPosts, setAllPosts] = useState([]);
  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          localStorage.getItem("token") ? localStorage.getItem("token") : ""
        }`,
      },
    };
    axios
      .get("http://localhost:5000/api/post/getAllPosts", config)
      .then((res) => {
        setAllPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {allPosts?.map((post) => (
        <SingleNGOPost post={post} />
      ))}
    </>
  );
}
