import React, { useState } from 'react';
import { connect } from 'react-redux';

import { register } from '../../redux/user/user.action';

import {
  Container,
  CustomCard,
  FormControl,
  FormUsername,
  CheckBoxContainer,
  CustomLink,
} from './style';
import { Button } from '../../components/button';
import { Form } from '../../components/form';

const Register = ({ register }) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      console.log("Password doesn't match");
    } else {
      register({
        firstname,
        lastname,
        email,
        password,
      });
    }
  };

  return (
    <Container>
      <CustomCard>
        <Form onSubmit={onSubmit}>
          <h1>REGISTER</h1>
          <FormUsername>
            <FormControl>
              <input
                type='text'
                name='first_name'
                value={firstname}
                placeholder='First Name'
                required
                onChange={(e) => setFirstname(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <input
                type='text'
                name='last_name'
                value={lastname}
                placeholder='Last Name'
                required
                onChange={(e) => setLastname(e.target.value)}
              />
            </FormControl>
          </FormUsername>

          <FormControl>
            <input
              type='email'
              name='email'
              value={email}
              placeholder='Email Address'
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <input
              type='password'
              name='password'
              value={password}
              placeholder='Password'
              required
              minLength='6'
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <input
              type='password'
              name='confirmpassword'
              value={confirmpassword}
              placeholder='Confirm Password'
              required
              minLength='6'
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </FormControl>

          <CheckBoxContainer>
            <div>
              <label>
                <input type='checkbox' className='filled-in' required />
                <span>
                  Please agree to
                  <CustomLink to='/termsandconditions'> terms</CustomLink> to
                  register
                </span>
              </label>
            </div>
          </CheckBoxContainer>

          <Button>Register</Button>
        </Form>
      </CustomCard>
    </Container>
  );
};

export default connect(null, { register })(Register);
