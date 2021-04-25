import React,{useState,useRef} from "react";
import { NavigationApp } from "../components/common/navigation";
import UnitCard from "../components/unitCardView";
import {useReactToPrint} from "react-to-print"
import { useLazyQuery, gql, useQuery } from "@apollo/client";


  const page = "View";

  const sampleUnitsSemester1 = [
    {
      unitCode: "FIT3162",
      unitName: "Computer Science Project 2",
      facultyName: "Faculty of Information Technology",
      unitType: "Undergraduate",
      synopsis:
        "This unit provides practical experience in researching, designing, developing and testing a non-trivial computer science project. Projects are generally software-based, although sometimes they may involve hardware development",
      workloadReq:
        "Minimum total expected workload to achieve the learning outcomes for this unit is 144 hours per semester",
      year: "3",
      semester: "Semester1",
    },
  ];
  const sampleUnitsSemester2 = [
    {
      unitCode: "FIT3161",
      unitName: "Computer Science Project 1",
      facultyName: "Faculty of Information Technology",
      unitType: "Undergraduate",
      synopsis:
        "This unit provides practical experience in researching, designing, developing and testing a substantial computer science project.",
      workloadReq:
        "Minimum total expected workload to achieve the learning outcomes for this unit is 144 hours per semester",
      year: "3",
      semester: "Semester2",
    },
  ];
  const sampleUnitsWinter = [
    {
      unitCode: "FIT2032",
      unitName: "Industry-based learning",
      facultyName: "Faculty of Information Technology",
      unitType: "Undergraduate",
      synopsis:
        "Students on placement participate full time in a defined, graduate level role",
      workloadReq:
        "Students on placement are deployed full-time for 22 weeks with the industry partners",
      year: "year2",
      semester: "Winter",
    },
  ];
  const sampleUnitsSummerA = [
    {
      unitCode: "FIT3333",
      unitName: "Industry-based learning",
      facultyName: "Faculty of Information Technology",
      unitType: "Undergraduate",
      synopsis:
        "Students on placement participate full time in a defined, graduate level role",
      workloadReq:
        "Students on placement are deployed full-time for 22 weeks with the industry partners",
      year: "year3",
      semester: "SummerA",
    },
    {
      unitCode: "FIT2032",
      unitName: "Industry-based learning",
      facultyName: "Faculty of Information Technology",
      unitType: "Undergraduate",
      synopsis:
        "Students on placement participate full time in a defined, graduate level role",
      workloadReq:
        "Students on placement are deployed full-time for 22 weeks with the industry partners",
      year: "year2",
      semester: "SummerA",
    },
  ];
  const sampleUnitsSummerB = [
    {
      unitCode: "FIT3161",
      unitName: "Computer Science Project 1",
      facultyName: "Faculty of Information Technology",
      unitType: "Undergraduate",
      synopsis:
        "This unit provides practical experience in researching, designing, developing and testing a substantial computer science project.",
      workloadReq:
        "Minimum total expected workload to achieve the learning outcomes for this unit is 144 hours per semester",
      year: "3",
      semester: "SummerB",
    },
  ];



export default function View(){
  const componentRef = useRef()
  const handlePrint=useReactToPrint({
    content:()=>componentRef.current
  })
  const [scheduledUnits] = useState(()=>{
    const localData = localStorage.getItem('scheduledUnits');
    return localData ? JSON.parse(localData) : [];
  });
  // window.myglobal=scheduledUnits
  // console.log(window.myglobal)
  const GET_UNIT_BY_UNITCODE_QUERY = gql`
  query getUnitFromUnitcode($unitCode: String) { 
      getUnit(unitCode: $unitCode) {
          unitCode
          unitName
          synopsis
          unitCoRequisites
          unitProhibitions
          unitPreRequisites
          teachingPeriods
          locationNames
          facultyName
          degreeType
          isActive
          workloadReq
      }
  }
`

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
      {sampleUnitsSemester1.length !== 0 && (
        <h4 className="mx-1">Semester1</h4>
      )}
      {sampleUnitsSemester1.length !== 0 &&
        sampleUnitsSemester1.map((element, index) => (
          <UnitCard
            unitCode={element.unitCode}
            unitType={element.unitType}
            unitName={element.unitName}
            semester={element.semester}
            year={element.year}
            synopsis={element.synopsis}
            workloadReq={element.workloadReq}
            view={true}
          />
        ))}
      {sampleUnitsSemester2.length !== 0 && (
        <h4 className="mx-1">Semester2</h4>
      )}
      {sampleUnitsSemester2.length !== 0 &&
        sampleUnitsSemester2.map((element, index) => (
          <UnitCard
            unitCode={element.unitCode}
            unitType={element.unitType}
            unitName={element.unitName}
            semester={element.semester}
            year={element.year}
            synopsis={element.synopsis}
            workloadReq={element.workloadReq}
            view={true}
          />
        ))}
      {sampleUnitsWinter.length !== 0 && <h4 className="mx-1">Winter</h4>}
      {sampleUnitsWinter.length !== 0 &&
        sampleUnitsWinter.map((element, index) => (
          <UnitCard
            unitCode={element.unitCode}
            unitType={element.unitType}
            unitName={element.unitName}
            semester={element.semester}
            year={element.year}
            synopsis={element.synopsis}
            workloadReq={element.workloadReq}
            view={true}
          />
        ))}
      {sampleUnitsSummerA.length !== 0 && <h4 className="mx-1">SummerA</h4>}
      {sampleUnitsSummerA.length !== 0 &&
        sampleUnitsSummerA.map((element, index) => (
          <UnitCard
            unitCode={element.unitCode}
            unitType={element.unitType}
            unitName={element.unitName}
            semester={element.semester}
            year={element.year}
            synopsis={element.synopsis}
            workloadReq={element.workloadReq}
            view={true}
          />
        ))}
      {sampleUnitsSummerB.length !== 0 && <h4 className="mx-1">SummerB</h4>}
      {sampleUnitsSummerB.length !== 0 &&
        sampleUnitsSummerB.map((element, index) => (
          <UnitCard
            unitCode={element.unitCode}
            unitType={element.unitType}
            unitName={element.unitName}
            semester={element.semester}
            year={element.year}
            synopsis={element.synopsis}
            workloadReq={element.workloadReq}
            view={true}
          />
        ))}
    </div>
  );
}
}
