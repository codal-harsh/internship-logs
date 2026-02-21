import Link from "next/link";
import { Button } from "react-bootstrap";

const Navbar = () => {
  return (
    <>
      <nav className="border col border-secondary bg-black z-3 py-1 d-flex justify-content-between">
        <Link
          href="/app"
          className="text-white text-decoration-none fs-3 fw-light"
        >
          NExT BLOGS
        </Link>
        <div className="d-flex gap-4">
          <Link href="/profile">
            <img
              src="https://github.com/shadcn.png"
              width="40"
              height="40"
              className="rounded-circle"
              alt="React Bootstrap logo"
            />
          </Link>
          <Button variant="dark"><Link href="/">Logout</Link></Button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
