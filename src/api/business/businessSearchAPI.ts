import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
interface Business{
    alias: string;
}
export async function getBusiness(
    id: string
) {
    const url = `v3/businesses/search/phone?phone=+14157492060`;
    try {
        let config: AxiosRequestConfig = {
            headers:{
                Authorization: 'Bearer U2mA2FMIph5L9mlcoYOPRV2gmq6oJu8O03vp92rZIohdiIkZyV2F55a4PQtWxot4p8oN-jR2uKehF94AlSwUF0wWIji4hy3D85stJTg_S3hh6_YmgE0jUt3b2Pn_XnYx'
            }
        };
        const api = axios.create(config);
        const issuesResponse = await api.get<Business, AxiosResponse<Business>>(url);
        const s = issuesResponse.alias;
        console.log("inside getbusines");
        console.log(issuesResponse);
        return issuesResponse;
    } catch (err) {
        throw err
    }
}