import { CategoriesComponent } from "../pages/categories/categories.component";
import { Routes, Route } from "react-router-dom";
import { NotFound } from "../pages/NotFound";
import { AuthManager } from "../pages/AuthManager";

interface IRoute {
    path: string;
    element?: React.ReactNode;
    exact?: boolean;
}

const getRoutes = (): IRoute[] => [
    { path: "/login", element: <AuthManager /> },
    { path: "/profile", element: <NotFound /> },
    { path: "/accounts", element: <NotFound /> },
    { path: "/categories", element: <CategoriesComponent /> },
    { path: "/transactions", element: <NotFound /> },
    { path: "/overview", element: <NotFound /> },
]


export const RouteConfig = ({ currentLanguage, webApiLocale }: any) => {
    return (
        <Routes>
            {getRoutes().map( ({path, element, exact}, index) => {
                return (
                    <Route path={path} element={element} key={index} />
                );
            })}

            <Route path="*" element={<NotFound />}/> 
        </Routes>
    );
}



