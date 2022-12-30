import { useEffect, useState } from "react";
import { Category } from "../../entities/category";
import "../../assets/styles/category.scss";
import * as CategoryApi from "../../web.api/category.api";
import { CategoryItemTemplate } from "./category.templates/category.item";

interface ICategoriesComponentProps {

}

export const CategoriesComponent = () => {

    // const intialState = {
    //     Categories: Array<Category>
    // };

    const [categories, setCategories] = useState<Array<Category>>([])

    useEffect(() => {
        CategoryApi.GetAllCategoriesEpic("hello from client", "")
        .then((data) => setCategories(data));
      }, []);
    
    return (
        <div className="categories__component">
            {categories.length > 0 && categories.map(c => {
                debugger;
                return <CategoryItemTemplate categoryModel={c}/>
            })}
        </div>
    );
}






