import React,{useState,useRef} from "react";
import { NavigationApp } from "../components/common/navigation";
import UnitCard from "../components/unitCardView";
import {useReactToPrint} from "react-to-print";
import { BiPrinter } from "react-icons/bi";



const page = "View";


class ComponentToPrint extends React.Component {
  render(){return (
    <div className="px-4 py-5 row ">
    <h1 className="text-center text-primary mb-5">M Unit Selection</h1>
      {window.myglobal.length>=1 &&
        window.myglobal.map((element,index)=>{
          return[
           <div className="col-3 mb-5">
           {(element.sem==="1" || element.sem==="2")?
           <h4 className="mx-1 ms-5">{element.year} Semester {element.sem}</h4>:
           <h4 className="mx-1 ms-5">{element.year} {element.sem}</h4>
            }
            {element.units.length>0?
            element.units.map((unitInfo,index2)=>(
              <UnitCard
              unitCode={unitInfo.unitCode}
              unitName={unitInfo.unitName}
              /> 
            )):
            <h6 className="ms-5 text-muted">No units selected for this period</h6>
            }
            </div>
            ]
            
          
      })}

      
    </div>
  );
}
}


export default function View(){
  const componentRef = useRef()
  const handlePrint=useReactToPrint({
    content:()=>componentRef.current
  })
  const [scheduledUnits] = useState(()=>{
    const localData = localStorage.getItem('scheduledUnits');
    return localData ? JSON.parse(localData) : [];
  });
  // console.log(scheduledUnits)
  window.myglobal=scheduledUnits.slice(1,scheduledUnits.length);
 
  console.log(window.myglobal)
  return(
          <div>
        <NavigationApp page={page} />
        <div className="container">
          <div className="row">
          <div className="text-center">
              <button type="button" className="btn btn-primary" onClick={handlePrint}>Click Here to download PDF <BiPrinter/></button>
          </div>
          <div className="height-10 overflow-auto">
            <ComponentToPrint ref={componentRef} />
          </div>
           
        </div>
      </div>
    </div>
  );

}


