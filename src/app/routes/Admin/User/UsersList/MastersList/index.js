import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import UsersList from '../../../../../../components/Custom/UsersList'
import SearchBox from '../../../../../../components/Custom/UsersSearchBox'
import Pagination from "@material-ui/lab/Pagination";
import {getLlistOfUsers} from '../../../../../../api/Admin/Users'
import {MASTER} from '../../../../../../constants/Roles'

const useStyles = makeStyles((theme) => ({

    font: {
      fontFamily: "iranYekan",
      color: "#8B8989",
    },
  
  }));

const Index=({index,modalFunction})=> {
    const classes = useStyles();
    const [users,setusers] =  useState([]);

    React.useEffect(()=>{
        getLlistOfUsers(MASTER)
            .then(res=>{
                    console.log(res);
                    setusers(res.data.data.users)
            }).catch(err=>{

            })
    },[])

    return (
        <>
            <div className={clsx([classes.font],'d-flex flex-column')}>
                
                <div >

                    <SearchBox index={index} />
                </div>
                <div>
                    
                    <UsersList modal={modalFunction}  index={index} content={users} />
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                    <Pagination count={1} shape="rounded" variant="outlined" />

            </div>
        </>
    )
}

export default Index
