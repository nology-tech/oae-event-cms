import React from "react";
import Button from "../../Button/Button";
import "../../../assets/styles/base/_typography.scss";
import "../../../assets/styles/_variables.scss";
import "../PageOne/PageOne.scss";

const PageOne = () => {
    return <div>
                <h1 className="title">Forgotten Your</h1>
                <h1 className="title--orange">Password.</h1>
                <h5>Please eneter your email address below to reset </h5>
        <Button/>
    </div>
}

export default PageOne;