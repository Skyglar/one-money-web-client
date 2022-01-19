import { Button, DatePicker, version } from "antd";
import { useEffect, useState } from "react";
import "../assets/styles/antd.css";
import "../assets/styles/index.css";
import * as ValueApi from "../web.api/value.api";

export default function AntComponent() {
  const [valueState, setValueState] = useState({response: undefined});
  debugger;

  useEffect(() => {
    debugger;
    ValueApi.GetOrganizationClientByIdEpic("hello from client", "")
    .then((data) => setValueState(data));
  }, []);
  
  console.log(valueState);
  debugger;
  return (
    <div className="App">
      <h1>antd version: {version} {valueState.response}</h1>
      <DatePicker />
      <Button type="primary" style={{ marginLeft: 8}}>
        Primary Button
      </Button>
    </div>
  );
}
