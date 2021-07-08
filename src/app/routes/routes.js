import { lazy } from "react";

const routes = [

    // admin
    { path:'/dashboard' , part:'admin' , exact:true , component: lazy(()=>import('./Admin/Dashboard')) },

    { path:'/dashboard/usersList' , part:'admin' , exact:true , component: lazy(()=>import('./Admin/User/UsersList')) },
    { path:'/dashboard/createUser' , part:'admin' , exact:true , component: lazy(()=>import('./Admin/User/CreateUser')) },
    
    { path:'/dashboard/announcementsList' , part:'admin' , exact:true , component: lazy(()=>import('./Admin/Announcement/AnnouncementList')) },
    { path:'/dashboard/createAnnouncement' , part:'admin' , exact:true , component: lazy(()=>import('./Admin/Announcement/CreateAnnouncemnet')) },

    { path:'/dashboard/coursesList' , part:'admin' , exact:true , component: lazy(()=>import('./Admin/Course/CourseLists')) },
    { path:'/dashboard/createCourse' , part:'admin' , exact:true , component: lazy(()=>import('./Admin/Course/CreateCourse')) },

    { path:'/dashboard/timeTable' , part:'admin' , exact:true , component: lazy(()=>import('./Admin/TimeTable')) },
    { path:'/dashboard/workingDays' , part:'admin' , exact:true , component: lazy(()=>import('./Admin/WorkingDays')) },
    { path:'/dashboard/profile' , part:'admin' , exact:true , component: lazy(()=>import('./Admin/Profile')) },
]

export default routes;