import "./Products.css";
import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import SpinerLoader from "../../SpinerLoader/SpinerLoader";

const Products = () => {
    const history = useHistory();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://vast-ocean-51129.herokuapp.com/home")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleBuyNow = (id) => {
        history.push("/checkOut/" + id);
    };

    return (
        <div className="products container">
            {products.length === 0 ? (
                <SpinerLoader />
            ) : (
                products.map((pd) => (
                    <Card
                        className="product-items mt-4 mr-4"
                        style={{ width: "18rem" }}
                    >
                        <Card.Img
                            className="product-img"
                            variant="top"
                            src={pd.image}
                        />
                        <Card.Body>
                            <Card.Title className="product-name">
                                {" "}
                                {pd.name}
                            </Card.Title>
                            <small className="mr-5 price">${pd.price}</small>
                            <Button
                                variant="primary"
                                onClick={() => handleBuyNow(pd._id)}
                                className="ml-5"
                            >
                                Bay Now
                            </Button>
                        </Card.Body>
                    </Card>
                ))
            )}
        </div>
    );
};

export default Products;
