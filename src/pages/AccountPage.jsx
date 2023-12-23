import {Helmet} from "react-helmet-async";
import {Typography} from "@mui/material";
import {useTranslation} from "react-i18next";

export let AccountPage = () => {

    const {  t } = useTranslation();

    return <>
        <Helmet>
            <title>{t("myResume")} | {t("account")}</title>
        </Helmet>
        <Typography variant="h3">{t("account")}</Typography>
    </>
}