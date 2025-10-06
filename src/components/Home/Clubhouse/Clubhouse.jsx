import { LazyLoadImage } from 'react-lazy-load-image-component';
import clubhouseImg from '../../../assests/images/clubhouse-img.jpg';
import locationOverlay from '../../../assests/images/location-overlay.png';

const Clubhouse = () => {

    const clubhouse = [
        {
            title: "Sports & Recreation",
            values: [
                "Tennis",
                "Badminton",
                "Billiards",
                "Table Tennis",
                "Cards Room",
                "All Weather Swimming Pool",
                "Kids Pool",
            ]
        },
        {
            title: "Health & Fitness",
            values: [
                "Gymnasium",
                "Sauna",
                "Steam",
                "Jacuzzi",
            ]
        },
        {
            title: "Food & Beverages",
            values: [
                "Restaurant",
                "Bar",
                "Open Air Coffee Shop",
            ]
        },
        {
            title: "Additional Facilities",
            values: [
                "Mini Theatre",
                "Kids Corner",
                "Library",
                "Snooker & Recreation Room",
            ]
        }
    ]

    return(
        <section className="home-clubhouse-section bg-black text-white py-8 md:py-16 px-2.5 relative" id="clubhouse">
            <div className='max-w-6xl m-auto z-10 relative'>
                <div className="flex flex-col-reverse md:flex-row gap-7 lg:gap-14">

                    <div className="w-full md:1/2 lg:w-2/5 pt-12 md:pt-0">
                        <LazyLoadImage
                            src={clubhouseImg}
                            alt='Location'
                            className='h-full object-cover object-center w-full'
                        />
                    </div>
                    <div className="w-full md:1/2 lg:w-3/5 flex flex-col gap-5">
                        <h2 className="text-2xl sm:text-4xl font-semibold text-left">State of the art clubhouse facilities</h2>
                        <div className='flex flex-row flex-wrap mt-10 gap-y-10'>
                           {clubhouse.map((index, i) => (
                                <div className='flex flex-col pr-10 w-full lg:w-1/2 gap-2' key={i}>
                                    <h3 className='text-lg font-semibold mb-3'>{index.title}</h3>
                                    {index.values.map((subitem,i) => (
                                        <p className='text-sm text-gray-300' key={i}>{subitem}</p>
                                    ))}
                                </div>
                            ))} 
                        </div>
                        
                    </div>
                    
                </div>
            </div>
            <LazyLoadImage
                src={locationOverlay}
                alt='Location Overlay'
                className='h-full object-cover object-center w-full absolute top-0 left-0 opacity-15'
            />
        </section>
    )
}

export default Clubhouse