import { CategoriesComponent } from "../modules/categories/categories.component";
import { Routes, Route } from "react-router-dom";

interface IRoute {
    path: string;
    element?: React.ReactNode;
    exact?: boolean;
}

const getRoutes = (): IRoute[] => [
    { path: "/profile", element: null },
    { path: "/accounts", element: null },
    { path: "/categories", element: <CategoriesComponent /> },
    { path: "/transactions", element: null },
    { path: "/overview", element: null},
]


export const RouteConfig = ({ currentLanguage, webApiLocale }: any) => {
    return (
        <Routes>
            {getRoutes().map( ({path, element, exact}, index) => {
                return (
                    <Route path={path} element={element} key={index} />
                );
            })}

            {/* 
            TODO Create NotFound component
            <Route path="*" element={NotFound}/> 
            */}
        </Routes>
    );
}



