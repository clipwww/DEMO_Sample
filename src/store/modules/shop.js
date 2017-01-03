import * as types from '../mutations_type.js';
import Guid from 'guid';

const state = {
    products: [{
            id: Guid.create().value,
            title: 'The Perfect Sandwich, A Real NYC Classic',
            image: 'http://www.w3schools.com/w3images/sandwich.jpg',
            inventory: 5,
            price: 155
        },
        {
            id: Guid.create().value,
            title: 'Let Me Tell You About This Steak',
            image: 'http://www.w3schools.com/w3images/steak.jpg',
            inventory: 1,
            price: 1380
        },
        {
            id: Guid.create().value,
            title: 'Cherries, interrupted',
            image: 'http://www.w3schools.com/w3images/cherries.jpg',
            inventory: 2,
            price: 499
        },
        {
            id: Guid.create().value,
            title: 'Once Again, Robust Wine and Vegetable Pasta',
            image: 'http://www.w3schools.com/w3images/wine.jpg',
            inventory: 3,
            price: 790
        }
    ],
    shoppingCart: [],
}

const getters = {
    getProducts: state => { return state.products },
    getShoppingCartTotal: state => { return state.shoppingCart.length },
    getRecommendedProducts: state => {
        // 先取得尚有庫存餐點表
        const inventoryList = state.products.filter(p => p.inventory > 0);
        if (inventoryList.length === 0) {
            return {
                id: Guid.create().value,
                title: '無推薦商品',
                image: '',
                inventory: 0,
                price: 0,
            }
        }
        // 取隨機數
        const random = Math.round(Math.random() * (inventoryList.length - 1));
        // 回傳隨機數的餐點
        return inventoryList[random];
    },
    getShoppingCart: state => { return state.shoppingCart },
    getCartPriceTotal: state => {
        var totalPrice = 0;
        state.shoppingCart.forEach((item) => {
            totalPrice += item.price;
        })
        return totalPrice;
    },
}

const actions = {
    addCart({ commit }, id) {
        commit(types.ADD_CART, id);
    },
    cancelCart({ commit }, id) {
        commit(types.CANCEL_CART, id);
    }
}

const mutations = {
    [types.ADD_CART](state, id) {
        // ES6 array find 找到條件成立的內容。
        const product = state.products.find(item => item.id === id && item.inventory !== 0);
        // 餐點庫存 -1
        product.inventory = product.inventory - 1;
        // 餐點加入購物車 title, price
        state.shoppingCart.push({
            id: product.id,
            title: product.title,
            price: product.price,
        });
    },
    [types.CANCEL_CART](state, id) {
        console.log("delete", id)
            // 從購物車移除
            // ES6 array findIndex 找到條件成立的物件，所在陣列中的位子。
        const cartIndex = state.shoppingCart.findIndex(item => item.id === id);
        state.shoppingCart.splice(cartIndex, 1);
        console.log(state.shoppingCart)
            // 餐點庫存 +1
        const product = state.products.find(item => item.id === id);
        product.inventory += 1;
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}