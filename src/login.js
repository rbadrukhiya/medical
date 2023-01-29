import { useState } from "react"
import axios from "axios";
function Login() {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    function submit() {
        axios.post('http://localhost/medical/insert.php', {
            email: email,
            password: password
        })
            .then(function (response) {
                console.log(response);
                setemail(response)
                setpassword(response)
                console.log(email);
                console.log(password);


                if (email == '') {
                    alert('enter email')
                }
                else if (password == '') {
                    alert('enter password')
                }
                else {
                    if (email == response.data.email && password == response.data.password) {
                        window.location.href = '/home'
                        setemail('')
                        setpassword('')
                    }
                    else {
                        alert('check your email');
                        window.location.reload()
                    }
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    return (
        <>
            <center>
                <div className="login pt-5">
                    <div className="container">
                        <div className="form">
                            <div className="row row-cols-sm-1 justify-content-between">
                                <div className="col-auto">
                                    <div className="email">
                                        Email :&nbsp;&nbsp; &nbsp;<input type="email" onChange={(i) => setemail(i.target.value)} placeholder='Enter Email...' className='ms-4 mb-4 rounded-3 p-1 ' />
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className="password">
                                        Password : &nbsp;<input type="password" onChange={(i) => setpassword(i.target.value)} placeholder='Enter Password...' className='rounded-3 p-1' />
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className="submit">
                                        <input type="submit" value='sign in' onClick={() => submit()}></input>
                                        <a href="/regestration"><input type="button" value="Sign Up" className="ms-3"/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </center>
        </>
    )
}
export default Login