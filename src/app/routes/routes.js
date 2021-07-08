import { lazy } from "react";

const routes = [

    // admin
    { path:'/dashboard' , part:'admin' , exact:true , component: lazy(()=>import('./Admin/Dashboard')) },

    { path:'/dashboard/usersList' , part:'admin' , exact:true , component: lazy(()=>import('./Admin/User/UsersList')) },
    { path:'/dashboard/createUser' , part:'admin' , exact:true , component: lazy(()=>import('./Admin/User/CreateUser')) },
    
    { path:'/announcementsList' , part:'admin' , exact:true , component: lazy(()=>import('./Admin/Announcement/AnnouncementList')) },
    { path:'/createAnnouncement' , part:'admin' , exact:true , component: lazy(()=>import('./Admin/Announcement/CreateAnnouncemnet')) },

    { path:'/coursesList' , part:'admin' , exact:true , component: lazy(()=>import('./Admin/Course/CourseLists')) },
    { path:'/createCourse' , part:'admin' , exact:true , component: lazy(()=>import('./Admin/Course/CreateCourse')) },

    { path:'/timeTable' , part:'admin' , exact:true , component: lazy(()=>import('./Admin/TimeTable')) },
    { path:'/workingDays' , part:'admin' , exact:true , component: lazy(()=>import('./Admin/WorkingDays')) },
    { path:'/profile' , part:'admin' , exact:true , component: lazy(()=>import('./Admin/Profile')) },
]

export default routes;