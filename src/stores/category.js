import { defineStore } from "pinia";


export const useCategoryStore = defineStore('category', () => {
    const categories = [
        'GPU',
        'CPU',
        'Mather Board',
        'RAM'
    ];
    return {
        categories,
    }
})