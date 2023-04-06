import { CategoriesComponent } from "../pages/categories/categories.component";
import { Routes, Route, RouteProps } from "react-router-dom";
import { NotFound } from "../pages/NotFound";

const getRoutes = (): RouteProps[] => [
    { path: "profile", element: <NotFound /> },
    { path: "accounts", element: <NotFound /> },
    { path: "categories", element: <CategoriesComponent /> },
    { path: "transactions", element: <NotFound /> },
    { path: "overview", element: <NotFound /> },
]


export const RouteConfig = ({ currentLanguage, webApiLocale }: any) => {
    return (
        <Routes>
            {getRoutes().map( ({path, element}, index) => {
                return (
                    <Route path={path} element={element} key={index} />
                );
            })}

            <Route path="*" element={<NotFound />}/> 
        </Routes>
    );
}



