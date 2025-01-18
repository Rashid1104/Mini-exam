import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from "axios"
import Swal from 'sweetalert2'
import { FaTrashAlt } from "react-icons/fa";



const TableDish = () => {
  const [dishes, setDishes] = useState([])
  const DB_URL = "http://localhost:8080"

  const getDishes = async () =>{
    try {
      const res = await axios(`${DB_URL}/dishes`)
      setDishes(res.data.dishes)
      console.log(res.data.dishes);
      
    } catch (error) {
      console.log(error.message);
      
    }
  }

  const DeleteDish = async (id)=>{
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
        const res = await axios.delete(`${DB_URL}/dishes/${id}`)
        await getDishes()
        // if (res.status === "200") {
        //   ([...dishes].filter((q)=>q._id !== id))
        // }
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }
  useEffect(() => {
    getDishes()
  
  }, [])
  return (
    <div>
      <div className="container">
      <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">img</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">price</TableCell>
            <TableCell align="center">ACTION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dishes.map((dishes) => (
            <TableRow
              key={dishes._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">
                <img src={dishes.img} alt={dishes.name} width={100}/>
              </TableCell>
              <TableCell align="left">{dishes.name}</TableCell>
              <TableCell align="left">{dishes.description}</TableCell>
              <TableCell align="left">${dishes.price}</TableCell>
              <TableCell align="center">
                <button className='btn' onClick={()=> DeleteDish(dishes._id)}><FaTrashAlt/></button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </div>
    </div>
  )
}

export default TableDish