import React, { useState, useEffect } from 'react';
import { FaTrashAlt, FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import Swal from 'sweetalert2';


const Basket = () => {


  return (
    <div>
      <div className="container">
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
    </div>
  );
};

export default Basket;