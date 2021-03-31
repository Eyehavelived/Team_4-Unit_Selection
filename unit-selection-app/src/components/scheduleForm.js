import React, {useState} from 'react';

export default function ScheduleForm(props){

    const [teachingPeriod,setTeachingPeriod] = useState({
        listId: "11",
        year:"1",
        sem:"1",
        units:[]
    });

    const yearOptions = ["1","2","3","4"]
    const semOptions = ["1","2","summera","summerb","winter"]

    function handleChange(event){
        const {name,value} = event.target;

        setTeachingPeriod((prevTeachingPeriod) => {
            return {
                ...prevTeachingPeriod,
                [name]: value,
                units:[]
            };
        });
    }

    function submitTeachingPeriod(event){
        teachingPeriod.listId = teachingPeriod.year+teachingPeriod.sem
        console.log(teachingPeriod.listId)
        props.onAdd(teachingPeriod);
        event.preventDefault();
    }

    return (
        <div>
            <div id="container-form" className="row">
                <form class="d-inline-flex py-2">
                    <label for="year" className="form-label mt-2 me-2">Year</label>
                    <select class="form-control me-3" id="year" name="year" value={teachingPeriod.year} onChange={handleChange}>
                        {yearOptions.map((year)=>(
                                <option value={year}>{year}</option>
                        ))}
                    </select>

                    <label for="sem" className="form-label mt-2 me-2">Sem</label>

                    <select class="form-control me-3" id="sem" name="sem" value={teachingPeriod.sem} onChange={handleChange}>
                        {semOptions.map((year)=>(
                                <option value={year}>{year}</option>
                        ))}
                    </select>
                    
                    <button type="button" className="btn btn-secondary" onClick={submitTeachingPeriod}>Add</button>
                </form>
            </div>
        </div>
    )
}