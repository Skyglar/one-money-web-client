import { Button, DatePicker, version } from "antd";
import { useEffect, useState } from "react";

export default function AntComponent() {
  const [valueState, setValueState] = useState({response: undefined});

  console.log(valueState);
  return (
    <div>
      <h1>antd version: {version} {valueState.response}</h1>
      <DatePicker />
      <Button type="primary" style={{ marginLeft: 8}}>
        Primary Button
      </Button>
    </div>
  );
}
