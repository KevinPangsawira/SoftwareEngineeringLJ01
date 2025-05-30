import './Register.css'
function Register() {
    return (
        <div
            style={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <form className="registerFrame" style={{
                height: '35vw',
                width: '30vw',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
            }}>
                <p style={{ fontSize: '45px', textAlign: 'center' }}>Sign Up</p>

                <div className='textbox'>
                    <label htmlFor="">Name</label>

                    <div>
                        <input type="text" name="name" placeholder='Enter Name' id="name" />
                        <hr />
                    </div>
                </div>

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
                    <button>Register</button>
                    <p>Already have an account? Login</p>
                </div>
            </form>
        </div>
    );
}

export default Register;
