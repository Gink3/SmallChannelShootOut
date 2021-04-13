import React, {useContext} from 'react';
import AuthContext from "../context/authcontext.js"
import { Button, Container, Row, Col, Form, Toast, InputGroup } from "react-bootstrap";
import "../style/talk.scss";
import {AiOutlinePlus} from "react-icons/ai";
/* import AdSense from 'react-adsense';  */
import Thread from './thread';
import {useParams} from "react-router-dom";
 

function Talk() {
  console.log(useParams());
  
  return (
    <>

      <Container fluid>
        <br />
        
        <Row className="justify-content-center ml-md-2 ">
          <Col md={7}>
            
          <Button variant="" style={{width: '100%'}} href="/createthread" className="plusfix"> 
          <Form.Row >
                    <Form.Group as={Col} className="plus" href="/createthread">
                        <InputGroup  >
                            <InputGroup.Prepend >
                                <InputGroup.Text  className="plus">
                                <AiOutlinePlus size="3em" />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                              readOnly
                                type="text"
                                className="create-thread"
                                placeholder="Create a thread . ."
                                href="/createthread"
                            />
                        </InputGroup>
                    </Form.Group>
                </Form.Row>

</Button>

        <br></br>
            <div className="">
              <Thread />
              
            </div>
          </Col>
          <Col md={3}>
            Ads:
            {/* <Adsense
  client="ca-pub-7640562161899788"
  slot="7259870550"
/> */}
            {/* <br/>
  sdLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
   */}
          </Col>
        </Row>
      </Container>
   
    </>
  );
}
export default Talk;
