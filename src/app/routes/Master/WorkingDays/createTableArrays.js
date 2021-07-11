import { styles } from './styles/utilityStyles';
export const createTableArray = (timeTableBells, timeTableBellsList) => {
  let columns = [];
  for (let i = 0; i < 7; i++) {
    columns.push([])
    for (let j = 0; j < 7; j++) {
      columns[i].push({ label: 'خالی', style: styles.grayed });
    }
  }
  let columnExists = Array(7).fill(true);
  columnExists[0] = true;
  columns[0] = [{ label: '-', style: styles.normal }, { label: 'شنبه', style: styles.normal }, { label: 'یکشنبه', style: styles.normal }, { label: 'دوشنبه', style: styles.normal }, { label: 'سه شنبه', style: styles.normal }, { label: 'چهارشنبه', style: styles.normal }, { label: 'پنجشنبه', style: styles.normal }];
  columns[1][0] = { label: '8-10', style: styles.normal };
  columns[2][0] = { label: '10-12', style: styles.normal };
  columns[3][0] = { label: '12-14', style: styles.normal };
  columns[4][0] = { label: '14-16', style: styles.normal };
  columns[5][0] = { label: '16-18', style: styles.normal };
  columns[6][0] = { label: '18-20', style: styles.normal };
  for (let i = 1; i < columns.length; i++) {
    const bellIndex = i - 1;
    for (let j = 1; j < columns[i].length; j++) {
      const dayIndex = j - 1;
      timeTableBells.forEach(timeTableBell => {
        if (dayIndex == timeTableBell.day.dayOfWeek && bellIndex == timeTableBell.bell.bellOfDay) {
          columns[i][j] = { label: 'انتخاب شده', style: styles.selected };
        }
      })
      const itemID = getIdByDayBell(bellIndex, dayIndex, timeTableBellsList);
      if (itemID == null) columnExists[i] = false;
      columns[i][j].id = itemID;
    }
  }//end for
  return { columns, columnExists };
}//end createTableArray

const getIdByDayBell = (bell, day, timeTableBellsList) => {
  for (let i = 0; i < timeTableBellsList.length; i++) {
    if (timeTableBellsList[i].day.dayOfWeek == day && timeTableBellsList[i].bell.bellOfDay == bell) {
      return timeTableBellsList[i]._id;
    }
  }
  return null;
}