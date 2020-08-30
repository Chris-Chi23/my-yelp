import HttpClient from "./http-client";

export interface Interface {
    
}
export class BusinessAPI extends HttpClient {
        constructor() {
            super('v3/businesses/search');
        }
       public getBusinessByPhone = (phone: string) => this.instance.get(`/phone?phone=+${phone}`);

   }