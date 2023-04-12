import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import { Link } from 'react-router-dom';



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

export default function Upload() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const [upd, setupd] = useState({})
  const [keyData, setkeyData] = useState({})

  useEffect(() => {

    handleOpen()

  }, [])

  const apiCheck = () => {
    const apiKey = localStorage.getItem("key")
    if (apiKey == keyData) {
      handleClose()
    }
  }

  const inpSubmit = (e) => {
    e.preventDefault()
    if (upd) {
      const data = new FormData();
      const filename = upd.name
      data.append("name", filename)
      data.append("file", upd)
      axios.post("http://localhost:3001/api/upload", data).then((result) => {
        console.log(result);
        if (result) {
          alert("Upload successful")
        }
      }).catch((err) => {
        console.log(err);
      })
    }


  }


  return (
    <> <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <form encType="multipart/formdata" >
        <Box sx={editModal}>
          <TextField
            id="outlined-helperText"
            label="Api Key"
            name='userName'
            onChange={(e) => { setkeyData(e.target.value) }}
          />
          <Button style={{ marginLeft: "20px", marginTop: "20px" }} variant="contained" component="label" onClick={apiCheck} >
            Submit
          </Button>
          <Link to="/login" style={{ right: "20px", top: "140px", position: "absolute" }}>Login</Link>
        </Box>
      </form>
    </Modal>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <div className="uploadBox d-flex flex-column justify-content-center align-items-center">
              <i class="fa-regular fa-image uploadBoxImg text-dark"></i>
              <input
                className='form-control w-50 my-3'
                type="file"
                accept="image/*"
                multiple
                name='profImg'
                onChange={(e) => { setupd(e.target.files[0]) }}
              />
              <button
                className='btn btn-outline-success bg-success text-white mt-3 w-50'
                onClick={inpSubmit}
              >Upload image</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
