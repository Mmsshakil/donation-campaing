
const PhoneCard = ({ phone }) => {

    const { id, img, category, title,description , color, price } = phone;
    // const btnBackgroundColor = color.categoryTitleColor;
    console.log(color);


    // console.log(id);

    return (
        <div className="container max-w-7xl mx-auto mt-5">
            <div>
                <img className="object-cover w-full h-[500px]" src={img} alt="" />
                <div className="relative -top-24 bg-black opacity-60 h-24 text-white ">
                    <button style={{ background: color?.categoryTitleColor}} className="ml-5 my-6 p-2 rounded-lg">Donate ${price}</button>
                </div>
            </div>
            <div>
                <div className="font-bold text-4xl mb-3">{title}</div>
                <p className="text-base">{description}</p>
            </div>
        </div>
    );
};

export default PhoneCard;