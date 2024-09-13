import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Stylegroup = () => {
  const [groupstyles, setGruop] = useState([])
  useEffect(()=>{
        axios.get('http://localhost:3000/employee/stylegroup')
        .then(result=>{
            if(result.data.Status) {
              setGruop(result.data.Result);
            } else {
                alert(result.data.Error)
            }

        }).catch(err=>console.log(err))
  },[])
  return (
    <div className='px-5 mt-3'>
      <div className='d-flex justify-content-center'>
        <h3>Group Detail </h3>
      </div>
      <Link to="empldashboard/addgroup" className="btn btn-success"> New Group </Link> 
        <div className='mt-3'>  
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {
              groupstyles.map(c =>(
                <tr>
                  <td> {c.name}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}


export default Stylegroup