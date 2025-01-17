import React, { useEffect, useState } from 'react'
import { FaTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2'

import axios from "axios"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';

const TableClothers = () => {
  const [clothers, setClothers] = useState([])
  const [search,setSearch] = useState('')
  const DB_URL = "http://localhost:8080"

  const getClothers = async () => {
    const res = await axios(`${DB_URL}/clothers`)
    setClothers(res.data.clothers)
    console.log(res.data.clothers);

  }


  const DeleteClother = async (id) => {

    // const res =await axios.delete(`${DB_URL}clothers/${id}`)
    // console.log(res);
    // if (res.status === 200) {
    //   setClothers([...clothers].filter((q) => q._id !== id))

    // }
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
        const res = await axios.delete(`${DB_URL}/clothers/${id}`)
        console.log(res);
        if (res.status === 200) {
          setClothers([...clothers].filter((q) => q._id !== id))

        }
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }
  useEffect(() => {
    getClothers()
  }, [])

  return (
    <>
      <div className="container">
        <h1>Table Clothers</h1>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">imageUrl</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Description</TableCell>
              <TableCell align="left">price</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clothers.length > 0 && clothers.map((c) => {
              return <TableRow key={c._id} >
                <TableCell align="left"><img src={c.imageUrl} alt="" width={100} /></TableCell>
                <TableCell align="left">{c.name}</TableCell>
                <TableCell align="left">{c.description}</TableCell>
                <TableCell align="left">{c.price}</TableCell>
                <TableCell align="center"> <button className='btn' onClick={() => DeleteClother(c._id)}><FaTrashAlt /></button></TableCell>


              </TableRow>
            })}
          </TableBody>
        </Table>
      </div>
      {/* <table className='table'>
        <thead>
          <th>imageUrl</th>
          <th>Name</th>
          <th>Description</th>
          <th>price</th>
          <th>Actions</th>
        </thead>

        {clothers.length > 0 && clothers.map((c) => {
          return <tbody key={c._id}>
            <td><img src={c.imageUrl} alt="" width={100} /></td>
            <td>{c.name}</td>
            <td>{c.description}</td>
            <td>{c.price}</td>
            <td> <button className='btn' onClick={() => DeleteClother(c._id)}><FaTrashAlt /></button></td>
          </tbody>
        })}

      </table> */}


    </>
  )
}

export default TableClothers