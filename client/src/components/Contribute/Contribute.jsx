import "./Contribute.css";
import React, { useEffect, useState } from "react";
import Title from "./Title";
import Dropdowns from "./Dropdowns";
import CreateQ from "./CreateQ";
import NavigationBar from "../Global/NavigationBar";
import { Card, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ShowDropDowns from "../ShowDropDowns/ShowDropDowns";

function Contribute() {
  const [subject, setSubject] = useState("");
  const [unit, setUnit] = useState("6229fb510b251f2757d2b4ee");
  return (
    <div>
      <NavigationBar />
      <div className="allContriComp">
        <Title />
        <ShowDropDowns unitDisplay={true} setSubject={setSubject} setUnit={setUnit} subject={subject}/>
        <Card className="Qsection">
          <CreateQ unit={unit} setUnit={setUnit}/>
          {console.log(unit)}
        </Card>
      </div>
    </div>
  );
}

export default Contribute;
