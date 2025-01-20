import React, { useContext } from 'react'
import { BasketContext } from '../../../components/context/BasketProvider'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { MdOutlineDelete } from "react-icons/md";

const Basket = () => {
  const {basket,IncToBasket,DecToBasket,DeleteAllBasket,ClearInBasket,AllPrice} = useContext(BasketContext)
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-4">
          <button className='btn' onClick={()=> {DeleteAllBasket()}}>Clear Basket</button>
          <h2>Total Price: <span>{AllPrice()}</span></h2>
          </div>
        <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Image</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Increement</TableCell>
            <TableCell align="left">Count</TableCell>
            <TableCell align="left">Decreement</TableCell>
            <TableCell align="left">ALL Price</TableCell>
            <TableCell align="center">DELETE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {basket.map((c) => (
            <TableRow
              key={c._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">
               <img src= {c.img} alt= {c.name} width={100}/>
              </TableCell>
              <TableCell align="left">{c.name}</TableCell>
              <TableCell align="left">$ {c.price}</TableCell>
              <TableCell align="left"><button className='btn' onClick={()=>{IncToBasket(c)}}><FaPlus/></button></TableCell>
              <TableCell align="left">{c.quantity}</TableCell>
              <TableCell align="left"><button className='btn' onClick={()=>{DecToBasket(c)}}><FaMinus/></button></TableCell>
              <TableCell align="left">{c.quantity * c.price}</TableCell>
              <TableCell align="left"><button className='btn' onClick={()=> {ClearInBasket(c)}}><MdOutlineDelete/></button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
      </div>
    </div>
  )
}

export default Basket