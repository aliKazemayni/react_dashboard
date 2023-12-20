import {Helmet} from "react-helmet-async";
import {Typography} from "@mui/material";
import {useTranslation} from "react-i18next";

export let SettingPage = () => {
    const { t } = useTranslation();

    return <>
        <Helmet>
            <title>{t("myResume")} | {t("setting")}</title>
        </Helmet>
        <Typography variant="h3">{t("setting")}</Typography>
    </>
}