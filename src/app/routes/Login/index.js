import React from 'react'
import { makeStyles , Typography ,useMediaQuery} from '@material-ui/core';
import './index.scss'
import clsx from 'clsx';
import LoginForm from '../../../components/Forms/Login/LoginForm'

const useStyle  = makeStyles(theme =>({
    fullwidth : {
        width : "100%",
    },
    containerStyle:{
        [theme.breakpoints.down('lg')]: {
            width:'400px'
          },
        [theme.breakpoints.up('lg')]: {
            width:'390px'
          },
          [theme.breakpoints.up('xl')]: {
            width:'450px'
          },
    },
    containerRadius : {
        borderRadius: '20px'
    },
    header:{
        backgroundColor:'#714EFF',
        borderRadius: '20px 20px 0 0',
        color:'#ffffff'
    },
    font:{
        fontFamily:'iranYekan'
    }
}));

const Index = () => {
    const classes = useStyle()
    return (
        <>
            <div className='d-flex justify-content-center  pt-5 '>
                    <div className={clsx(['row p-3 p-sm-0 justify-content-center mt-5',classes.fullwidth])}>

                        <div className={clsx([' bg-white shadow pr-0 pl-0'],classes.containerRadius,classes.containerStyle)}>
                            <div className={clsx([classes.header,'p-3 d-flex justify-content-center mb-2'])}> 
                              <Typography className={classes.font}>
                                  ورود به پنل کاریری
                              </Typography>
                         
                            </div>

                            <LoginForm/>
                           
                          
                        </div>
                        
                    </div>
            </div>
        </>
    )
}

export default Index
