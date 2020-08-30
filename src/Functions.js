import { GlobalData } from "./VariableManager"
const api = GlobalData['api'];

export const fetchData = (path, callback) => {
    const fetch = async() => {
        const response = await api.get(path, GlobalData['config']);
        const responseData = response.data;
        callback(responseData);
    }
    fetch();
}