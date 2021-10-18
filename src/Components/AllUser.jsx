
import { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, TableRow, TableBody, Button, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom';
import { getUsers, deleteUser } from '../service/api';

import { Box, InputBase } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';  

const useStyles2 = makeStyles(theme => ({
    component: {
        background: '#F6F6F6',
        height: 43,
        display: 'flex',
        alignItems: 'center',
        transition: 'box-shadow .18s ease-out,background-color .25s ease-out'
    },
    search: {
        position: 'relative',
        borderRadius: 18,
        backgroundColor: '#FFFFFF',
        margin: '0 13px' ,
        width: '100%'
      },
      searchIcon: {
        color: '#919191',
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        display: 'flex',
        alignItems: 'center'
      },
      inputRoot: {
        width: '100%'
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: 65,
        fontSize: 14,
        height: 15,
        width: '100%'
    }
}));

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

    const classes1 = useStyles2();
    const classes = useStyles();
    const [users,setUsers] = useState([]);
    const [filtered ,setFilterd] = useState([]);
    const [result , setResult] = useState("");
    
    useEffect(()=>{
        
        getAllUsers();
    },[])


    useEffect(()=> {
        const results = filtered.filter(res=> res.name.toLowerCase().includes(result)

        ); 
        setUsers(results)
    } ,[result])



    const deleteUserData =async(id)=>{
        await deleteUser(id);
       
        getAllUsers();

    }

    const getAllUsers = async()=>{

        let response = await getUsers()
        setUsers(response.data);
        setFilterd(response.data);
    }
    
    const onChange =(e)=> {
        setResult(e.target.value);
    }


    return(
        <>
          <Box className={classes1.component}>
        <Box className={classes1.search}>
            <Box className={classes1.searchIcon}>
              <SearchIcon fontSize="small"/>
            </Box>
            <InputBase
              placeholder="Search by name."
              classes={{
                root: classes1.inputRoot,
                input: classes1.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={onChange}
            />
          </Box>
        </Box>

        
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