import { Box, Button, Modal, TextField } from '@mui/material';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'



const editModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
};

export default function Login() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [login, setlogin] = useState()
    const [value, setvalue] = useState()
    const [keyFetched, setkeyFetched] = useState()
    const navigate = useNavigate()


    const copyToClipboard = () => {
        navigator.clipboard.writeText(keyFetched)
    }



    const loginInpChange = (e) => {
        const { name, value } = e.target
        setlogin({ ...login, [name]: value })

    }




    const loginSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/api/login', login).then((result) => {
            console.log(result);
            setkeyFetched(result.data.key)
            handleOpen()
            localStorage.setItem('key', result.data.key)

        }).catch((error)=>{
            console.log(error.response.data.message);
            alert(error.response.data.message)
        })
    }
    return (
        <><Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <form encType="multipart/formdata" >
                <Box sx={editModal}>
                    <TextField
                        id="outlined-helperText"
                        value={keyFetched}
                        label="Api Key"
                        name='userName'
                        style={{ width: "100%" }}
                        onChange={(e) => { setvalue(e.target.value) }}
                    />
                    <Button
                        style={{ left: "75%", marginTop: "10px", height: "30px", backgroundColor: "rgba(27, 26, 26, 0.741)" }}
                        variant="contained"
                        component="label"
                        onClick={copyToClipboard}
                    >
                        <i class="fa-solid fa-copy ms-2 fs-5 clickToViewBtn"></i>
                        <span className=' clickToView'>click to copy the code</span>
                    </Button>

                    <Button
                        style={{ marginTop: "20px", width: "100%" }}
                        variant="contained"
                        component="label"
                        onClick={() => { navigate('/upload') }}
                    >
                        continue
                    </Button>
                </Box>
            </form>
        </Modal>
            <div className="container loginContainer mt-5">
                <section className="vh-100 sectionReg " >
                    <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                        <div className="container h-100">
                            <div className="row d-flex justify-content-center align-items-center h-100">
                                <div className="col-12 col-md-9 col-lg-7 col-xl-6 my-5">
                                    <div className="card" style={{ borderRadius: 15 }}>
                                        <div className="card-body p-5 ">
                                            <h2 className="text-uppercase text-center mb-5">
                                                Login account
                                            </h2>
                                            <form onSubmit={loginSubmit}>
                                                <div className="form-outline mb-4">
                                                    <input
                                                        type="email"
                                                        id="form3Example3cg"
                                                        className="form-control form-control-lg"
                                                        name='email'
                                                        onChange={loginInpChange}
                                                    />
                                                    <label className="form-label" htmlFor="form3Example3cg">
                                                        Email
                                                    </label>
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input
                                                        type="password"
                                                        id="form3Example4cg"
                                                        className="form-control form-control-lg"
                                                        name='Password'
                                                        onChange={loginInpChange}
                                                    />
                                                    <label className="form-label" htmlFor="form3Example4cg">
                                                        Password
                                                    </label>
                                                </div>
                                                <div className="d-flex justify-content-center">
                                                    <button
                                                        type="submit"
                                                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-whit w-100"
                                                    >
                                                        Login
                                                    </button>
                                                </div>
                                                <p className="text-center text-muted mt-5 mb-0">
                                                    Have already an account?{" "}
                                                    <Link to="/" className="fw-bold text-body">
                                                        <u>Register here</u>
                                                    </Link>
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
        </>
    )
}
