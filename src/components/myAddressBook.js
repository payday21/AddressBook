import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Todo = props => (
    <tr>
        <td>{props.todo.firstName}</td>
        <td>{props.todo.lastName}</td>
        <td>{props.todo.email}</td>
        <td>{props.todo.phone}</td>
        <td>{props.todo.image}</td>
        <td>
            <Link to={"/edit/"+props.todo._id}>Edit</Link>
        </td>
    </tr>
)

export default class MyAddressBook extends Component {

    constructor(props) {
        super(props);
        this.state = {todos: []};
    }
    

    componentDidMount() {
        axios.get('http://localhost:4000/todos/')
            .then(response => {
                this.setState({ todos: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    addressList() {
        return this.state.todos.map(function(currentTodo, i){
            return <Todo todo={currentTodo} key={i} />;
        })
    }
    render() {
        return (
            <div>
                <h3>Address Book</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Image</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.addressList() }
                    </tbody>
                </table>
            </div>
        )
    }
}