import React from 'react'
import { makeStyles,IconButton ,Menu,MenuItem } from '@material-ui/core'
import clsx from 'clsx'
import menu from "../../styles/icnos/icons8-menu-vertical-96 (1).svg"


const useStyle  = makeStyles((theme)=>({
    fullWidth:{
        width:'100%',
    },
    container:{
        height:'53px',
        backgroundColor:'#F1EFF5'
    },
    font:{
        fontFamily:'iranYekan'
    }

}))

const Header = () => {
    const classes  =  useStyle();
    const [anchorEl, setAnchorEl] = React.useState(null);


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };

    return (
        <>
            <div className={clsx([classes.fullWidth,'d-flex justify-content-between align-items-center',classes.container])}>
                   <div className='mr-3 d-flex '>
                       <div className='ml-3'>
                       تاریخ امروز  :
                       </div>
                       <div>
                            1231321
                       </div>
                   </div>
                  
                   <div className={clsx(['ml-2',])}>
                       <IconButton  aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                            <img className={clsx([classes.buttonStyle])} style={{width:'25px',height:'25px'}} src={menu} />
                       </IconButton >
                       <Menu
                          
                          id="simple-menu"
                          anchorEl={anchorEl}
                          keepMounted
                          open={Boolean(anchorEl)}
                          onClose={handleClose}


                            >
                            <MenuItem className={clsx([classes.font,'text-center'])} onClick={handleClose}>تغییر رمز عبور</MenuItem>
                            <MenuItem className={clsx([classes.font,'text-center'])} onClick={handleClose}>خروج</MenuItem>
                        </Menu>
                      
                    </div>
                
            </div>
        </>
    )
}

export default Header
