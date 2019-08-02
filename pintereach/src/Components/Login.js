import React,{useState} from 'react';


export default Login
function Login() {
    const [member, setMember] = useState({});
    function handleSubmit(event) {
        console.log (member);
    }
    function handleChange(event) {
        const updatedMember = { ...member, [event.target.name]: event.target.value };
        setMember(updatedMember);
        }
    return (
        <form onSubmit={handleSubmit}>
        <fieldset>
            <legend>Login</legend>
    <div className="form-group row">
        <div className="input">
            <label for="username" className="label">
                Username
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={member.username}
                    onChange={handleChange}

            />
            </label>

<label for="password" className="label">
                Password
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={member.password}
                    onChange={handleChange}

                />
                
            </label>
            <button type="submit" className="Submit">
                Submit 
            </button>
            
            </div>
            </div>
            </fieldset>
            </form>
    )
}