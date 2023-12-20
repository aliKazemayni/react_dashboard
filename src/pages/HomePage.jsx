import {Helmet} from "react-helmet-async";
import {Typography} from "@mui/material";
import {useTranslation} from "react-i18next";

export let HomePage = () => {

    const {  t } = useTranslation();

    return <>
        <Helmet>
            <title>{t("myResume")} | {t("home")}</title>
        </Helmet>
        <Typography variant="h3">{t("home")}</Typography>
    </>
}