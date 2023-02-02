import { Button, DatePicker, version } from "antd";
import { useEffect, useState } from "react";
import "../assets/styles/antd.css";
import "../assets/styles/index.css";
import { Category } from "../entities/category";
import { CategoriesComponent } from "../modules/categories/categories.component";
import { CategoryItemTemplate } from "../modules/categories/category.templates/category.item";
import CategoriesChart from "../modules/categories/category.templates/categories.chart";
import * as ValueApi from "../web.api/value.api";

export default function AntComponent() {
  const [valueState, setValueState] = useState({response: undefined});

  // useEffect(() => {
  //   debugger;
  //   ValueApi.GetOrganizationClientByIdEpic("hello from client", "")
  //   .then((data) => setValueState(data));
  // }, []);
  
  console.log(valueState);
  return (
    <div className="App">
      <h1>antd version: {version} {valueState.response}</h1>
      <DatePicker />
      <Button type="primary" style={{ marginLeft: 8}}>
        Primary Button
      </Button>
      <br /><br />
      <CategoriesComponent/>
      <CategoriesChart/>
    </div>
  );
}
