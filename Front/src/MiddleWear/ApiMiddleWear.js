import axios from "axios";

const url = "http://localhost:3000";

export const loginFunc = async (data) => {
    try {
        const res = await axios.get(`${url}/auth/login`, data);

        if (!res) {
            return alert("pas de reponse");
        }

        const { status, data } = res;

        return data;
    } catch (error) {
        console.log("🚀 ~ loginFunc ~ error:", error);
    }
};
export const registerFunc = async (data) => {
    try {
        const res = await axios.get(`${url}/auth/register`, data);

        if (!res) {
            return alert("pas de reponse");
        }

        const { status, data } = res;

        return data;
    } catch (error) {
        console.log("🚀 ~ loginFunc ~ error:", error);
    }
};
