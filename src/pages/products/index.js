import React from 'react'
import Seo from '@components/Seo'
import Product from '@components/Product'
import products from '@data/products.json'
function Products() {
    return (
        <>
            <Seo title='Products - Pathways Telematics' />
            {products.map(product => <Product product={product} />)}
        </>
    )
}

export default Products
