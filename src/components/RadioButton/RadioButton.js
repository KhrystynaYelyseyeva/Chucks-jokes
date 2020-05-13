import React from "react";
import PropTypes from "prop-types";
import "./RadioButton.css";

const RadioButton = ({name, handelRadio, value}) => {
    return (
        <label className="RadioButton">
            {name}
            <input onChange={() => handelRadio(value)} name="search-type" value={value} type="radio"/>
            <span></span>
        </label>
    )
}


RadioButton.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    handelRadio: PropTypes.func,
};

RadioButton.defaultProps = {
    name: '',
    value: '',
    handelRadio: () => {
    },
};

export default RadioButton;