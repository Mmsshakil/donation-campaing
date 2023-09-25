

const PhonesCard = ({phone}) => {

    // console.log(phone);
    const {img,category,title, color} = phone;
    // const textColor = color;
    console.log(color.backgroundColor);

    return (
        <div>
            <div className="relative flex w-64 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4  h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white">
                    <img
                        src={img}
                        alt="img-blur-shadow"
                        
                    />
                </div>
                <div className="p-6">
                  
                    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                       {category}
                    </p>
                    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {title}
                    </h5>
                </div>
            
            </div>
        </div>
    );
};

export default PhonesCard;