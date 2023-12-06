import {useRoutes} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout";
import {HomePage} from "../pages/HomePage";
import {SettingPage} from "../pages/SettingPage";

export let Routes = () => {
    return useRoutes(
        [
            {
                path: "/",
                element: <MainLayout/>,
                children: [
                    {
                        path: "home",
                        element: <HomePage/>
                    },
                    {
                        path: "setting",
                        element: <SettingPage/>
                    }
                ]
            }
        ]
    );
}