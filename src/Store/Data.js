import { configure, makeAutoObservable } from "mobx";


class Data {
    a = 1;
    token = '';
    listProducts = [];

    constructor() {
        makeAutoObservable(this);
    }

    getToken(data) {
        this.token = data; 
    }

    getListProduct(data) {
        this.listProducts = data; 
    }

}

export default new Data();