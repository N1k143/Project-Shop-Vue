import { defineStore } from 'pinia'
import { computed, ref } from 'vue';
import { useProductStore } from '@/stores/product';

export const useCartStore = defineStore('cart', () => {
    const carts = ref([
        {
            productId: 1,
            count: 1,

        }
    ]);

    const findIndexProductCartById = (id) => {
        return carts.value.findIndex((product) => product.productId == id);
    }
    

    const updateCountCartById = (id, count) => {
        const index = findIndexProductCartById(id);
        if(index != -1) {
            carts.value[index].count = count;
        }
    }

    const addToCart = (id) => {
        const index = findIndexProductCartById(id);
        if(index != -1) {
            updateCountCartById(id, carts.value[index].count + 1) ;
        }
        else {
            carts.value.push ({
                productId: id,
                count: 1,   
            })
        }
    }

    const productStore = useProductStore();
    const cartList = computed(() => {
        return carts.value.map((productCart) => {
            const product = productStore.findProductById(productCart.productId);
            return {
                id: product.id,
                name: product.name,
                img: product.img,
                price: product.price,
                count: productCart.count
            }
        })
    })

    const totalSum = computed(() => {
        return cartList.value.reduce((sum, product) => sum + (product.price * product.count), 0);
    })

    const removeFromCart = (id) => {
        const index = findIndexProductCartById(id);
        if(index != -1) {
            carts.value.splice(index, 1);
        }
    }

    return {
        carts,
        findIndexProductCartById,
        updateCountCartById,
        addToCart,
        cartList,
        totalSum,
        removeFromCart
    }
})