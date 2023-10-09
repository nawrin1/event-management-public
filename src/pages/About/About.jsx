
import image from '../../assets/fabio-oyXis2kALVg-unsplash.jpg'
import image1 from '../../assets/alexey-savchenko-k4Akpt5-Sfk-unsplash.jpg'
const About = () => {
    return (
        <div>
        <h2 className='text-center text-5xl font-bold font-Kanit'>ABOUT US</h2>

        <div className="max-h-screen max-w-6xl mx-auto flex mt-28 mb-52">
            
            <div className='hidden lg:block md:block'>
                <img src={image} alt="" />

            </div>
            <div>

            <p className="text-xl text-gray-400 font-Kanit text-center mt-5"> "We're not just event planners; we're passionate gamers and tech enthusiasts. We're on a mission to create unforgettable experiences that bring the gaming and tech communities together. What sets us apart is our deep understanding of these worlds. Whether it's organizing eSports tournaments, product launches, or conventions, we offer customized event solutions that cater to your needs. With a client-centric approach and a track record of excellence, we're the team you can trust to make your gaming and tech events truly special.</p>

            </div>
            
            
            
        </div>

        <div className="max-h-screen max-w-6xl mx-auto flex mt-28 mb-52 ">
            <div className='w-[50%] '> 

            <p className="text-xl text-gray-400 font-Kanit mt-6 text-center "> "Our mission is to unite tech and gaming enthusiasts, fostering innovation, connections, and unforgettable experiences. We're dedicated to creating events that inspire and educate, driving progress in these dynamic industries."</p>

            </div>
            
            <div className='hidden lg:block md:block  w-[50%]  '>
                <img className='w-3/4 pl-36 rounded-[9px]'src={image1} alt="" />

                

            </div>
 
            
            
            
        </div>
        </div>
    );
};

export default About;