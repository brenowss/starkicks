import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { MdShoppingCart as Cart} from 'react-icons/md'
import { Card, CardContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import './styles.css';


const useStyles = makeStyles({
    root: {
      maxWidth: 275,
      marginBottom: 10,
      backgroundColor: "#f5f5f5",
      transition: 'all .6s ease',
      '&:hover': {
          backgroundColor: '#d3d3d3'
      },
    },
    productDesc: {
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        minHeight: 0,
        margin: '0 0 10px 0'
    },
    productName: {
        margin: '0 0 5px 0'
    },
    prices: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    beforePrice: {
        textDecoration: 'line-through',
        color: '#3f3f3f',
    },
    cartIcon: {
        cursor: 'pointer',
        transition: 'all .6s ease',
        boxSizing: 'border-box',
        borderRadius: '50%',
        padding: '4px',
        '&:hover': {
            border: '1px solid black',
            backgroundColor: '#fff'
        }
    }
  });

export default function Home() {
    const classes = useStyles();

    const [products, setProducts] = useState([]);

    async function loadProducts() {
        const response = await api.get('products');

        setProducts(response.data)
}

    useEffect(() => {
        loadProducts();
    }, [])
    return (
        <div className="wrapper">
            {products.map(product => 
            <Link to={{
                pathname: `/product/${product.product_name}`,
                state: {...product}
            }} key={product.id} >
                <Card className={classes.root}>
                    <CardContent>
                        <img src={require('../../assets/kicks/' + product.product_image)} alt={product.product_name} className="productImage" />
                        <h4 className={classes.productName}>{product.product_name}</h4>
                        <h5 className={classes.productDesc}>{product.product_description}</h5>
                        <div className={classes.prices}>
                            <h4>R$ {product.product_price}</h4>
                            <h4 className={classes.beforePrice}>R$ {parseInt(product.product_price) + 120 + ',' + 99}</h4>
                            <Cart className={classes.cartIcon} size={26} />
                        </div>
                    </CardContent>
                </Card>
            </Link>
            )}
        </div>
    )
}