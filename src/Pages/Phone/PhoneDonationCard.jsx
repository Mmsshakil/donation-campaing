

const PhoneDonationCard = ({ phone }) => {

    const { id, img, category, title, description, color, price } = phone;

    console.log(phone);
    return (


        <div className="flex w-full max-w-2xl flex-row rounded-xl shadow-md" style={{ background: color?.backgroundColor }}>
            <div className="m-0 w-2/5  overflow-hidden rounded-xl rounded-r-none">
                <img
                    src={img}
                    alt="image"
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="p-6">
                <h6 className="text-base font-semibold py-3 w-20 rounded-md text-center mb-2" style={{ background: color?.categoryColor, color: color?.categoryTitleColor }}>
                    {category}
                </h6>
                <h4 className="text-xl font-bold mb-2">
                    {title}
                </h4>
                <p className="text-xl font-semibold mb-2" style={{ color: color?.categoryTitleColor }}>
                    ${price}
                </p>
                <button className="text-white text-lg font-semibold py-2 px-4 rounded-md" style={{ background: color?.categoryTitleColor }}>View Details</button>
            </div>
        </div>


    );
};

export default PhoneDonationCard;