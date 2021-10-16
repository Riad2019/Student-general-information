import{AppBar ,Toolbar, makeStyles} from '@material-ui/core'

import { NavLink } from 'react-router-dom';
const styles=makeStyles({
    header: {background : '#111111'
 },
    tabs : {
       color: '#ffffff',
       textDecoration : 'none',
       marginRight : 20,
       fontSize : 20
    }
  

})

const NavBar = () => {
  
    const classes =styles();  
  
    return(
      

        <AppBar className={classes.header} position ="static">
            <Toolbar>
            <NavLink className={classes.tabs} to ="/" exact>StudentInformation</NavLink>
            <NavLink className={classes.tabs} to ="all"exact>All users</NavLink>
            <NavLink className={classes.tabs} to ="add" exact>Add user</NavLink>
            

            </Toolbar>
        </AppBar>
    
    )
}
export default NavBar;