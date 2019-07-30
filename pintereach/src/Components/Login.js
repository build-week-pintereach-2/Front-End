import React from 'react';

export default Login
function Login() {
    return (
    <div className="form-group row">
        <div className="input">
            <label for="Username" className="label">
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
            </div>
            </div>
    )
}