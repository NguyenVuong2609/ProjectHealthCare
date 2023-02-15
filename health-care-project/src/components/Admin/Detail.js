import React from "react";
import { useParams } from "react-router-dom";
import UserAdmin from "./UserAdmin";
import BlogAdmin from "./BlogAdmin";
import HomeAdmin from "./HomeAdmin";

export default function Detail() {
  let params = useParams();
  let element =
    params.detail == "user" ? (
      <UserAdmin detail={params} />
    ) : params.detail == "blog" ? (
      <BlogAdmin detail={params} />
    ) : (
      <HomeAdmin detail={params} />
    );

  return <div>{element}</div>;
}
