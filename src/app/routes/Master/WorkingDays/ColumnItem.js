const ColumnItem = ({ label, styles: itemStyles, changeColumnData, clickable, column, row, id }) => {

  const selected = label == 'انتخاب شده';

  return (
    <div className="column-item" style={itemStyles} onClick={() => !clickable ? null : (selected ? changeColumnData(column, row, 'empty', id) : changeColumnData(column, row, 'selected', id))}>
      {label}
    </div>
  )
}

export default ColumnItem;