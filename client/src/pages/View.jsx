import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function View() {
  const [viewData, setviewData] = useState([])

  useEffect(() => {

    axios.get('http://localhost:3001/api/upload/view').then(async (result) => {
      console.log(result);
      const views = await result.data.uploadImg

      await setviewData(views)

    }).catch((error) => {
      console.log(error);
    })

  }, [])

  return (
    <div className="container mt-5">
      <div className="row ">
        {Array.isArray(viewData) && viewData.map((items) =>
          <div className="col-md-4 col-sm-6 col-12 d-flex justify-content-center">
            <div className="card mb-3 me-2" style={{ maxWidth: '610px' }}>
              <div className="row p-3">
                <div className=" col">
                  <img src={require(`../images/${items.image}`)} width={200} height={200} alt="..." />
                </div>
              </div>
            </div>
          </div>)}


      </div>
    </div>
  )
}
