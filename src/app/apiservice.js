import axios from 'axios';

const httpClient = axios.create({
    baseURL: 'https://tads-ordem-servico2.herokuapp.com/'
    

    
});



class ApiService{
    

    constructor(apiurl){
       
        this.apiurl = apiurl;
       
    }

    post(url, objeto){
       return httpClient.post(this.requestUrl( url), objeto);        
    }

    put(url, objeto){
        return httpClient.put(this.requestUrl( url), objeto);
    }
    delete(url){
        return httpClient.delete(this.requestUrl( url));
    }
    get(url){
        return httpClient.delete(this.requestUrl( url));
    }
    
    requestUrl(url){
        return`${this.apiurl}${url}`;
    }

}

export default ApiService;