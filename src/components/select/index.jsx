import './style.css';

export const Select = ({ array, value, handleChange, name }) => {
  return (
    <select className="list" name={name} value={value} onChange={handleChange} required>
      {array.map(el => <option value={el} key={el.toString()}>{el}</option>)}
    </select>
  )
}