function searchedProduct<t>(products: t[]): t {
    return products[3]
}

const searchedProducts = <T,>(products: T[]): T => {
    return products[4]
}

// read documentation for more explaination