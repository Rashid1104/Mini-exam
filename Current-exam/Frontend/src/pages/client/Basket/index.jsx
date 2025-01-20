import React, { useContext } from 'react'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { BasketContext } from '../../../components/Context/BasketProvider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


const Basket = () => {
  const {basket,removeFromBasket,IncBasket,DecrBasket,ClearBasket,calPrice} = useContext(BasketContext)
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <button 
            className='btn'
            onClick={()=>{ClearBasket()}}>Clear Basket</button>
          </div>
          <div className="col-4">
            <h2>Total Price:  <span>{calPrice()}</span></h2>
           
          </div>
        </div>
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell>Name</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Increement</TableCell>
                <TableCell align="right">Count</TableCell>
                <TableCell align="right">Decreement</TableCell>
                <TableCell align="right">All Price</TableCell>
                <TableCell align="right">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {basket.map((ar) => (
                <TableRow
                  key={ar._id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <img src={ar.img} alt={ar.name} width={100} />
                  </TableCell>
                  <TableCell>{ar.name}</TableCell>
                  <TableCell align="right">{ar.price}</TableCell>
                  <TableCell align="right">
                    <button onClick={() => {IncBasket(ar)}} className='btn'>
                      <FaPlus />
                    </button>
                  </TableCell>
                  <TableCell align="right">{ar.quantity}</TableCell>
                  <TableCell align="right">
                    <button onClick={() =>{ DecrBasket(ar)}} className='btn'>
                      <FaMinus />
                    </button>
                  </TableCell>
                  <TableCell align="right">$ {ar.quantity * ar.price}</TableCell>
                  <TableCell align="right">
                    <button onClick={() =>{ removeFromBasket(ar)}} className='btn'>
                      DELETE
                    </button>
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

export default Basket