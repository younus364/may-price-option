import { FaCheckCircle } from "react-icons/fa";


const Feature = ({feture}) => {
    return (
        <div>
            <h4 className="flex items-center "><FaCheckCircle className="text-green-400 mr-2" />{feture}</h4>
        </div>
    );
};


   
export default Feature;