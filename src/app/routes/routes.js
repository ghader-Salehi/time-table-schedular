import { lazy } from 'react';

const routes = [
  // admin
  // {
  //   path: '/dashboard',
  //   part: 'admin',
  //   exact: true,
  //   component: lazy(() => import('./Admin/Dashboard')),
  // },

    // admin
    { path:'/dashboard' , part:'general' , exact:true , component: lazy(()=>import('./Admin/Dashboard')) },

  {
    path: '/dashboard/usersList',
    part: 'admin',
    exact: true,
    component: lazy(() => import('./Admin/User/UsersList')),
  },
  {
    path: '/dashboard/createUser',
    part: 'admin',
    exact: true,
    component: lazy(() => import('./Admin/User/CreateUser')),
  },

  {
    path: '/dashboard/announcementsList',
    part: 'admin',
    exact: true,
    component: lazy(() => import('./Admin/Announcement/AnnouncementList')),
  },
  {
    path: '/dashboard/createAnnouncement',
    part: 'admin',
    exact: true,
    component: lazy(() => import('./Admin/Announcement/CreateAnnouncemnet')),
  },

  {
    path: '/dashboard/coursesList',
    part: 'admin',
    exact: true,
    component: lazy(() => import('./Admin/Course/CourseLists')),
  },
  {
    path: '/dashboard/createCourse',
    part: 'admin',
    exact: true,
    component: lazy(() => import('./Admin/Course/CreateCourse')),
  },

  {
    path: '/dashboard/timeTable',
    part: 'admin',
    exact: true,
    component: lazy(() => import('./Admin/TimeTable')),
  },
  {
    path: '/dashboard/workingDays',
    part: 'admin',
    exact: true,
    component: lazy(() => import('./Admin/WorkingDays')),
  },
  {
    path: '/dashboard/profile',
    part: 'general',
    exact: true,
    component: lazy(() => import('./Profile')),
  },

  // master
  {
    path: '/dashboard/masterWorkingDays',
    part: 'master',
    exact: true,
    component: lazy(() => import('./Master/WorkingDays')),
  },
  {
    path: '/dashboard/masterTimeTable',
    part: 'master',
    exact: true,
    component: lazy(() => import('./Master/Timetable')),
  },
  {
    path: '/dashboard/masterAnnouncementlist',
    part: 'master',
    exact: true,
    component: lazy(() => import('./Master/Announcement/AnnouncementsList')),
  },
  {
    path: '/dashboard/masterCreateAnnouncement',
    part: 'master',
    exact: true,
    component: lazy(() => import('./Master/Announcement/CreateAnnouncement')),
  },
  {
    path: '/dashboard/masterCourseList',
    part: 'master',
    exact: true,
    component: lazy(() => import('./Master/Courses/CourseLists')),
  },
  {
    path: '/dashboard/masterChoosedCourses',
    part: 'master',
    exact: true,
    component: lazy(() => import('./Master/Courses/ChoosedCourses')),
  },

  //student

  {
    path: '/dashboard/studentTimeTable',
    part: 'student',
    exact: true,
    component: lazy(() => import('./Student/TimeTable')),
  },
  {
    path: '/dashboard/presentedCourses',
    part: 'student',
    exact: true,
    component: lazy(() => import('./Student/Courses/CoursesList')),
  },
  {
    path: '/dashboard/studentChoosedCourses',
    part: 'student',
    exact: true,
    component: lazy(() => import('./Student/Courses/ChoosedCourses')),
  },
  {
    path: '/dashboard/studentAnnouncements',
    part: 'student',
    exact: true,
    component: lazy(() => import('./Student/Announcements')),
  },
  {
    path: '/dashboard/changePassword',
    part: 'general',
    exact: true,
    component: lazy(() => import('./ChangePassword')),
  },




];

export default routes;
