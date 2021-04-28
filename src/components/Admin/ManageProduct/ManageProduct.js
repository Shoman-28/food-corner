import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import SpinerLoader from "../../../SpinerLoader/SpinerLoader";
import "./ManageProduct.css";

const ManageProduct = () => {
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
    const removeItems = () => {
        fetch("https://vast-ocean-51129.herokuapp.com/home")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    //delete procduct
    const handleDeleteProduct = (id) => {
        fetch(`https://vast-ocean-51129.herokuapp.com/delete/${id}`, {
            method: "DELETE",
            headers: {
                "Containt-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    removeItems();
                }
            });
    };

    return (
        <div className="">
            <div className="row manage-product">
                <div className="col-md-12 sticky-top manage-product-title ">
                    <h3>Manage Product</h3>
                    <Table>
                        <thead>
                            <tr>
                                <td className="title-eliment">Decriptions</td>
                                <td className="title-eliment">Quantity</td>
                                <td className="title-eliment">Price</td>
                                <td className="title-eliment">Action</td>
                            </tr>
                        </thead>
                    </Table>
                </div>
                <div className="col-md-12">
                    {products.length === 0 ? (
                        <SpinerLoader />
                    ) : (
                        products.map((pd) => (
                            <Table>
                                <tbody>
                                    <tr>
                                        <td className="manage-product-name">
                                            {pd.name}
                                        </td>
                                        <td className="manage-product-quantity">
                                            {pd.pices}
                                        </td>
                                        <td className="manage-product-price">
                                            ${pd.price}
                                        </td>
                                        <td
                                            className="manage-product-delete"
                                            onClick={() => {
                                                handleDeleteProduct(pd._id);
                                            }}
                                        >
                                            <button>Delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;
