export const ITEMS = [
    {
        title:'داشبورد',
        part:'general',
        type : 'item',
        path:'/dashboard'
    },
    {
        title:'کاربران',
        part:'admin',
        type : 'dropDown',
        children:[
            {
                name:'لیست کاربران',
                path:'/usersList'
            },
            {
                name:'ایجاد کاربران',
                path:'/createUser'
            }
        ]
    },
    {
        title:'اطلاعیه ها',
        part:'admin',
        type : 'dropDown',
        children:[
            {
                name:'لیست اطلاعیه ها',
                path:'/announcementsList'
            },
            {
                name:'ایجاد اطلاعیه',
                path:'/createAnnouncement'
            }
        ]
    },
    {
        title:'دوره ها',
        part:'admin',
        type : 'dropDown',
        children:[
            {
                name:'لیست دوره ها',
                path:'/coursesList'
            },
            {
                name:'ایجاد دوره',
                path:'/createCourse'
            }
        ]
    },
    {
        title:'جدول زمانی',
        part:'admin',
        type : 'item',
        path:'/timeTable'
    },
    {
        title:'روز های کاری',
        part:'admin',
        type : 'item',
        path:'/workingDays'
    },
    {
        title:'پروفایل',
        part:'general',
        type : 'item',
        path:'/profile'
    }

]