
import { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, TableRow, TableBody, Button, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom';
import { getUsers, deleteUser } from '../service/api';
import Search from './Search';


const useStyles = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead: {
        '& > *': {
            fontSize: 20,
            background: '#000000',
            color: '#FFFFFF'
        }
    },
    row: {
        '& > *': {
            fontSize: 18
        }
    }
})



const AllUser=()=>{


    const classes = useStyles();
    const [users,setUsers] = useState([]);
    
    useEffect(()=>{
        getAllUsers();
    },[])

    const deleteUserData =async(id)=>{
        await deleteUser(id);
        getAllUsers();

    }

const getAllUsers = async()=>{
    let response = await getUsers()
    setUsers(response.data);
}


    return(
        <>
        <Search/>
        <Table className={classes.table}>
        <TableHead>
            <TableRow className={classes.thead}>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Subject</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell></TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {users.map((user) => (
                <TableRow className={classes.row} key={user.id}>
                    <TableCell>{user._id}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.subject}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                    <TableCell>
                        <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                        <Button color="secondary" variant="contained" onClick={() => deleteUserData(user._id)}>Delete</Button> 
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
    </>
    )

}
export default AllUser;