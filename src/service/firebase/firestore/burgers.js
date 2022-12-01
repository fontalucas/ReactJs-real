import { db } from '..'
import { getDocs, collection, query, where, getDoc, doc } from 'firebase/firestore'
import { createAdapterBurgerFromFirestore } from '../../../adapter/burgerAdapter'

export const getBurgers = (categoryId) => {

    return new Promise((resolve, reject) => {
        const collectionRef = categoryId 
                ? query(collection(db, 'burgers'), where('category', '==', categoryId))
                : collection(db, 'burgers')
    
            getDocs(collectionRef)
                .then(response => {
                        const productsAdapted = response.docs.map(doc => {
                        return createAdapterBurgerFromFirestore(doc)
                })
                resolve(productsAdapted)
            }).catch(error => {
                reject(error)
            })
    })
}

export const getBurger = (productId) => {

    return new Promise((resolve, reject) => {
    const docRef = doc(db, 'burgers', productId)
            getDoc(docRef)
                .then(response => {
                    const data = response.data()
                    const productAdapted = { id: response.id, ...data }
                    resolve(productAdapted)
            })
            .catch(error => {
                reject(error)
            })

        })
    }
