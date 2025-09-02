import { defineStore } from 'pinia';

const cartStore = defineStore('cart', {
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

const generalStore = defineStore('other', {
    state: () => ({
        is_sidebar_collapsed: true
    }),
    getters: {
        isCollapsed: (state) => state.is_sidebar_collapsed
    },
    actions: {
        toggleSidebar(){
            this.is_sidebar_collapsed = !this.is_sidebar_collapsed
        },
        hideSidebar(){
            this.is_sidebar_collapsed = true
        }
    }
});

export {
    cartStore,
    generalStore,
}