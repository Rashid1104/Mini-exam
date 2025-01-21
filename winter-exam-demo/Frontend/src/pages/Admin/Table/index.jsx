import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2'

const TableArrives = () => {
    const [arrives, setArrives] = useState([])
    const DB_URL = "http://localhost:8080"

    const getArrives = async () => {
        try {
            const res = await axios(`${DB_URL}/arrives`)
            setArrives(res.data.arrives)
            console.log(res.data.arrives)
        } catch (error) {

        }
    }
    const DeleteArrives = async (id) => {
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
                const res = await axios.delete(`${DB_URL}/arrives/${id}`)
                await getArrives()
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }
    useEffect(() => {
        getArrives()

    }, [])

    return (
        <div>
            <div className="contaiber">
                <div className="row">
                    <TableContainer>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">Image</TableCell>
                                    <TableCell align="left">Name</TableCell>
                                    <TableCell align="left">Brand</TableCell>
                                    <TableCell align="left">Price</TableCell>
                                    <TableCell align="center">ACTIONS</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {arrives.map((a) => (
                                    <TableRow
                                        key={a._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="left">
                                            <img src={a.img} alt={a.name} width={100} />
                                        </TableCell>
                                        <TableCell aalign="left">{a.name}</TableCell>
                                        <TableCell align="left">{a.barnd}</TableCell>
                                        <TableCell align="left">$ {a.price}</TableCell>
                                        <TableCell align="center"><button className='btn' onClick={() => DeleteArrives(a._id)}><FaTrashAlt /></button></TableCell>
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

export default TableArrives