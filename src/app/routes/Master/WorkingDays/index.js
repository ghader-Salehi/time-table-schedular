import { useEffect, useState } from 'react';
import Column from './Column';
import OrangeColumn from './OrangeColumn';
import { getMasterTimeTableBells } from '../../../../api/Admin/Users';
import { chooseTimeTableBell, getTimeTableBells } from '../../../../api/Admin/TimeTableBell';
import { createTableArray } from './createTableArrays';
import './styles/index.css';
import { styles } from './styles/utilityStyles';


const Index = () => {
  const [columnsData, setColumnsData] = useState(null);

  useEffect(() => {
    (async () => {
      const timeTableBells = (await getMasterTimeTableBells()).data.data.timeTableBells;
      const timeTableBellsList = (await getTimeTableBells()).data.data.timetablebells;
      const columnsData = createTableArray(timeTableBells, timeTableBellsList);
      console.log(columnsData)
      setColumnsData(columnsData);
    })()
  }, []);

  const changeColumnData = async (column, row, type, id) => {
    const selection = type == 'empty';
    const changeResponse = await chooseTimeTableBell(id, !selection)
    console.log(changeResponse)
    const nextColumnData = { ...columnsData };
    const changedItem = selection ? { label: 'خالی', style: styles.grayed, id } : { label: 'انتخاب شده', style: styles.selected, id };
    nextColumnData.columns[column][row] = changedItem;
    setColumnsData(nextColumnData)
  }

  const renderedColumns = () => {
    return columnsData.columns.map((column, index) => {
      const columnExists = columnsData.columnExists[index];
      return columnExists ? <Column items={column} changeColumnData={changeColumnData} column={index} /> : <OrangeColumn />
    })
  }

  return (
    <div className='table-wrapper'>
      {!columnsData ? null : renderedColumns()}
    </div >
  );
};

export default Index;
