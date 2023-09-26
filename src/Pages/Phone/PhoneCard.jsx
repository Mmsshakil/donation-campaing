import swal from "sweetalert";

const PhoneCard = ({ phone }) => {

    const { id, img, category, title, description, color, price } = phone;
    // const btnBackgroundColor = color.categoryTitleColor;
    // console.log(color);

    const handleAddToFavourite = () => {
        console.log(phone);

        const addedFavouritesArray = [];
        // get the string and convert as a object by parse
        const favouriteItems = JSON.parse(localStorage.getItem('favourites'))

        // console.log(favouriteItems);

        if (!favouriteItems) {
            addedFavouritesArray.push(phone)
            localStorage.setItem('favourites', JSON.stringify(addedFavouritesArray));
            swal("Success!", "Donation Added", "success");
        }
        else {

            const isExits = favouriteItems.find(phone => phone.id === id);
            if (!isExits) {
                addedFavouritesArray.push(...favouriteItems, phone)
                localStorage.setItem('favourites', JSON.stringify(addedFavouritesArray));
                swal("Success!", "Donation Added", "success");

            }
            else {
                console.log('already exixts');
                swal("Faild!", "Already Donated", "error");
            }


        }

        // set the object as string by stringfy
        // localStorage.setItem("test", JSON.stringify(phone));


    }

    // console.log(id);

    return (
        <div className="container max-w-7xl mx-auto mt-10">
            <div className="">
                <img className="object-cover w-full h-[500px] rounded-md" src={img} alt="" />

                <div className="relative -top-24 text-white font-bold">
                    <div className=" bg-black opacity-60 h-24 ">

                    </div>
                    <button onClick={handleAddToFavourite} style={{ background: color?.categoryTitleColor }} className="ml-5 my-6 p-2 rounded-lg absolute top-1">Donate ${price}</button>
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