import React from "react";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import UsersList from '../../../../../../components/Custom/UsersList'
import SearchBox from '../../../../../../components/Custom/UsersSearchBox'
import Pagination from "@material-ui/lab/Pagination";
import {getLlistOfUsers} from '../../../../../../api/Admin/Users'
import {STUDENT} from '../../../../../../constants/Roles'

const useStyles = makeStyles((theme) => ({
  font: {
    fontFamily: "iranYekan",
    color: "#8B8989",
  },
  container: {},
}));

const Index = ({index}) => {
  const classes = useStyles();

  const [users,setusers] =  React.useState([]);

  React.useEffect(()=>{
      getLlistOfUsers(STUDENT)
          .then(res=>{
                  console.log(res);
                  setusers(res.data.data.users)
          }).catch(err=>{

          })
  },[])

  return (
    <>
     
        <div className={clsx([classes.font], "d-flex flex-column")}>
          <div>
            <SearchBox index={index} />
          </div>
          <div>
            <UsersList index={index} content={users} />
          </div>
          <div className='d-flex justify-content-center'>
                    {/* <Pagination count={users.length} shape="rounded" variant="outlined" /> */}

            </div>
        </div>
      
    </>
  );
};

export default Index;
