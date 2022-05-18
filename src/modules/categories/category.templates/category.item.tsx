import { Category } from "../../../entities/category";
import "../../../assets/styles/category.css";
import icon from "../../../assets/icons/category/gift.svg";

interface ICategoryItemTemplateProps {
    CategoryModel: Category;
}

export const CategoryItemTemplate = (props: ICategoryItemTemplateProps) => {

    return (
        <div className="category__item__container">
            <div>Name</div>
            <div className="circle" style={{backgroundColor: "green"}}>
                <img src={icon} alt="" style={{width: 50, height: 50}} />
            </div>
        </div>
    )
}

