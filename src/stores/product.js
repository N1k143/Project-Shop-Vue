import { defineStore } from 'pinia'
import { ref } from 'vue';
import { computed } from 'vue';

export const useProductStore = defineStore('product', () => {
    const products = ref([
        {
            id: 1,
            name: 'Asus ROG STRIX Z690-E',
            img: 'https://api.technodom.kz/f3/api/v1/images/800/800/256710_1.jpg',
            price: 300,
            category: 'Mather Board',
            discription: 'This name, also referred to as id, is necessary and is used by Pinia to connect the store to the devtools. Naming the returned function use... is a convention across composables to make its usage idiomatic.',
            publish_at: '25.11.2024'
        },
        {
            id: 2,
            name: 'Gigabyte GeForce RTX 4060 Ti',
            img: 'https://ir-3.ozone.ru/s3/multimedia-0/c1000/6660773772.jpg',
            price: 700,
            category: 'GPU',
            discription: 'This name, also referred to as id, is necessary and is used by Pinia to connect the store to the devtools. Naming the returned function use... is a convention across composables to make its usage idiomatic.',
            publish_at: '21.03.2024'
        },
        {
            id: 3,
            name: 'Intel Core i9-12900K',
            img: 'https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/intel_bx8071512900k_core_i9_12900k_8_core_lga_1635335191_1663644.jpg',
            price: 389,
            category: 'CPU',
            discription: 'This name, also referred to as id, is necessary and is used by Pinia to connect the store to the devtools. Naming the returned function use... is a convention across composables to make its usage idiomatic.',
            publish_at: '25.02.2024'
        },
        {
            id: 4,
            name: 'Kingston 64 ГБ DDR 4 3600 МГц',
            img: 'https://forcecom.kz/upload/iblock/c9a/gzo7dgnww2qb7gauh0w11tsyjn8dzq7e.webp',
            price: 500,
            category: 'RAM',
            discription: 'This name, also referred to as id, is necessary and is used by Pinia to connect the store to the devtools. Naming the returned function use... is a convention across composables to make its usage idiomatic.',
            publish_at: '15.11.2024'
        },

    ]);

    const productFilteredByCategoryName = computed(() => {
        return(category, searchText) => {
            if(category) {
                return products.value.filter((product) => product.category === category);
            }
            if (searchText){
                return products.value.filter((product) => product.name.toLowerCase().includes(searchText.toLowerCase()));
            }
            
            return products.value;
        }
    })
    const findProductById = computed(() => {
        return (id) => {
            return products.value.find((product) => product.id == id);
        }
    })

    return { 
        products,
        productFilteredByCategoryName,
        findProductById
    };
});