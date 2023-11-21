const Filter = ({label, state, onChange}) =>       
  <div>
    {label}<input value = {state} onChange = {onChange}/>
  </div>

export default Filter