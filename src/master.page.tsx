import { RouteConfig } from "./shared/route.config";
import { Menu } from "./shared/components/menu/Menu";
import "./assets/styles/App.scss";

export const MasterPage = () => {
  return (
    <div className="App">
      <Menu />
      <main>
        <RouteConfig currentLanguage="" webApiLocale="" />
      </main>
    </div>
  );
};
