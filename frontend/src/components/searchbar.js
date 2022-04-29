import React from 'react';
import { Form, Row ,Col, Container} from 'react-bootstrap';

class Searchbar extends React.Component {
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        
        return (
            <>
            <Container fluid>
                <Row className="justify-content-md-center ">
                    <Col md={5}>
                        <Form className='searchBarForm' onSubmit={this.handleSubmit}>
                            <Form.Control className='searchBarInput' onChange={this.handleChange} name='video-search' type="text" placeholder="Search..."/>
                        </Form>
                    </Col>
                </Row>
            </Container>
            </>
        )
    }
}
export default Searchbar;