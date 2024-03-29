import React, { useState, useRef } from "react";
import { NavigationApp } from "../components/common/navigation";
import { UnitListCard } from "../components/common/unitListCard";
import { useReactToPrint } from "react-to-print";
import { BiPrinter } from "react-icons/bi";
import { Row, Col } from "react-bootstrap";

const page = "View";

class ComponentToPrint extends React.Component {
  constructor(props) {
    super(props);
    this.lastElementYear = -1;
    this.flag = -1;
  }
  render() {
    return (
      <div className="container px-4 py-5">
        <h1 className="text-center text-primary mb-5">MUSe</h1>
        {window.myglobal.length >= 1 &&
          window.myglobal.map((element, index) => {
            if (element.year === this.lastElementYear) {
              return [
                <Row>
                  <div className="mt-3">
                  {element.sem === "1" || element.sem === "2" ? (
                    <h4 className="text-primary">
                      <i> Sem {element.sem}</i>
                    </h4>
                  ) : (
                    <h4 className="text-primary">
                      <i>{element.sem}</i>
                    </h4>
                  )}
                  </div>

                  {element.units.length > 0 ? (
                    element.units.map((unitInfo, index2) => (
                      <Col xs={3}>
                        <UnitListCard
                          code={unitInfo.unitCode}
                          name={unitInfo.unitName}
                        />
                      </Col>
                    ))
                  ) : (
                    <h6 className="text-muted">
                      No units selected for this period
                    </h6>
                  )}
                </Row>,
              ];
            } else {
              this.lastElementYear = element.year;
              return [
                <Row className="mt-5">
                    <div className="mt-2">
                      <h4 className="text-primary">
                        <u>{element.year}</u>
                      </h4>
                    </div>
                    <div className="mt-2">
                      {element.sem === "1" || element.sem === "2" ? (
                        <h4 className="text-primary">
                          <i>Sem {element.sem}</i>
                        </h4>
                      ) : (
                        <h4 className="text-primary">
                          <i>{element.sem}</i>
                        </h4>
                      )}
                    </div>
                    
                    {element.units.length > 0 ? (
                      element.units.map((unitInfo, index2) => (
                        <Col xs={3}>
                          <UnitListCard
                            code={unitInfo.unitCode}
                            name={unitInfo.unitName}
                          />
                        </Col>
                      ))
                    ) : (
                      <h6 className="text-muted">
                        No units selected for this period
                      </h6>
                    )}
             
                </Row>,
              ];
            }
          })}
      </div>
    );
  }
}

export default function View() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const [scheduledUnits] = useState(() => {
    const localData = localStorage.getItem("scheduledUnits");
    return localData ? JSON.parse(localData) : [];
  });

  window.myglobal = scheduledUnits.slice(1, scheduledUnits.length);
  console.log(window.myglobal);
  return (
    <div className="app-container">
      <NavigationApp page={page} />
     
      <div className="text-center my-4">
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={handlePrint}
        >
          Click Here to download PDF <BiPrinter/>
        </button>
      </div>
          
      <div className="height-70 overflow-auto">
        <ComponentToPrint ref={componentRef} />
      </div>
       
    </div>
  );
}
