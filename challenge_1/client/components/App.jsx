import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: '',
            modalId: false,
            displayedQueries: {},
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
    }
    handleChange({ target }) {
        this.setState({
            [target.name]: target.value,
        })

    }
    handleSubmit(e) {
        const { searchTerm } = this.state;
        e.preventDefault();
        const url = `/events?_page=${1}&_limit=10&q=${searchTerm}`;
        fetch(url)
            .then(async function (response) {
                const reader = response.body.getReader();

                // infinite loop while the body is downloading
                while (true) {
                    // done is true for the last chunk
                    // value is Uint8Array of the chunk bytes
                    const { done, value } = await reader.read();

                    if (done) {
                        console.log('completed done')
                        console.log('done', done)
                        break;
                    }
                    console.log('value', value.length, 'bytes downloaded')

                }


                // this.setState({
                // displayedQueries: res,
                // modalId: !modalId,
                // search: '',
                //}))
                console.log(reader)
            })

    }
    // fetchKeyword(){
    //     const url = `/events?_page=${1}&_limit=10&q=${bear}`;
    //     fetch(url)
    //         .then(res=>this.setState({
    //             displayedQueries: res.data,
    //         }))
    // }

    render() {
        const { searchTerm } = this.state;
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Row>
                    <Form.Label column lg={2}>
                        Search through history ->
            </Form.Label>
                    <Form.Control
                        type="text"
                        name="searchTerm"
                        value={searchTerm}
                        onChange={this.handleChange} />
                </Form.Row>
                <Button variant="primary" type="submit">
                    Submit
          </Button>
            </Form>
        )
    }
}

export default App;