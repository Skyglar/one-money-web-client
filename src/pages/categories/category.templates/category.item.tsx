import { Category } from "../../../entities/category";
import "../../../assets/styles/category.scss";

interface ICategoryItemTemplateProps {
    categoryModel: Category;
    onClickHandler: () => void;
}

export const CategoryItem = (props: ICategoryItemTemplateProps) => {
    return (
        <div className="card" onClick={props.onClickHandler}>
            <div>{props.categoryModel.Name}</div>
            <div className="circle" style={{backgroundColor: props.categoryModel.Color, color: props.categoryModel.Color}}>
                <img src={props.categoryModel.Image} alt="" style={{width: 50, height: 50}} />
            </div>
            <div>{props.categoryModel.Amount}</div>
        </div>
    )
}

