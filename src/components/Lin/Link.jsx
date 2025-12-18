import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
       <li className="mr-8 md:hidden" key={route.id}>
            <a href={route.path}>{route.name }</a>
           </li>
    );
};
Link.protoType={
    route:PropTypes.object
}
export default Link;