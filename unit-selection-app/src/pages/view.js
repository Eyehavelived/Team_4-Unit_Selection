import React,{useState,useRef} from "react";
import { NavigationApp } from "../components/common/navigation";
import UnitCard from "../components/unitCardView";
import {useReactToPrint} from "react-to-print"


  const page = "View";




export default function View(){
  const componentRef = useRef()
  const handlePrint=useReactToPrint({
    content:()=>componentRef.current
  })
  const [scheduledUnits] = useState(()=>{
    const localData = localStorage.getItem('scheduledUnits');
    return localData ? JSON.parse(localData) : [];
  });
  window.myglobal=scheduledUnits.slice(0,scheduledUnits.length-1);
  console.log(window.myglobal)
  return(
          <div>
        <NavigationApp page={page} />
        <div className="container">
          <div className="row">
          <div className="text-center mb-3">
              <button type="button" className="btn btn-primary" onClick={handlePrint}>Click Here to download PDF</button>
          </div>
          <div className="height-80 overflow-auto">
            <ComponentToPrint ref={componentRef} />
          </div>
           
        </div>
      </div>
    </div>
  );

}

class ComponentToPrint extends React.Component {
  render(){return (
    <div className="col-10">
      {window.myglobal.length>=2 &&
        window.myglobal.map((element,index)=>{
          return[
            <h4 className="mx-1">Year {element.year} Semester {element.sem}</h4>,
            element.units.map((unitInfo,index2)=>(
              <UnitCard
              unitCode={unitInfo.unitCode}
              unitName={unitInfo.unitName}
              />
            ))
            ]
      })}
    </div>
  );
}
}

