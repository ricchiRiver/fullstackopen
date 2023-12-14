const Person = ({name, number, onDelete}) => 
    <li>{name} {number} <button onClick={onDelete}>delete</button></li>

export default Person