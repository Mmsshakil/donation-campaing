
const Banner = () => {
    return (
        <div className="hero md:min-h-[300px] lg:min-h-[600px] mb-10 lg:mb-24" style={{ backgroundImage: 'url(https://i.ibb.co/x1KRTKb/Rectangle-4281.png?fbclid=IwAR3ADECL0youUhY3iFIJgnSY0zpIs6XD6PJCPoOJAdd_It4l1uzBnJDusgw)' }}>
            <div className="hero-overlay bg-slate-200 bg-blend-screen bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-3 lg:mb-9 text-black text-2xl lg:text-5xl font-bold">I Grow By Helping People In Need</h1>
                    <div className="join flex justify-center">
                        <input className="input input-bordered join-item w-2/4" placeholder="Search here.... " />
                        <button className="btn bg-[#FF444A] text-white font-semibold px-4 py-4 join-item border-0 rounded-r-lg">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;