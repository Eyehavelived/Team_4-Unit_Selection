import React,{useState} from "react"

function CreateArea(props) {
    const [unit, setUnit] = useState({
      unitcode: "",
      title: "",
      unitoverview:""
    });
  
    function handleChange(event) {
      const { name, value } = event.target;
  
      setUnit(prevUnit => {
        return {
          ...prevUnit,
          [name]: value
        };
      });
    }
  
    function submitNote(event) {
      props.onAdd(unit);
      setUnit({
        unitcode: "",
        title: "",
        unitoverview:""
      });
      event.preventDefault();
    }
  
    return (
      <div>
        <form>
          <input
            name="unitcode"
            onChange={handleChange}
            value={unit.unitcode}
            placeholder="Unit Code"
          />
          <input
            name="title"
            onChange={handleChange}
            value={unit.title}
            placeholder="Unit Title"
          />
           <input
            name="unitoverview"
            onChange={handleChange}
            value={unit.unitoverview}
            placeholder="Unit Overview"
          />
          <input onClick={submitNote} type="checkbox"/>
        </form>
      </div>
    );
  }
  
  export default CreateArea;