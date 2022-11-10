const burgers = [
    
    {id:"1", name: "Rey Arturo", stock: 15, price: 900, img: "https://i.ibb.co/Br3RYxT/reyarturo.jpg", category: "clasica"},
    {id:'2', name: 'Magnus', stock: 1, price: 500, img: 'https://i.ibb.co/m9np45J/magnus.jpg', category: 'clasica'},
    
    
    {id:"3", name: "Maxima", stock: 0, price: 850, img: 'https://i.ibb.co/fnkJsMQ/MAXIMA.jpg', category: 'clasica'},
    {id:"4", name: "Isabel", stock: 0, price: 850, img: 'https://i.ibb.co/GdXJjM7/ISABEL.jpg', category: 'clasica'},
    {id:"5", name: "Victoria", stock: 0, price: 850, img: 'https://i.ibb.co/SJV9DXm/victoria.jpg', category: 'clasica'},
    
    
    {id:"6", name: "William", stock: 10, price: 500, img: 'https://i.ibb.co/VVHKD7J/william.jpg', category: 'chesse'},
    {id:"7", name: "Charlotte", stock: 10, price: 500, img: 'https://i.ibb.co/GdXJjM7/ISABEL.jpg', category: 'chesse'},
    
    
    {id:"8", name: "Smoke Shack", stock: 15, price: 1000, img: 'https://i.ibb.co/hfW1BsZ/smokeshacj.jpg', category: 'homenaje'},
    {id:"9", name: "Fried Onion", stock: 15, price: 900, img: 'https://i.ibb.co/rspLDsP/friedonion.jpg', category: 'homenaje'}

]

export const getProduct = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(burgers)
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(burgers.find(prod => {
                return prod.id === id
            }))
        }, 500)
    })
}

export const getProductByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(burgers.filter(prod => prod.category === categoryId))
        }, 500)
    })
}
