import bannerImg from '../assets/banner-img.png'

export default function Banner() {
    return (
        <div>
            <div className="hero h-72 mb-10">
                <img src={bannerImg} alt="" />
                <div className="hero-overlay bg-opacity-0"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-3xl">
                        <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                        <p className="mb-5">
                            Calories in a recipe refer to the total amount of energy that the ingredients in the recipe provide when consumed. The calorie content of a dish depends on the type and quantity of each ingredient used.
                        </p>
                        <div className='flex gap-5 items-center justify-center'>
                            <button className="btn btn-outline hover:bg-green-400 text-white font-bold">Explore Now</button>
                            <button className="btn btn-outline hover:bg-green-400 text-white font-bold">Our Feedback</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
