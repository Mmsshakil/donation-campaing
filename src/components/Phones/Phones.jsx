import PropTypes from 'prop-types';
// here phones means all cards

import PhonesCard from "./PhonesCard";

const Phones = ({phones}) => {

    // console.log(phones);
    
    return (
        <div>
            <h2>All cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-center gap-5">
                {
                    phones.length && phones?.map(phone => <PhonesCard key={phone.id} phone={phone}></PhonesCard>)
                }
            </div>
        </div>
    );
};

Phones.propTypes = {
    phones: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired, // Assuming id is a number and is required
        // Add more PropTypes validation for other properties in the phone object
      })
    ).isRequired,
  };
  

export default Phones;