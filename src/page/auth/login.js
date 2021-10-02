import React, { useState } from "react";
import { connect } from "react-redux";

import { login } from "../../redux/user/user.action";

import { Container, CustomCard, FormControl } from "./style";
import { Button } from "../../components/button";
import { Form } from "../../components/form";

const Login = ({ login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <Container>
      <CustomCard>
        <Form onSubmit={onSubmit}>
          <h1>LOGIN</h1>
          <FormControl>
            <input
              type="email"
              name="email"
              value={email}
              required
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              minLength="6"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          <Button>Login</Button>
        </Form>
      </CustomCard>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  login: (email, password) => dispatch(login(email, password)),
});

export default connect(null, mapDispatchToProps)(Login);
