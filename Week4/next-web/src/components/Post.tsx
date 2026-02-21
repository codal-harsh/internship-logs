"use client";

import { useRouter } from "next/navigation";
type Post = {
  id: number;
  body: string;
};
const Post = (props: Post) => {

  const router = useRouter();
  return <div onClick={() => router.push(`/app/${props.id}`)}>Post</div>;
};

export default Post;
