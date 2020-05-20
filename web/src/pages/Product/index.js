import React, { useState, useEffect } from 'react';
import { MdShoppingCart as Cart} from 'react-icons/md'
import { Card, CardContent } from '@material-ui/core';


export default function Product(props) {
    const [product, setProduct] = useState({});

    function loadProduct() {
        setProduct(props.location.state);     
    }

    useEffect(() => {
        loadProduct();
    })
    return (
         <Card>
                    <CardContent>
                    <img src={'static/media/' + product.product_image} alt={product.product_name} className="productImage" />
                    <h4>{product.product_name}</h4>
                    <h5>{product.product_description}</h5>
                    <div>
                        <h4>R$ {product.product_price}</h4>
                        <h4>R$ {parseInt(product.product_price) + 120 + ',' + 99}</h4>
                        <Cart size={26} />
                    </div>
                    </CardContent>
                </Card>
    )
}