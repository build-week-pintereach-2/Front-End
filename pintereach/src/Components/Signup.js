import React, {useState} from 'react';
import { List } from 'semantic-ui-react';
import axios from 'axios';

export default function Signup(props) {
    const [member, setMember] = useState({});
    const [error, setError] = useState();
    function handleSubmit(event) {
        event.preventDefault();
        console.log (member);
        /*if (member.password === member.passwordConfirm)*/ {
            axios.post('https://pintereach2.herokuapp.com/register', member)        
            
            .then(response => {
                props.history.push('/');
            })
            .catch(error => {
                setError('Unable to register.');
                console.log(error);
            })
        } /*else {
            setError('Passwords do not match.');
        }*/
    }
    function handleChange(event) {
        const updatedMember = { ...member, [event.target.name]: event.target.value };
    setMember(updatedMember);
}
    return (
        <form onSubmit={handleSubmit}>
        <List>
            <List.Item><h1>Signup</h1></List.Item>
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
                    autocomplete="new-password"
                    value={member.password}
                    onChange={handleChange}
                /></List.Item>
            {/* <List.Item><input
                    type="password"
                    name="passwordConfirm"
                    placeholder="Confirm Password"
                    autocomplete="new-password"
                    value={member.passwordConfirm}
                    onChange={handleChange}
                /></List.Item> */}
            <List.Item><button type="submit" className="Submit">
                Submit 
            </button></List.Item>
        </List>
    </form>
    );
}
