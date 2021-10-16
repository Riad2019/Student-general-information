import { useState } from 'react';
import { addUser } from '../service/api';
import { useHistory } from "react-router-dom";
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';

const initialValue = {
    name: '',
    subject: '',
    email: '',
    phone: ''
}

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})





const AddUser=()=>{
    const classes = useStyles();
    const [user, setUser] = useState(initialValue);
    const { name, subject, email, phone } = user;
    let history = useHistory();


const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
        console.log(user);
    }

const addUserDetails = async () =>{
    await addUser(user);
    history.push('./all');
}

    return(
        <FormGroup className={classes.container}>
        <Typography variant="h4">Add User</Typography>
        <FormControl>
            <InputLabel htmlFor="my-input">Name</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
        </FormControl>
        <FormControl>
            <InputLabel htmlFor="my-input">Subject</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name='subject' value={subject} id="my-input" />
        </FormControl>
        <FormControl>
            <InputLabel htmlFor="my-input">Email</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input"/>
        </FormControl>
        <FormControl>
            <InputLabel htmlFor="my-input">Phone</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" />
        </FormControl>
        <FormControl>
            <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Add User</Button>
        </FormControl>
    </FormGroup>


    )
}
export default AddUser;