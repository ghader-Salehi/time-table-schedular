import { MASTER, ADMIN, STUDENT, GENERAL } from './Roles';

export const ITEMS = [
  {
    title: 'داشبورد',
    part: 'general',
    type: 'item',
    path: '',
  },
  // admin
  {
    title: 'کاربران',
    part: ADMIN,
    type: 'dropDown',
    children: [
      {
        title: 'لیست کاربران',
        path: '/usersList',
      },
      {
        title: 'ایجاد کاربران',
        path: '/createUser',
      },
    ],
  },
  {
    title: 'اطلاعیه ها',
    part: ADMIN,
    type: 'dropDown',
    children: [
      {
        title: 'لیست اطلاعیه ها',
        path: '/announcementsList',
      },
      {
        title: 'ایجاد اطلاعیه',
        path: '/createAnnouncement',
      },
    ],
  },
  {
    title: 'دوره ها',
    part: ADMIN,
    type: 'dropDown',
    children: [
      {
        title: 'لیست دوره ها',
        path: '/coursesList',
      },
      {
        title: 'ایجاد دوره',
        path: '/createCourse',
      },
    ],
  },
  {
    title: 'جدول زمانی',
    part: ADMIN,
    type: 'item',
    path: '/timeTable',
  },
  {
    title: 'روز های کاری',
    part: ADMIN,
    type: 'item',
    path: '/workingDays',
  },

  // master
  {
    title: 'برنامه هفتگی',
    part: 'master',
    type: 'dropDown',
    children: [
      {
        title: 'جدول زمانی',
        path: '/masterTimeTable',
      },
      {
        title: 'روزهای کاری',
        path: '/masterWorkingDays',
      },
    ],
  },
  {
    title: 'اطلاعیه ها',
    part: 'master',
    type: 'dropDown',
    children: [
      {
        title: 'لیست  اطلاعیه ها',
        path: '/masterAnnouncementlist',
      },
      {
        title: 'ایجاد اطلاعیه ',
        path: '/masterCreateAnnouncement',
      },
    ],
  },
  {
    title: ' دوره ها',
    part: 'master',
    type: 'dropDown',
    children: [
      {
        title: 'لیست  دوره ها',
        path: '/masterCourseList',
      },
      {
        title: 'واحد های انتخابی ',
        path: '/masterChoosedCourses',
      },
    ],
  },

  // student
  {
    title: 'برنامه هفتگی',
    part: 'student',
    type: 'item',
    path: '/studentTimeTable',
  },
  {
    title: ' دوره ها',
    part: 'student',
    type: 'dropDown',
    children: [
      {
        title: 'دروس ارائه شده',
        path: '/presentedCourses',
      },
      {
        title: 'واحد های انتخابی ',
        path: '/studentChoosedCourses',
      },
    ],
  },
  {
    title: 'اطلاعیه ها',
    part: 'student',
    type: 'item',
    path: '/studentAnnouncements',
  },

  ,
  {
    title: 'پروفایل',
    part: 'general',
    type: 'item',
    path: '/profile',
  },
];
