import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const onSubmit = (data) => {
        const eventData = {
            name: data.productName,
            pices: data.productQuantity,
            price: data.productPrice,
            image: imageURL,
        };

        fetch("https://vast-ocean-51129.herokuapp.com/addProduct", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(eventData),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleImageUploade = (event) => {
        const imageData = new FormData();
        imageData.set("key", "4850594385c2168e5de04af7b936cba0");
        imageData.append("image", event.target.files[0]);

        axios
            .post("https://api.imgbb.com/1/upload", imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <div className="mt-3">
            <h3>Add Product</h3>
            <div className="mt-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-6">
                            <h5>Product Name</h5>
                            <input
                                name="productName"
                                type="text"
                                ref={register({ required: true })}
                                placeholder="Enter Name"
                            />
                        </div>
                        <div className="col-md-6">
                            <h5>Pices</h5>
                            <input
                                name="productQuantity"
                                ref={register({ required: true })}
                                type="text"
                                placeholder="Pices"
                            />
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5>Add Price</h5>
                            <input
                                name="productPrice"
                                ref={register({ required: true })}
                                type="text"
                                placeholder="Add Price"
                            />
                        </div>
                        <div className="col-md-6">
                            <h5>Add Photo</h5>
                            <input
                                onChange={handleImageUploade}
                                type="file"
                                placeholder="Enter Name"
                            />
                        </div>
                    </div>
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
