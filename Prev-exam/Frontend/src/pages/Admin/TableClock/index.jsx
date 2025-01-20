import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from "axios"
import { FaTrash } from "react-icons/fa";
import Swal from 'sweetalert2'

const TableClocks = () => {
  const [clocks, setClocks] = useState([])
  const DB_URL = "http://localhost:8080"

  const getClocks = async () =>{
    try {
        const res = await axios(`${DB_URL}/clocks`)
        setClocks(res.data.clocks)
        console.log(res.data.clocks);
    } catch (error) {
        console.log(error);
        
    }
}

const DeleteClock = (id) =>{
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then(async (result) => {
    if (result.isConfirmed) {
      const res = await axios.delete(`${DB_URL}/clocks/${id}`)
     await getClocks()
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
    }
  });
}
useEffect(() => {
  getClocks()

}, [])
  return (
    <div>
      <div className="container">
        <h1 style={{textAlign: "center",fontSize: "3rem"}}>Table Clocks</h1>
      <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="center">ACTION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clocks.map((c) => (
            <TableRow
              key={c._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left"><img src={c.img} alt={c.name} width={100}/></TableCell>          
              <TableCell align="left">{c.name}</TableCell>
              <TableCell align="left">$ {c.price}</TableCell>
              <TableCell align="center"><button className='btn' style={{color: "red",fontSize: "1.7rem"}} onClick={()=>DeleteClock(c._id)}><FaTrash/></button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </div>
    </div>
  )
}

export default TableClocks