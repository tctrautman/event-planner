import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
    margin: 0 auto;
    margin-top: 30px;
    text-align: center;
    border: 1px solid ${props => props.theme.darkGrey};
    background: white;
    border-radius: 25px;
    width: 60%;

    h3 {
        color: ${props => props.theme.textColor};
        font-size: 25px;
        margin-top: 13px;
    }

    label {
        color: ${props => props.theme.textColor};
        font-weight: 500;
    }

    input {
        margin-right: 20px;
    }

    .name {
        margin-left: 20px;
    }

    form {
        margin: 13px;
        margin-bottom: 20px;
    }
`;

class Form extends React.Component {
    state = {
        name: '',
        start: '',
        end: ''
    }

    handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        const event = {
            id: this.props.events.length + 1,
            start: this.state.start,
            end: this.state.end,
            name: this.state.name
        };

        this.props.addEvent(event);
        this.setState({name: '', start: '', end: ''})
    }

    render() {
        return (
            <FormContainer>
                <h3>Add an item</h3>
                <form onSubmit={this.handleSubmit}>
                    <label className="name">
                        Event title:
                        <input
                            type="text"
                            name="name"
                            required={true}
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Start Date: 
                        <input
                            type="date"
                            name="start"
                            required={true}
                            value={this.state.start}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        End Date:
                        <input
                            type="date"
                            name="end"
                            required={true}
                            value={this.state.end}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Submit
                        <input type="submit" name="submit" />
                    </label>
                </form>
            </FormContainer>
        )
    }   
}
    
export default Form;
