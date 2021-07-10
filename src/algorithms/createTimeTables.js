const mongoose = require('mongoose');

let timeTables = [];

const createTimeTables = (courses, timeTableBells, masters) => {
  masters.forEach((master) => {
    master.courses.forEach((masterSelectedCourse) => {
      if (isValidCourse(masterSelectedCourse, courses)) {
        selectTimeTable(masterSelectedCourse, timeTableBells, master, courses);
      }
    });
  });

  return timeTables;
};

isValidCourse = (course, courses) => {
  let result = false;
  for (const curCourse of courses) {
    if (course.id == curCourse.id) {
      result = true;
      break;
    }
  }
  return result;
}; //end isValidCourse

selectTimeTable = (course, timeTableBells, master, courses) => {
  if (!master.hasOwnProperty('timeTables')) master.timeTables = [];
  for (let i = 0; i < course.unitsCount; i++) {
    let selectTimeTable = false;
    for (let j = 0; j < master.timeTableBells.length; j++) {
      const masterTimeTableBell = master.timeTableBells[j];
      if (
        masterTimeTableBell.hasOwnProperty('selected') &&
        masterTimeTableBell.selected
      )
        continue;

      for (const timeTableBell of timeTableBells) {
        if (masterTimeTableBell.id == timeTableBell.id) {
          let timeTable = {
            course: course,
            master: master,
            timeTableBells: [],
          };

          if (
            !isDuplicateClassInDay(
              master.timeTables, // master all timeTables
              masterTimeTableBell, // we want to set a class for this
              course,
              courses
            )
          ) {
            // در صورتی اجرا میشود که درس تکراری در روز تدریس نشود
            timeTable.timeTableBells.push(timeTableBell);
            masterTimeTableBell.selected = true;
            const newID = mongoose.Types.ObjectId();
            timeTable._id = newID;
            timeTables.push(timeTable);
            master.timeTables.push(timeTable._id); // later get ID from database and push to master's timeTables
            selectTimeTable = true;
            break;
          } //end if(!isDuplicateClassInDay)
        }
      }
      if (selectTimeTable == true) break;
    } //end forEach timeTableBells
  } //end for i from zero to unitsCount
};

// بررسی اینکه در یک روز یک استاد نتواند یک درس را بیش از یک بار تدریس کند
isDuplicateClassInDay = (masterTimeTables, currentTimeTableBell, course) => {
  let result = false;
  if (masterTimeTables.length == 0) return result;
  masterTimeTables.forEach((timeTable) => {
    const poppedTimeTable = findTimeTableByID(timeTable._id);
    if (!poppedTimeTable) return false;
    console.log('poppedTimeTable', poppedTimeTable);
    if (
      poppedTimeTable.course._id == course._id &&
      timeTableTimeTableBellsHaveSameDay(
        poppedTimeTable.timeTableBells,
        currentTimeTableBell
      )
    )
      result = true;
  });
  return result;
};

timeTableTimeTableBellsHaveSameDay = (timeTableBells, bell) => {
  let result = false;
  timeTableBells.forEach((timeTableBell) => {
    if (timeTableBell.day.dayOfWeek == bell.day.dayOfWeek) result = true;
  });
  return result;
};

findTimeTableByID = (id) => {
  for (const timeTable of timeTables) {
    if (timeTable._id == id) {
      return timeTable;
    }
  }
  return null;
};

module.exports = createTimeTables;
