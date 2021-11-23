import { makeAutoObservable } from "mobx";

function filterProducts(data, bool) {
    const arr = data
    const newArr = arr.filter((el) => el.done === bool)
    const eat = newArr.filter((el) => el.kind === "еда")
    const water = newArr.filter((el) => el.kind === "Вода")
    const item = newArr.filter((el) => el.kind === "Быт")

    return [...eat, ...water, ...item].sort((a, b) => a.price > b.price ? -1 : 1);
};


class Data {
    a = 1;
    token = '';
    tokenId = '';
    listProducts = [];

    constructor() {
        makeAutoObservable(this);
    }

    getToken(data) {
        return  this.token = data; 
    }

    getTokenId(data) {
        this.tokenId = data;
    }

    getListProduct(data) {
        const notActive = filterProducts(data, false) 
        const active = filterProducts(data, true) 
        this.listProducts = [...notActive, ...active]; 
    }

}

export default new Data();