// import "../Contribute/Contribute.css";
import React, { useEffect, useState } from "react";
import Dropdowns from "../Contribute/Dropdowns";
import { Card, Container } from "react-bootstrap";
import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";

function ShowDropDowns(props) {
    const [standard, setStandard] = useState("");
  const [unit, setUnit] = useState("");

  const [standardOptions, setStandardOptions] = useState([]);
  const [subjectOptions, setSubjectOptions] = useState([]);
  const [unitOptions, setUnitOptions] = useState([]);
  var unitsShow = props.unitDisplay;

  useEffect(async () => {
    try {
      const apiData = await axios.get(
        "/api/info/standard"
      );
      console.log(apiData.data);
      // const apiData = await apiResponse.json();
      // {id : _ , standard : _} => {id : _ , field : _}
      const modifiedResp = apiData.data.standards.map((x) => {
        return {
          id: x.id,
          field: x.standard,
        };
      });
      setStandardOptions(modifiedResp);
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(async () => {
    try {
      const apiData = await axios.get(
        `/api/standard/${standard}`
      );
      // const apiData = await apiResponse.json();
      const modifiedResp = apiData.data.subjects.map((x) => {
        return {
          id: x._id,
          field: x.name,
        };
      });
      setSubjectOptions(modifiedResp);
      setUnitOptions([]);
    } catch (err) {
      console.error(err);
    }
  }, [standard]);

  useEffect(async () => {
    try {
      const apiData = await axios.get(
        `/api/standard/${standard}`
      );
      // const apiData = await apiResponse.json();
      const modifiedResp = apiData.data.subjects
        .find((x) => {
          return x._id == props.subject;
        })
        .units.map((x) => {
          return {
            id: x._id,
            field: x.name,
          };
        });
      setUnitOptions(modifiedResp);
    } catch (err) {
      console.error(err);
    }
  }, [props.subject]);

  return (
    <div>
      <div className="allContriComp">
        <Container className="DropdownBar">
          <Dropdowns
            name="Class"
            options={standardOptions}
            field={standard}
            setField={setStandard}
          />
          <Dropdowns
            name="Subject"
            options={subjectOptions}
            field={props.subject}
            setField={props.setSubject}
          />
          {unitsShow ? <Dropdowns
            name="Units"
            options={unitOptions}
            field={unit}
            setField={props.setUnit}
          />:null}
        </Container>
        
      </div>
    </div>
  );
}

export default ShowDropDowns;