// eslint-disable-next-line react/prop-types
const Button = ({ children,className}) => {
    return (

        <button
            className={` ${className} mt-6 w-full md:w-auto bg-secondary 
            px-4 py-3 rounded-md text-gray-50 flex items-center justify-center gap-2 hover:bg-purple-700 transition-all`}>
            {children}
        </button>
    );
};

export default Button;