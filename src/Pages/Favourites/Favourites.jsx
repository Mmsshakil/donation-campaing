import { useEffect, useState } from "react";
import PhoneDonationCard from "../Phone/PhoneDonationCard";


const Favourites = () => {

    const [favourites, setFavourites] = useState([]);
    const [noFound, setNoFound] = useState(false);

    useEffect(() => {
        const favouriteItems = JSON.parse(localStorage.getItem('favourites'));
        if (favouriteItems) {
            setFavourites(favouriteItems);
        }
        else {
            setNoFound('No data found');
        }
    }, [])

    console.log(favourites);

    return <div>
        {
            noFound ? <p className="flex justify-center items-center h-[80vh]">{noFound}</p>
                :
                <div className="grid grid-cols-2 gap-8 mt-10">
                    {favourites.map(phone => <PhoneDonationCard key={phone.id} phone={phone} ></PhoneDonationCard>)}
                </div>

        }


    </div>;
};

export default Favourites;