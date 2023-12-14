const PersonForm = ({onSubmit, nameState, onNameChange, numberState, onNumberChange}) =>
  <form onSubmit={onSubmit}>
    <div>
      name: <input value = {nameState} onChange={onNameChange}/>
    </div>
    <div>
      number: <input value = {numberState} onChange={onNumberChange}/>
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>

export default PersonForm