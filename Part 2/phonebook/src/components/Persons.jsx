import Person from './Person'

const Persons = ({persons, queryState, onDelete}) => 
  <ul>
    {persons 
      .filter(person => person.name.toLowerCase().includes(queryState.toLowerCase()))
      .map(person => <Person key={person.id} name={person.name} number={person.number} onDelete={() => onDelete(person.id)}/>)}
  </ul>

export default Persons