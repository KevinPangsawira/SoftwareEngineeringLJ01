import './Login.css'
function Login() {
    return (
        <div
            style={{
                height: '90vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <form className="loginFrame" style={{
                height: '25vw',
                width: '30vw',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
            }}>
                <p style={{ fontSize: '45px', textAlign: 'center' }}>Login</p>


                <div className='textbox'>
                    <label htmlFor="">Email</label>

                    <div>
                        <input type="email" name="email" placeholder='Enter Email' id="email" />
                        <hr />
                    </div>
                </div>

                <div className='textbox'>
                    <label htmlFor="">Password</label>

                    <div>
                        <input type="password" name="password" placeholder='Enter Password' id="password" />
                        <hr />
                    </div>
                </div>

                <div className='footerRegister'>
                    <button>Login</button>
                    <p>Forgot password</p>
                </div>
            </form>
        </div>
    );
}

export default Login;
