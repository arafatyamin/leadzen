import React, {  useEffect, useState } from 'react';
import './ProductDetails.css';

const ProductDetails = () => {

    const [products, setProducts] = useState([]);

    const [visible, setVisible] = useState(false);
    const [itemsId, setItemsId] = useState('')

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[setProducts])
    
    return (
        <div className="container">
            <h1>products detail</h1>
            <div className="main-div">
            {
                products.map(product => <div
                product={product} key={product.id} className="card-container">
                    <div className="main-info">
                    <p>{product.name}</p>
                    <div>
                    <h3>contact</h3>
                    <p>{product.company.name}</p>
                    </div>
                    <div>
                    <h3>city</h3>
                    <p>{product.address.city}</p>
                    </div>
                    <div>
                    <h3>street</h3>
                    <p>{product.address.street}</p>
                    </div>

                    <button onClick={() => {
                        setVisible(!visible)
                        setItemsId(product.id)
                    }}>show details</button>
                    
                    </div>
                     {
                        visible && itemsId === product.id && <div className="details-section content">
                        <h4>Description</h4>
                        <p>{product.company.bs+'. '+product.company.catchPhrase}</p>
                        <div className='Contact-details'>
                            <div>
                            <h4>Contact Person</h4>
                            <p>{product.name}</p>
                            </div>
                            <div>
                            <h4>Designation</h4>
                            <p>{product.username}</p>
                            </div>
                            <div>
                            <h4>Emails</h4>
                            <p>{product.email}</p>
                            </div>
                            <div>
                            <h4>Phones</h4>
                            <p>{product.phone}</p>
                            </div>
                            <div>
                            <h4>Address</h4>
                            <p>{product.address.suite}</p>
                            </div>
                            <div>
                            <h4>City</h4>
                            <p>{product.address.city}</p>
                            </div>
                            <div>
                            <h4>State</h4>
                            <p>{product.address.street}</p>
                            </div>
                            <div>
                            <h4>Country</h4>
                            <p>{product.address.country}</p>
                            </div>
                        </div>
                    </div>
                     } 
                </div>)
            }
            </div>
        </div>
    );
};

export default ProductDetails;