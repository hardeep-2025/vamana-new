import EnquireForm from "../../Layouts/EnquireForm/EnquireForm"

const PriceList = () => {
    return(
        <section className="home-pricelist-section py-16 px-2.5" id="pricelist">
            <div className='max-w-6xl m-auto'>
                <div className="flex flex-col text-left gap-5">
                    <h3 className="text-2xl sm:text-4xl font-semibold text-center mb-3">Latest Price List</h3>

                    <div className="w-full max-w-3xl mx-auto">
                        <EnquireForm title="'Vamana Flats' Latest Price List" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PriceList