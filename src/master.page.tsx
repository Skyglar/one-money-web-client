import { RouteConfig } from './shared/route.config';
import { MenuNavbar } from './components/menu/MenuNav';
import AntComponent from './components/AntComponent';


export const MasterPage = () => {

    return (
        <>
            <AntComponent />

            <nav>
                <MenuNavbar />
            </nav>

            <main>
                <RouteConfig currentLanguage='' webApiLocale=''/>
            </main>
        </>
    );
}