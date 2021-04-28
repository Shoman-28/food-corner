import React, { useState } from "react";
import "./Home.css";
import AddProduct from "../AddProduct/AddProduct";
import EditProduct from "../EditProduct/EditProduct";
import ManageProduct from "../ManageProduct/ManageProduct";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThLarge, faPlus, faPen } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const AdminHome = () => {
    const [admin, setAddmin] = useState("addProduct");

    const handleManageProduct = () => {
        setAddmin("manageProduct");
    };
    const handleAddProduct = () => {
        setAddmin("addProduct");
    };
    const handleEditProduct = () => {
        setAddmin("editProduct");
    };

    return (
        <div className="container admin-home">
            <div className="row">
                <div className="col-md-3 col-sm-12 admin fixed-top ml-5">
                    <Link to="/home" className="header-taitel">
                        Food Corner
                    </Link>

                    <div className="col-sm-12 addmin-button">
                        <button onClick={handleManageProduct}>
                            <FontAwesomeIcon icon={faThLarge} /> Manage Product
                        </button>
                    </div>
                    <div className="col-sm-12 addmin-button">
                        <button onClick={handleAddProduct}>
                            <FontAwesomeIcon icon={faPlus} /> Add Product
                        </button>
                    </div>
                    <div className="col-sm-12 addmin-button">
                        <button onClick={handleEditProduct}>
                            <FontAwesomeIcon icon={faPen} /> Edit Product
                        </button>
                    </div>
                </div>
                
                <div className="col-md-8 admin-details">
                    {admin === "manageProduct" && (
                        <ManageProduct></ManageProduct>
                    )}
                    {admin === "addProduct" && <AddProduct></AddProduct>}
                    {admin === "editProduct" && <EditProduct></EditProduct>}
                </div>
            </div>
        </div>
    );
};

export default AdminHome;
