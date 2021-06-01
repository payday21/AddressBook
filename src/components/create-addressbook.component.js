import React, { Component } from 'react';
import axios from 'axios';

export default class CreateAddress extends Component {

    constructor(props) {
        super(props);

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangelastName = this.onChangelastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            image: '',
        }
    }

    onChangeFirstName(e) {
        this.setState({
            firstName: e.target.value
        });
    }

    onChangelastName(e) {
        this.setState({
            lastName: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }
    onChangePhone(e) {
        this.setState({
            phone: e.target.value
        });
    }
    onChangeImage(e) {
        this.setState({
            image: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`First Name: ${this.state.firstName}`);
        console.log(`Last Name: ${this.state.lastName}`);
        console.log(`Email: ${this.state.email}`);
        console.log(`Phone: ${this.state.phone}`);
        console.log(`Image: ${this.state.image}`);

        const newAddress = {

        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        phone: this.state.phone,
        image: this.state.image

        };

        axios.post('http://localhost:4000/todos/add', newAddress)
            .then(res => console.log(res.data));
        
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            image: '',
            
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New Address</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>FirstName: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.firstName}
                                onChange={this.onChangeFirstName}
                                />
                    </div>
                    <div className="form-group">
                        <label>LastName: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.lastName}
                                onChange={this.onChangelastName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                                />
                    </div>
                    <div className="form-group">
                        <label>Phone: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.phone}
                                onChange={this.onChangePhone}
                                />
                    </div>

                    <div className="form-group">
                        <label>Image: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.image}
                                onChange={this.onChangeImage}
                                />
                    </div>
                    

                    <div className="form-group">
                        <input type="submit" value="Create Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}