exports.createTimeTables = (courses, timeTableBells, masters) => {
  masters.forEach((master) => {
    master.courses.forEach((course) => {
      if (isValidCourse(course))
        selectTimeTable(course, timeTableBells, master);
    });
  });
};

isValidCourse = (course, courses) => {
  courses.forEach((curCourse) => {
    if (
      curCourse.title === course.title &&
      curCourse.unitsCount === course.unitsCount
    )
      return true;
  });
  return false;
}; //end isValidCourse

selectTimeTable = (course, timeTableBells, master) => {
  let timeTables = [];
  for (let i = 0; i < course.unitsCount; i++) {
    let selectTimeTable = false;
    master.timeTableBells.forEach(masterTimeTableBell => {
      if(masterTimeTableBell.selected) // take a look at this
        continue;
      
      timeTableBells.forEach(timeTableBell => {
        if(masterTimeTableBell.day.id === timeTableBell.day.id && masterTimeTableBell.bell.id === timeTableBell.bell.id) {
          let timeTable = {
            course: course.id,
            master: master.id
          }
          if(!isDuplicateClassInDay(master.timeTables, masterTimeTableBell, course)) {
            if(master.timeTables.length > 0) {
              // در صورتی اجرا میشود که درس تکراری در روز تدریس نشود
              timeTable.timeTableBell = timeTableBell;
              masterTimeTableBell.selected = true;
              timeTables.push(timeTable);
              master.timeTables.push(timeTable);
              selectTimeTable = true;
              break;
            }
            else {
              // remained from this line
            }
          }//end if(!isDuplicateClassInDay)
        }
      })
    })
  }
};


// بررسی اینکه در یک روز یک استاد نتواند یک درس را بیش از یک بار تدریس کند
isDuplicateClassInDay = (masterTimeTables, currentTimeTableBell, course) => {
  masterTimeTables.forEach(timeTable => {
    if(timeTable.course.title === course.title && timeTable.timeTableBell.day.dayOfWeek === currentTimeTableBell.day.dayOfWeek)
      return true;
  })
  return false;
}