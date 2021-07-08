import React, { useState } from 'react';
import {
  makeStyles,
  Collapse,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Paper,
  Typography,
} from '@material-ui/core';
import clsx from 'clsx';

import AdminPhoto from '../../styles/icnos/profile-admin.svg';
import blueCircle from '../../styles/icnos/rec-blue.svg';
import upArrowBlue from '../../styles/icnos/up-arrow-blue.svg';
import downArrowBlue from '../../styles/icnos/down-arrow-blue.svg';

import MasterPhoto from '../../styles/icnos/profile-master.svg';
import redCircle from '../../styles/icnos/rec-red.svg';
import upArrowRed from '../../styles/icnos/up-arrow-red.svg';
import downArrowRed from '../../styles/icnos/down-arrow-red.svg';

import StudentPhoto from '../../styles/icnos/profile-student.svg';
import GreenCircle from '../../styles/icnos/rec-green.svg';
import upArrowGreen from '../../styles/icnos/up-arrow-green.svg';
import downArrowGreen from '../../styles/icnos/down-arrow-green.svg';


import { MASTER, ADMIN, STUDENT, GENERAL } from '../../constants/Roles';

import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom'

const useStyle = makeStyles((theme) => ({
  sideBarcontainer: {
    width: '300px',
    maxHeight: '100vh',
    overflowY: 'auto',

    position: 'fixed',
    bottom: '0',
    top: '0',
    '&::-webkit-scrollbar': {
      width: '0.4em',
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#B7C3FF',
      outline: '0px solid slategrey',
    },
  },

  listItemStyle: {
    padding: '13px 15px',
    borderRadius: '10px',
    '&:hover': {},
  },

  fullWidth: {
    width: '100%',
  },
  font: {
    fontFamily: 'iranYekan ',

    '& span': {
      fontFamily: 'iranYekan !important',
      fontSize: '16px',
      fontWeight: 'normal',
    },
  },
  subItemText: {
    '& span': {
      fontFamily: 'iranYekan !important',
      fontSize: '14px',
      fontWeight: 'normal',
    },
  },
  subItemStyle: {
    padding: '8px 10px',
    borderRadius: '10px',
  },
}));

const Index = ({ content, role }) => {
  const classes = useStyle();
  const [activeItem, setActiveItem] = useState();
  const user = useSelector(({ auth }) => auth.user);
  const history = useHistory()

  const handleSelectItem = (item, index) => {
    if (item.type === 'dropDown')
      setActiveItem(
        activeItem === index + item.title ? undefined : index + item.title
      );
      history.push(item.path)
    console.log(item.type);
  };

  const handleIcons = (role) => {
    if (role == ADMIN)
      return (type) => {
        if (type === 'up') return <img src={upArrowBlue} />;
        else if (type === 'down') return <img src={downArrowBlue} />;
        else if (type === 'profile') return <img src={AdminPhoto} />;
        else if (type === 'circle') return <img src={blueCircle} />;
      };
    else if (role === MASTER)
      return (type) => {
        if (type === 'up') return <img src={upArrowRed} />;
        else if (type === 'down') return <img src={downArrowRed} />;
        else if (type === 'profile') return <img src={MasterPhoto} />;
        else if (type === 'circle') return <img src={redCircle} />;
      };
    else if (role === STUDENT)
      return (type) => {
        if (type === 'up') return <img src={upArrowGreen} />;
        else if (type === 'down') return <img src={downArrowGreen} />;
        else if (type === 'profile') return <img src={StudentPhoto} />;
        else if (type === 'circle') return <img src={GreenCircle} />;
      };
  };

  const handleuserRole  = (role)=>{
      if(role === ADMIN)
          return 'مدیر سیستم'
      else if(role === MASTER)
          return 'استاد'
      else if(role === STUDENT)
        return 'دانشجو'
  }

  return (
    <>
      <div className='d-flex'>
        <Paper className={clsx([classes.sideBarcontainer])}>
          <div className={clsx(['d-flex flex-column'])}>
            <div className='d-flex flex-column align-items-center mt-5 '>
              {handleIcons(role)('profile')}
              <div className='mt-4'>
                <Typography className={clsx([classes.font])}>
                  {user.firstname + " " + user.lastname}
                </Typography>
              </div>
              <div>
                <Typography className={clsx([classes.font])} variant='caption'>
                  {handleuserRole(user.rule)}
                </Typography>
              </div>
            </div>
            <List>
              {content.map((item, index) => (
                <div className=' pt-2 pb-2 pr-3 pl-3'>
                  <ListItem
                    className={classes.listItemStyle}
                    button
                    onClick={() => handleSelectItem(item, index)}
                  >
                    <ListItemIcon>{handleIcons(role)('circle')}</ListItemIcon>
                    <ListItemText
                      className={clsx([classes.font])}
                      primary={item.title}
                    />
                    {item.type == 'dropDown' && (
                      <ListItemIcon className={clsx(['pr-5'])}>
                        {activeItem === index + item.title
                          ? handleIcons(role)('up')
                          : handleIcons(role)('down')}
                      </ListItemIcon>
                    )}
                  </ListItem>
                  {item.type == 'dropDown' && (
                    <Collapse
                      in={activeItem === index + item.title}
                      timeout='auto'
                      unmountOnExit
                    >
                      <List>
                        {item.children.map((child, childInd) => (
                          <ListItem
                            className={classes.subItemStyle}
                            key={childInd}
                            button
                            onClick={()=>{ history.push('/dashboard'+child.path)}}
                          >
                            <ListItemText
                              className={clsx([classes.subItemText, 'pr-4'])}
                              primary={child.title}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>
                  )}
                </div>
              ))}
            </List>
          </div>
        </Paper>
      </div>
    </>
  );
};

export default Index;
