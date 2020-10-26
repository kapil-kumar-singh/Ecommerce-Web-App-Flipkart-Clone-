import React, { useState, useEffect } from 'react'
import Layout from "../../components/layout"
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import Input from "../../components/UI/Input";
import { login } from '../../actions';
import { useDispatch, useSelector } from "react-redux";
import { Redirect }  from "react-router-dom";
import { isUserLoggedIn} from "../../actions/auth_action"

/**
* @author
* @function Signin
**/

const Signin = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPasswort] = useState('');
  const [error, setError] = useState('');
  const auth = useSelector(state => state.auth);

  const dispatch = useDispatch();

  useEffect(()=>{
    if(!auth.authenticate){
      dispatch(isUserLoggedIn());
    }
  }, []);

  const userLogin = (e) =>{

    e.preventDefault();

    const user = {
      email, password
    };
    dispatch(login(user));
  }

  if(auth.authenticate){
    return <Redirect to={'/'} />
  }

  return (
    <Layout>
      <Container>
        <Row style={{marginTop: '50px'}}>
          <Col md={{span: 6, offset: 3}}>
            <Form onSubmit={userLogin}>
            <Input
              label="Email address"
              placeholder="Enter Email"
              value={email}
              type="email"
              onChange={(e)=> setEmail(e.target.value)}
            />

            <Input
              label="Password"
              placeholder="Password"
              value={password}
              type="password"
              onChange={(e) => setPasswort(e.target.value)}
            />
              <Button variant="primary" type="submit">
                Submit
             </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  )

}

export default Signin
