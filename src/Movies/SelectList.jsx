import React from 'react';


class SelectList extends React.Component {
  render() {
    const { values, selectedValue, handleSelect } = this.props
    const displayValues = ['', ...values]

    return (
      <div>
        <select
          value={selectedValue}
          onChange={handleSelect}
          placeholder="Genre"
        >
          {displayValues.map(val =>
            <option value={val}>{val}</option>)}
        </select>
      </div>
    )
  }
}

export default SelectList;
