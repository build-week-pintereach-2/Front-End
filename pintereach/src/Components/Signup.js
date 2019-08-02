import React, {useState} from 'react';


export default function Signup() {
    const [member, setMember] = useState({});

    function handleSubmit(event) {
        console.log (member);
        event.preventDefault()
    }
    function handleChange(event) {
        const updatedMember = { ...member, [event.target.name]: event.target.value };
    setMember(updatedMember);
}
        return (
            <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Signup</legend>
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
            <label for="email" className="label">
                E-mail
                <input
                    type="text"
                    name="email"
                    placeholder="E-mail"
                    value={member.email}
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
            <label for="password_confirmation" className="label">
                Confirm Password
                <input
                    type="password"
                    name="password_confirmmation"
                    placeholder="Confirm Password"
                    value={member.passwordConfirm}
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
    );
}
