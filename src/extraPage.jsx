// ... (your existing code)

return (
    <div>
      {noFound ? (
        <p className="flex justify-center items-center h-[80vh]">{noFound}</p>
      ) : (
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 mx-2 lg:mx-0">
            {isShow
              ? favourites.map((phone) => (
                  <PhoneDonationCard key={phone.id} phone={phone}></PhoneDonationCard>
                ))
              : favourites.slice(0, 4).map((phone) => (
                  <PhoneDonationCard key={phone.id} phone={phone}></PhoneDonationCard>
                ))}
          </div>
          {!isShow && ( // Conditionally render the button if isShow is false
            <button
              onClick={() => setIsShow(true)} // Set isShow to true to show all items
              className="font-semibold text-center bg-green-800 text-white p-3 rounded-md mx-auto block"
            >
              See More
            </button>
          )}
        </div>
      )}
    </div>
  );
  