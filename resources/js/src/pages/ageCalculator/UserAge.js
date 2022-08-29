import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

const UserAge = () => {
    const infoUserAge = useSelector((state) => state.age.calculatedAge);
    const navigate = useNavigate();
    useEffect(() => {
        if (!infoUserAge.alert) {
            navigate("/");
        }
    }, []);
    return (
        <Container
            style={{
                height: " calc(100vh - 61px)",
                display: "flex",
                justifyContent: "space-around",
            }}
        >
            <div className=" text-light d-flex flex-column     p-3 justify-content-center justify-center text-center ">
                <div>
                    <h2> العمر بالهجري</h2>
                    <span>
                        {infoUserAge.ageHj[2].year} سنه و شهر{" "}
                        {infoUserAge.ageHj[1].month} و يوم{" "}
                        {infoUserAge.ageHj[0].day}
                    </span>
                </div>
                <hr />
                <div>
                    <h2> العمر بالميلادي</h2>
                    <span>
                        {infoUserAge.ageGr[2].year} سنه و شهر{" "}
                        {infoUserAge.ageGr[1].month} و يوم{" "}
                        {infoUserAge.ageGr[0].day}
                    </span>
                </div>
            </div>
        </Container>
    );
};

export default UserAge;
