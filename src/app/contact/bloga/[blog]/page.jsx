

const page = ({params}) => {
   
    return (
        <div className="h-screen flex items-center justify-center">
            details {params.blog} 
        </div>
    );
};

export default page;