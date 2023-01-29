import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import { useRef } from "react";
function Regestration() {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [contact, setcontact] = useState('')
    const image = useRef()
    function submit(e) {
        e.preventDefault()
        const data = new FormData()
        data.append('image', image.current.files[0])
        data.append('name', name)
        data.append('email', email)
        data.append('password', password)
        data.append('contact', contact)
        if (name == '') {
            alert('enter name')
        }
        else if (email == '') {
            alert('enter email')
        }
        else if (password == '') {
            alert('eter password')
        }
        else if (contact == '') {
            alert('enter contact')
        }
        else {
            axios.post('http://localhost/medical/regestration.php',
                data)
                .then(function (response) {
                    console.log(response);
                    setname(response.data.name)
                    setemail(response)
                    setcontact(response)
                    setpassword(response)
                    window.location.href = '/login'
                })
                .catch(function (error) {
                    console.log(error);
                }, [])
        }
    }
    return (
        <>
            <form encType="multipart/form-data" onSubmit={submit}>
                <div className="container register">
                    <div className="row">
                        <div className="col-auto">
                            Name :   <input type="text" onChange={(i) => setname(i.target.value)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-auto">
                            Email :  <input type="email" onChange={(i) => setemail(i.target.value)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-auto">
                            password : <input type="password" onChange={(i) => setpassword(i.target.value)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-auto">
                            contact : <input type="number" onChange={(i) => setcontact(i.target.value)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-auto">
                            image: <input type="file" name="image" ref={image} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-auto">
                            <input type="submit" name="submit" value='Log In' />
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
export default Regestration