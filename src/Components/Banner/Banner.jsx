import banner from '../../assets/banner.jpg'
const Banner = () => {
    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img src={banner} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold"> Your Dream Wedding!</h1>
            <p className="py-6">
            Let us make your special day unforgettable. We offer a range of services, from venue rentals to catering, photography, and entertainment, all designed to create the wedding of your dreams. Our dedicated team is here to bring your vision to life, ensuring every detail is perfect. Start planning your dream wedding with us today.

            </p>
            <button className="btn btn-primary">Plan your wedding</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;