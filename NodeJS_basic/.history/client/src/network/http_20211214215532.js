export default class Http{
    constructor(baseURL){
       this.baseURL = baseURL 
    }

    async fetch(url, option){
        return this.fetch(`${this.baseURL}${url}`)

    }

}