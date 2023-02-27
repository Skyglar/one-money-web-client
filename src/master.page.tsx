import { RouteConfig } from "./shared/route.config";
import { MenuSection } from "./shared/components/menu/MenuSection";
import AntComponent from "./shared/components/AntComponent";
import './assets/styles/App.scss';

export const MasterPage = () => {
  return (
    <div className="App">
      <section>
        <AntComponent />

        <MenuSection />
      </section>

      <main>
        <RouteConfig currentLanguage="" webApiLocale="" />
      </main>
    </div>
  );
};
