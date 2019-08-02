import React,{useState, Redirect} from 'react';
import { List } from 'semantic-ui-react';
import axios from 'axios';

export default Login
function Login(props) {
    const [member, setMember] = useState({});
    const [error, setError] = useState();
    function handleSubmit(event) {
        event.preventDefault();
        console.log (member);
        axios.get('https://pintereach2.herokuapp.com/login',
        {params: member })
        .then(response => {
            props.history.push('/');
        })
        .catch(error => {
            setError('Unable to login.');
            console.log(error);
        })
    }
    function handleChange(event) {
        const updatedMember = { ...member, [event.target.name]: event.target.value };
        setMember(updatedMember);
    }
    return (
        <form onSubmit={handleSubmit}>
        <List>
            <List.Item><h1>Login</h1></List.Item>
            <List.Item>{error}</List.Item>
            <List.Item><input
                    type="text"
                    name="username"
                    placeholder="Username"
                    autocomplete="username"
                    value={member.username}
                    onChange={handleChange}
            /></List.Item>
            <List.Item>
            <input
                type="text"
                name="email"
                placeholder="E-mail"
                autocomplete="username"
                value={member.email}
                onChange={handleChange}

            /></List.Item>
            <List.Item><input
                    type="password"
                    name="password"
                    placeholder="Password"
                    autocomplete="current-password"
                    value={member.password}
                    onChange={handleChange}
                /></List.Item>
            <List.Item><button type="submit" className="Submit">
                Submit 
            </button></List.Item>
            </List>
            </form>
    )
}