import { Container, Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUser } from "../actions/authActions";

const Login = () => {
  const [credCorrect, setCredCorrect] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const res = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (res.user) {
      navigate("/home");
    }
  }, []);

  const checkUser = (email, password) => {
    if (email === "hsonegra@codal.com" && password === "1") {
      dispatch(setUser(email));
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const flag = checkUser(email, password);
    setCredCorrect(flag);
    if (flag) {
      navigate("/home");
    }
    setEmail("");
    setPassword("");
  };

  return (
    <Container fluid className="h-100 bg-primary">
      <div className="w-25 mx-auto h-100 d-flex align-content-center">
        <Form
          onSubmit={handleSubmit}
          className="w-100 h-auto px-2 d-flex flex-column justify-content-center"
        >
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={email}
              required
              autoComplete={"true"}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              autoComplete={"true"}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          {!credCorrect && (
            <span className="text-danger text-center fs-6">
              Wrong Credentials
            </span>
          )}
          <Button variant="info" type="submit" className="text-white mt-3">
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
