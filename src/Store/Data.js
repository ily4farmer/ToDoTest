import { makeAutoObservable } from "mobx";

function filterProducts(data, bool) {
    // Записываем данные в массив arr
    const arr = data
    // Разделяем массив на купленный и некупленный товар
    const newArr = arr.filter((el) => el.done === bool)

    // Вычленяем элементы массива по их типу
    const eat = newArr.filter((el) => el.kind === "еда")
    const water = newArr.filter((el) => el.kind === "Вода")
    const item = newArr.filter((el) => el.kind === "Быт")

    // Возвращаем новый массив в порядке сортировки сначала дорогие и деление по принцыпу еда - вода - предмет
    return [...eat, ...water, ...item].sort((a, b) => a.price > b.price ? -1 : 1);
};


class Data {
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
        // notActive - некупленные товары
        const notActive = filterProducts(data, false) 
        // Купленные товары
        const active = filterProducts(data, true) 

        // Добавляем товары в массив продуктов (сначала некупленные, потом купленные)
        this.listProducts = [...notActive, ...active]; 
    }

}

export default new Data();