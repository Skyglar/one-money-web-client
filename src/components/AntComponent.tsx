import { Button, DatePicker, version } from "antd";
import "../assets/styles/antd.css";
import "../assets/styles/index.css";

export default function AntComponent() {
  return (
    <div className="App">
      <h1>antd version: {version}</h1>
      <DatePicker />
      <Button type="primary" style={{ marginLeft: 8, colorScheme: "#13c2c2"}}>
        Primary Button
      </Button>
    </div>
  );
}
