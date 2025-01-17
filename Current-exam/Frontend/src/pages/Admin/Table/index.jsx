import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { FaTrashCan } from "react-icons/fa6";
import Swal from 'sweetalert2'



const TableArrivalls = () => {
  const [arivalls, setArivalls] = useState([])
  const DB_URL = "http://localhost:8080"

  const getArivalls = async () => {
    try {
      const res = await axios(`${DB_URL}/arivalls`)
      setArivalls(res.data.Arivalls)
      console.log(res.data);

    } catch (error) {
      console.log(error.message);

    }
  }

  const DeleteArivalls = async (id) => {
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
        const res = await axios.delete(`${DB_URL}/arivalls/${id}`)
        await getArivalls()
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }
  useEffect(() => {
    getArivalls()
  }, [])
  return (
    <div>
      <div className="container">
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align='left'>Img</TableCell>
                <TableCell align="left">Nmae</TableCell>
                <TableCell align="left">price</TableCell>
                <TableCell align="center">ACTIONS</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {arivalls.length > 0 && arivalls.map((row) => (
                <TableRow
                  key={row._id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="left"><img src={row.img} alt={row.name} width={100} /></TableCell>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="left">{row.price}</TableCell>
                  <TableCell align="center"><button className='btn' onClick={() => DeleteArivalls(row._id)}><FaTrashCan /></button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

    </div>
  )
}

export default TableArrivalls