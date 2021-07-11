import ColumnItem from './ColumnItem';

const Column = ({ items, changeColumnData, column }) => {
  const renderedItems = () => items.map((item, index) => <ColumnItem label={item.label} styles={item.style} clickable={item.hasOwnProperty('id')} id={item.id} key={index} changeColumnData={changeColumnData} column={column} row={index} />)

  return (
    <div className="column">
      {renderedItems()}
    </div>
  )
}

export default Column;