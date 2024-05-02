// eslint-disable-next-line react/prop-types
const TecBadge = ({children}) => {
    return ( 
<span className="whitespace-nowrap  rounded-lg  bg-emerald-900/80 px-2.5 py-1 text-sm text-emerald-100">
{children}
</span>

     );
};
 
export default TecBadge;