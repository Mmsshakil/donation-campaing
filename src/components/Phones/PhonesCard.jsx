import { Link } from "react-router-dom";


const PhonesCard = ({ phone }) => {

    // console.log(phone);
    const { id, img, category, title, color } = phone;
    // const textColor = color;
    const cardBackgroundColor = color.backgroundColor;
    const textColor = color.categoryTitleColor;
    const categoryBackground = color.categoryColor;
    // console.log(textColor);

    return (

        <div className="flex justify-center mb-10">
            <Link to={`/phones/${id}`}>
                <div style={{ background: cardBackgroundColor, color: textColor }} className=" flex w-72 flex-col rounded-xl h-80">
                    <div className="mb-5">
                        <img
                            src={img}
                            alt="img-blur-shadow"
                        />
                    </div>
                    <div className="p-6" >
                        <div style={{ background: categoryBackground }} className="w-20 text-center rounded-md">
                            <p className="text-sm font-medium p-2">
                                {category}
                            </p>
                        </div>

                        <h5 className="mb-2 text-base font-bold mt-2">
                            {title}
                        </h5>
                    </div>

                </div>
            </Link>

        </div>
    );
};

export default PhonesCard;