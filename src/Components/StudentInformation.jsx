import HomeImage from '../Assets/Images/Student.jpg'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    size: {
        width: '1150px',
        height : '700px'
    }
})

const StudentInformation =()=>{
    const classes = useStyles();

    return(
        <div>
            
         <img className={classes.size} src={HomeImage} alt="student"/>
        </div>
       
    )

}
export default StudentInformation;