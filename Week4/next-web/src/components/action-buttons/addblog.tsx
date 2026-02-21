"use client";
import Link from "next/link";
import React from "react";
import { Button } from "react-bootstrap";

interface Ibtnprops {
  className: string;
  children: React.ReactNode;
}
const AddBlogButton = (props: Ibtnprops) => {
  return (
    <div>
      <Link href="/create">
        <Button variant="dark" className={props.className} onClick={() => {}}>
          <img
            src="add-large-line.svg"
            alt="+"
            style={{
              width: "32px",
              aspectRatio: "1/1",
              filter: "invert(100%)",
            }}
          />
        </Button>
      </Link>
    </div>
  );
};

export default AddBlogButton;
