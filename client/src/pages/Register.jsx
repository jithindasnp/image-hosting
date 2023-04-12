import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Register() {

    const [register, setregister] = useState()
    const navigate = useNavigate()



    const registerInpChange = (e) => {
        const { name, value } = e.target
        setregister({ ...register, [name]: value })

    }


    const registerSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/api/register', register).then((result) => {
            console.log(result);
            if (result) {
                navigate('/login')
            } else {
                navigate('/signup')
            }
        })
    }
    return (

        <div className="container regContainer my-5">
            <section className="vh-100 sectionReg " >
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6 my-5">
                                <div className="card" style={{ borderRadius: 15 }}>
                                    <div className="card-body p-5 ">
                                        <h2 className="text-uppercase text-center mb-5">
                                            Create an account
                                        </h2>
                                        <form onSubmit={registerSubmit}>
                                            <div className="form-outline mb-4">
                                                <input
                                                    type="text"
                                                    id="form3Example1cg"
                                                    className="form-control form-control-lg"
                                                    name='fullname'
                                                    onChange={registerInpChange}
                                                />
                                                <label className="form-label" htmlFor="form3Example1cg">
                                                    Full Name*
                                                </label>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <input
                                                    type="email"
                                                    id="form3Example3cg"
                                                    className="form-control form-control-lg"
                                                    name='email'
                                                    onChange={registerInpChange}
                                                />
                                                <label className="form-label" htmlFor="form3Example3cg">
                                                    Email*
                                                </label>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <input
                                                    type="password"
                                                    id="form3Example4cg"
                                                    className="form-control form-control-lg"
                                                    name='password'
                                                    onChange={registerInpChange}
                                                />
                                                <label className="form-label" id='passwordLabel' htmlFor="form3Example4cg">
                                                    Password*
                                                </label>
                                            </div>

                                            <div className="d-flex justify-content-center">
                                                <button
                                                    type="submit"
                                                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-white w-100 "
                                                >
                                                    Register
                                                </button>
                                            </div>
                                            <p className="text-center text-muted mt-5 mb-0">
                                                Have already an account?{" "}
                                                <a href="/login" className="fw-bold text-body">
                                                    <u>Login here</u>
                                                </a>
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
