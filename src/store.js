import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: []
    }),
    getters: {
        totalItems: (state) => state.items.length,
        totalPrice: (state) => state.items.reduce((sum, i) => sum + i.price, 0),
        isEmpty: (state) => state.items.length === 0,
    },
    actions: {
        addItem(item){
            this.items.push(item)
        },
        removeItem(index){
            this.items.splice(index, 1)
        },
        clearCart(){
            this.items = []
        }
    },
})