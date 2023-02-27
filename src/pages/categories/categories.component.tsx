import { useEffect, useState } from "react";
import { Category } from "../../entities/category";
import "../../assets/styles/category.scss";
import * as CategoryApi from "../../web.api/category.api";
import { CategoryItemTemplate } from "./category.templates/category.item";
import CategoriesChart from "./category.templates/categories.chart";

interface ICategoriesComponentProps {}

export const CategoriesComponent = () => {
  // const intialState = {
  //     Categories: Array<Category>
  // };

  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    debugger;
    CategoryApi.GetAllCategoriesEpic("hello from client", "").then((data) =>
      setCategories(data)
    );
  }, []);

  return (
    <div className="categories__component">
      <div className="container">
        {categories.length > 0 &&
          categories.map((item, index) => {
            return (
              <div key={index.toString()} className="container__item">
                <CategoryItemTemplate categoryModel={item} />
              </div>
            );
          })}

        <div className="container__item chart">
          {categories.length > 0 ? (
            <CategoriesChart
              data={categories.map((category) => {
                return {
                  type: category.Name,
                  value: category.Amount,
                  color: category.Color,
                };
              })}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};
