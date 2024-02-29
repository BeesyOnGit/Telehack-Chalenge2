export const generalAddEditFunction = async (e, { endPoint, lang, successCode, refresh, getData, optFunc, setApiWait, apiWait }) => {
    e ? e.preventDefault() : null;
    try {
        if (apiWait == true) {
            return;
        }

        setApiWait(true);

        const res = await endPoint;

        if (!res) {
            return alert(apiResponseLang[lang].resErr);
        }

        const { code, data } = res;

        if (code == "037") {
            return alert(res.message);
        }
        if (code != successCode) {
            return alert(apiResponseLang[lang][code]);
        }
        alert(apiResponseLang[lang][code]);
        if (!getData) {
            return refresh();
        }
        return optFunc ? optFunc(data) : refresh();
    } catch (error) {
        console.log("🚀 ~ file: ClientFunctions.ts:272 ~ error:", error);
    }
};

export const generalGetFunction = async ({ endPoint, lang, successCode, setNewAlert, setState, field, emptyCode, refresh, silent }) => {
    try {
        const res = await endPoint;

        if (!res) {
            return alert(apiResponseLang[lang].resErr);
        }

        const { code, data } = res;
        if (emptyCode && code == emptyCode) {
            silent ? null : alert(apiResponseLang[lang][code]);
            return setState ? setState("empty") : undefined;
        }
        if (code != successCode) {
            return silent ? null : alert(apiResponseLang[lang][code]);
        }
        // setNewAlert({ type: "success", message: apiResponseLang[lang][code] });
        if (!setState && refresh) {
            alert(apiResponseLang[lang][code]);
            return refresh();
        }
        return setState(field ? data[field] : data);
    } catch (error) {}
};
