import React from "react";

function Login() {
    const handleSubmit = () => {
        // * Use The already set states to call the API and redirect on success ... 
    };

    return (
        <>
            <div style={{ height: "80vh" }} className="container d-flex justify-content-center align-items-center">
                <div style={{ border: "1px solid gray", padding: "4rem", boxShadow: "0 0 8px rgb(177, 177, 177)" }} className="col-7">
                    <center>
                        <h2>Login</h2>
                    </center>
                    <center>
                        <div className="rounded-pill" style={{ marginBottom: "0.6rem", border: "1px red solid", padding: "0.2rem", color: "rgb(246, 33, 33)" }}>
                            Invalid login credentials
                        </div>
                    </center>
                    <form onSubmit={handleSubmit}>
                        <label for="username">username</label>
                        <input id="username" style={{ marginBottom: "1rem" }} className="form-control" type="text" name="username" placeholder="Username" required />

                        <label for="password">password</label>
                        <input id="password" style={{ marginBottom: "1rem" }} className="form-control" type="password" name="password" placeholder="Password" required />

                        <p style={{ float: "right" }}>
                            Don't have account?{" "}
                            <span>
                                <a href="register.html">Register</a>
                            </span>
                        </p>
                        <button className="btn btn-primary btn-sm" type="submit">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;
