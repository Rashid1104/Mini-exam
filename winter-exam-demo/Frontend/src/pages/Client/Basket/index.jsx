import React, { useContext } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { BasketContext } from '../../../components/context/BasketProvider'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

const Basket = () => {
  const { basket, ClearAllBasket, ClearAInBasket, IncToBasket, AllPrice, DecToBasket } = useContext(BasketContext)

  return (
    <div>
      <div className="container">
        <div className="col-4">
          <button className='btn' onClick={() => { ClearAllBasket() }}>Clear Basket</button>
        </div>
        <div className="col-4">
          <h1>All Price: <span>{AllPrice()}</span></h1>
        </div>
        <div className="row">
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Image</TableCell>
                  <TableCell align="left">Name</TableCell>
                  <TableCell align="left">Brand</TableCell>
                  <TableCell align="left">Price</TableCell>
                  <TableCell align="left">Increemnet</TableCell>
                  <TableCell align="left">Count</TableCell>
                  <TableCell align="left">Decreement</TableCell>
                  <TableCell align="left">AllPrice</TableCell>
                  <TableCell align="center">Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {basket ? basket.map((a) => (
                  <TableRow
                    key={a._id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="left">
                      <img src={a.img} alt={a.name} width={100} />
                    </TableCell>
                    <TableCell aalign="left">{a.name}</TableCell>
                    <TableCell align="left">{a.brand}</TableCell>
                    <TableCell align="left">{a.price}</TableCell>
                    <TableCell align="left"><button className='btn' onClick={() => { IncToBasket(a) }}><FaPlus /></button></TableCell>
                    <TableCell align="left">{a.quantity}</TableCell>
                    <TableCell align="left"><button className='btn' onClick={() => { DecToBasket(a) }}><FaMinus /></button></TableCell>
                    <TableCell align="left">$ {a.price * a.quantity}</TableCell>
                    <TableCell align="center"><button className='btn' onClick={() => {ClearAInBasket(a)}}><MdDelete /></button></TableCell>
                  </TableRow>
                )) : <h1>Basket is Empty</h1>}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  )
}

export default Basket