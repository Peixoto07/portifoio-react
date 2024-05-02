// eslint-disable-next-line react/prop-types
const SectionTitle = ({title, subtitle, className}) => {
    return (
        
        <div className={` ${className} flex flex-col gap-2`}>
                <span className="font-mono text-lg text-emerald-400" >{`../${subtitle}`}</span>
                <h3 className="text-3xl font-medium" >{title}</h3>
        </div>
    );
};
 
export default SectionTitle;