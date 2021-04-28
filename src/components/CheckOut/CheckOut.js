import React, { useContext, useEffect, useState } from "react";
import "./CheckOut.css";
import { Button, Table } from "react-bootstrap";
import { useParams } from "react-router";
import { userContext } from "../../App";

const CheckOut = () => {
    const { user } = useContext(userContext);
    const { id } = useParams();
    const { displayName, email } = user;
    const [buyProduct, setBuyProduct] = useState({});
    const [checkOut, setCheckOut] = useState(false);
    const { price, name, image, pices } = buyProduct;
    const date = new Date();

    useEffect(() => {
        fetch(`https://vast-ocean-51129.herokuapp.com/buyProduct/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setBuyProduct(data);
            });
    }, [id]);

    const handleCheckOut = () => {
        const CheckOutDetails = {
            price,
            name,
            image,
            pices,
            displayName,
            email,
            date,
        };

        fetch("https://vast-ocean-51129.herokuapp.com/CheckOut", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(CheckOutDetails),
        })
            .then((res) => res.json())
            .then((data) => {
                setCheckOut(data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="container">
            {checkOut ? (
                <h1>Your Order is successfully placed</h1>
            ) : (
                <>
                    <h1>Check out</h1>
                    <Table striped bordered hover>
                        <thead className="header">
                            <tr>
                                <td className="header-eliment">Decriptions</td>
                                <td className="header-eliment">Quantity</td>
                                <td className="header-eliment">Price</td>
                            </tr>
                        </thead>
                        <tbody className="table-body">
                            <tr className="product-details">
                                <td>{name}</td>
                                <td>1</td>
                                <td>${price}</td>
                            </tr>
                            <tr>
                                <td colSpan="2">Total</td>
                                <td className="product-details">${price}</td>
                            </tr>
                        </tbody>
                    </Table>
                    <Button variant="primary" onClick={handleCheckOut}>
                        Check Out
                    </Button>
                </>
            )}
        </div>
    );
};

export default CheckOut;
