import React, { useContext } from "react";
import "./Loging.css";
import { userContext } from "../../App";
import {
    handleGoogleLoging,
    insializUserLoging,
} from "../firebase/FirebaseAuth";
import { Button } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";

const Loging = () => {
    const { setUser } = useContext(userContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    insializUserLoging();
    const handleGoogleSignIn = () => {
        handleGoogleLoging()
            .then((res) => {
                setUser(res);
                history.replace(from);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="signing-button">
            <div className="signing mt-5">
                <Button variant="primary" onClick={handleGoogleSignIn}>
                    Sign-ing
                </Button>
            </div>
        </div>
    );
};

export default Loging;
