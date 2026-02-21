import AddBlogButton from "@/components/action-buttons/addblog";
import Post from "@/components/Post";
import { Suspense } from "react";

const appDashboard = () => {
  const array: number[] = new Array(50).fill(1);
  return (
    <>
      <section>
        <h2
          style={{ fontSize: 64 }}
          className="fst-italic text-secondary fw-light"
        >
          Hello, <span className="fw-medium">Harsh</span>
        </h2>
        <div>
          {array.map((element, index) => (
            <Suspense key={index} fallback={<div>Loading</div>}>
              <Post id={index} body={element.toString()}/>
            </Suspense>
          ))}
        </div>
        <AddBlogButton className="position-absolute text-white end-0 bottom-0 m-4 fs-1 border rounded-circle d-flex align-content-center justify-content-center p-2">+</AddBlogButton>
      </section>
    </>
  );
};

export default appDashboard;
