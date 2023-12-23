import {useRoutes} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout";
import {HomePage} from "../pages/HomePage";
import {SettingPage} from "../pages/SettingPage";
import {AccountPage} from "../pages/AccountPage";
import {TablePage} from "../pages/TablePage";

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
                        path: "account",
                        element: <AccountPage/>
                    },
                    {
                        path: "table",
                        element: <TablePage/>
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