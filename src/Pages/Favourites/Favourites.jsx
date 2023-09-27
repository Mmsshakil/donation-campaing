import { useEffect, useState } from "react";
import PhoneDonationCard from "../Phone/PhoneDonationCard";


const Favourites = () => {

    const [favourites, setFavourites] = useState([]);
    const [noFound, setNoFound] = useState(false);
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        const favouriteItems = JSON.parse(localStorage.getItem('favourites'));
        if (favouriteItems) {
            setFavourites(favouriteItems);
        }
        else {
            setNoFound('No data found');
        }
    }, [])

    // console.log(favourites);
    // console.log(isShow);

    return <div>
        {
            noFound ? <p className="flex justify-center items-center h-[80vh] text-xl font-bold text-red-600">{noFound}</p>
                :

                <div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 mx-2 lg:mx-0 mb-10">
                        {
                            isShow ? favourites.length && favourites?.map(phone => <PhoneDonationCard key={phone.id} phone={phone} ></PhoneDonationCard>)
                                :
                                favourites.length && favourites?.slice(0, 4).map(phone => <PhoneDonationCard key={phone.id} phone={phone} ></PhoneDonationCard>)
                        }
                    </div>

                    {!isShow && favourites.length > 4 &&   (
                        <button
                            onClick={() => setIsShow(true)}
                            className="font-semibold text-center bg-green-800 text-white p-3 rounded-md mx-auto block mb-10"
                        >
                            See More
                        </button>
                    )}




                </div>}</div>;
};

export default Favourites;