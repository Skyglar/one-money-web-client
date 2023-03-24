import { useEffect, useState } from "react";
import { Category } from "../../entities/category";
import "../../assets/styles/category.scss";
import * as CategoryApi from "../../web.api/category.api";
import { CategoryItem } from "./category.templates/category.item";
import CategoriesChart from "./category.templates/categories.chart";
import { CategoryHeader } from "./category.header";

// interface ICategoriesComponentProps {}

export const CategoriesComponent = () => {
  // const intialState = {
  //     Categories: Array<Category>
  // };

  const [categories, setCategories] = useState<Category[]>([]);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    CategoryApi.GetAllCategoriesEpic("hello from client", "").then((data) =>
      setCategories(data)
    );
  }, []);

  function addTransactionHandler() {}

  function editCategoryHandler() {}

  function onEditClicked() {
    debugger;
    setEditMode(!editMode)
  }

  return (
    <div className="categories__component">
      <CategoryHeader onEditClicked={onEditClicked}/>
      <div className="container">
        {categories.length > 0 &&
          categories.map((item, index) => {
            return (
              <div key={index.toString()} className="container__item">
                <CategoryItem
                  categoryModel={item}
                  onClickHandler={
                    editMode ? editCategoryHandler : addTransactionHandler
                  }
                />
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
