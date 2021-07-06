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
                title:'لیست کاربران',
                path:'/usersList'
            },
            {
                title:'ایجاد کاربران',
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
                title:'لیست اطلاعیه ها',
                path:'/announcementsList'
            },
            {
                title:'ایجاد اطلاعیه',
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
                title:'لیست دوره ها',
                path:'/coursesList'
            },
            {
                title:'ایجاد دوره',
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