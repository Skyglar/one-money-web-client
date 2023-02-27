import { Category } from "../../../entities/category";
import "../../../assets/styles/category.scss";
import icon from "../../../assets/icons/category/gift.svg";
import { useEffect } from "react";

interface ICategoryItemTemplateProps {
    categoryModel: Category;
}

export const CategoryItemTemplate = (props: ICategoryItemTemplateProps) => {
    return (
        <div className="card">
            <div>{props.categoryModel.Name}</div>
            <div className="circle" style={{backgroundColor: props.categoryModel.Color, color: props.categoryModel.Color}}>
                <img src={props.categoryModel.Image} alt="" style={{width: 50, height: 50}} />
            </div>
            <div>{props.categoryModel.Amount}</div>
        </div>
    )
}

