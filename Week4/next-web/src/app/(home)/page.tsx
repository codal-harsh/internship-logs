import Link from "next/link";
import { Button, Container } from "react-bootstrap";

const page = () => {
  return (
    <Container
      fluid
      className="w-100 h-100  text-center p-0 align-content-center"
    >
      <section>
        <h1 className="fs-1 m-2">NExT BLOGS</h1>
      </section>
      <article className="fst-italic">
        An open source blog app for good people
      </article>

      <nav className="position-fixed d-flex justify-content-between px-5  top-0 w-100">
        <Link href="/">
          <Button variant="dark" className="fs-2 fw-bolder">
            NExT BLOGS
          </Button>
        </Link>
        <div className="d-flex  gap-4">
          <Link href="/app" className="d-flex text-decoration-none">
            <Button variant="dark" className="">
              LOGIN
            </Button>
          </Link>
          <Link href="/app" className="d-flex text-decoration-none">
            <Button variant="dark" className="">
              SIGNUP
            </Button>
          </Link>
        </div>
      </nav>
    </Container>
  );
};

export default page;
