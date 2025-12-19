
import PropTypes from "prop-types";
const PriceOption = ({option}) => {
    const {name,price, features} = option;
    return (
        <div>
            <h3>{name}</h3>
        </div>
    );
};

PriceOption.protoType ={
    option:PropTypes.object
}
export default PriceOption;