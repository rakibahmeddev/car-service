import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log(email, password);
  };

  const navigateRegister = () => {
    navigate("/register");
  };

  return (
    <div className="w-50 mx-auto my-5">
      <h2 className="text-center">Login</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Agree with on our terms?" />
        </Form.Group>
        <Button
          onClick={handleSubmit}
          className="w-25 d-block mx-auto fw-bold"
          variant="primary"
          type="submit"
        >
          Login
        </Button>
      </Form>
      <p className="text-center mt-3" onClick={navigateRegister}>
        New to car servicing? <span className="text-primary">Register</span>
      </p>
    </div>
  );
};

export default Login;
