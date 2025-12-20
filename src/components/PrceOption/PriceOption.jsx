
import PropTypes from "prop-types";
import Feature from "../Feature/Feature";
const PriceOption = ({option}) => {
    const {name,price_per_month, features} = option;
    return (
        <div className=" bg-blue-500 rounded p-4 text-white flex flex-col">
            <h2>
                <span className="text-7xl font-extrabold
                ">{price_per_month}</span>
                <span className="text-3xl">/mons</span>
            </h2>
            <h4 className=" text-3xl">{name}</h4>
            <div className="flex-grow">
                {
                features.map((feature,index)=><Feature key={index} feture={feature}></Feature>)
            }
            
            </div>
            <button className="btn mt-2 font-bold bg-green-500 w-full hover:bg-green-600">By Naw</button>
        </div>
    );
};

PriceOption.protoType ={
    option:PropTypes.object
}
export default PriceOption;