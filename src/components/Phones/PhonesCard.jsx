

const PhonesCard = ({ phone }) => {

    // console.log(phone);
    const { img, category, title, color } = phone;
    // const textColor = color;
    const cardBackgroundColor = color.backgroundColor;
    const textColor = color.categoryTitleColor;
    const categoryBackground = color.categoryColor;
    console.log(cardBackgroundColor);

    return (
        <div>
            <div style={{ background: cardBackgroundColor, color: textColor }} className=" flex w-64 flex-col rounded-xl h-72">
                <div className="mb-5">
                    <img
                        src={img}
                        alt="img-blur-shadow"
                    />
                </div>
                <div className="p-6" >
                    <div style={{background:categoryBackground}} className="w-20 text-center rounded-md">
                        <p className="text-sm font-medium p-2">
                            {category}
                        </p>
                    </div>

                    <h5 className="mb-2 text-base font-bold">
                        {title}
                    </h5>
                </div>

            </div>
        </div>
    );
};

export default PhonesCard;