import Lightbox from 'yet-another-react-lightbox';
import { Dialog } from '@mui/material';
import EnquireForm from '../../Layouts/EnquireForm/EnquireForm';
import siteplan from '../../../assests/images/Club-zaira.jpg';
import { Fullscreen, Zoom } from 'yet-another-react-lightbox/plugins';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const ClubZaira = () => {
    const [openMaster, setOpenMaster] = useState(false);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <section className="home-ClubZaira-section py-16 px-2.5" id="clubzaira">
                <div className='max-w-6xl m-auto'>
                    <div className="flex flex-col text-left gap-5">
                        <h3 className="text-2xl sm:text-4xl font-semibold text-center mb-3">Club Zaira - Live the Moment</h3>

                        <div className="flex flex-col md:flex-row items-center gap-8 ">



                            <div className="w-full md:w-1/2 flex flex-col gap-5">
                                <p className="text-sm"><b>Vamana Arvindam Zirakpur</b> proudly introduces Club Zaira, the premier
                                    clubhouse in the area, boasting an impressive 30,000 square feet of space
                                    designed for relaxation and recreation.</p>
                                <p className="text-sm">Club Zaira is equipped with an array of modern amenities that cater to a
                                    luxurious lifestyle. The state-of-the-art gym features the latest fitness equipment,
                                    ensuring you can maintain your workout routine with ease. For those looking to
                                    unwind, the grand rooftop swimming pool offers stunning views and a serene
                                    atmosphere, perfect for relaxation and leisure.
                                </p>
                                <p className="text-sm">In addition to these facilities, Club Zaira includes a variety of other luxurious
                                    features, such as a spa, a multipurpose lounge, and dedicated spaces for social
                                    gatherings and events. Residents can also enjoy activities like yoga classes,
                                    indoor games, and more, providing a well-rounded experience that promotes
                                    both fitness and social interaction.
                                </p>
                                <p className="text-sm">With its thoughtful design and comprehensive amenities, including the
                                    magnificent swimming pool, Club Zaira truly brings comfort and luxury to its
                                    users, creating an unparalleled environment for leisure and community
                                    engagement.</p>
                                <button tabIndex='-1' className="w-max text-primary-yellow border-2 border-primary-yellow  hover:bg-primary-yellow mx-auto mt-5 hover:text-white font-bold uppercase text-xs tracking-widest py-2.5 sm:py-3.5 px-3.5 sm:px-[22px] 1xl:px-8" onClick={handleOpen}>Enquire for Free Site Visit</button>
                            </div>
                            <div className="w-full md:w-1/2 flex flex-col gap-5">
                                <img src={siteplan} alt='Vamana Group Apartment Exterior' className='w-full h-full object-cover border-4 border-primary-yellow rounded-3xl cursor-pointer' onClick={() => setOpenMaster(true)} />
                                <Lightbox
                                    open={openMaster}
                                    close={() => setOpenMaster(false)}
                                    slides={[
                                        { src: siteplan }
                                    ]}
                                    plugins={[Fullscreen, Zoom]}
                                    carousel={{ finite: 1 }}

                                    render={{
                                        buttonPrev: undefined,
                                        buttonNext: undefined,
                                    }}
                                    width="100%"
                                    styles={{ slide: { marginTop: "20px" }, toolbar: { background: '#00000054', width: '100%' }, icon: { color: '#fff' } }}
                                    controller={{ closeOnBackdropClick: true }}
                                    zoom={{
                                        maxZoomPixelRatio: 3,
                                    }}
                                    className="single-lightbox"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Dialog
                open={open}
                onClose={handleClose}
                className="form_popup"
                aria-hidden="false"
                sx={{
                    "& .MuiDialog-container": {
                        "& .MuiPaper-root": {
                            width: "100%",
                            maxWidth: "450px",
                            borderRadius: "30px",
                            backgroundColor: "#f7f7f7",
                            padding: "15px",
                        },
                    },
                }}
                aria-modal="true"
            >
                <div className="flex flex-col px-2.5 popup-form">
                    <div className="flex justify-end">
                        <FontAwesomeIcon icon={faClose} className="text-2xl cursor-pointer" onClick={handleClose} />
                    </div>
                    <EnquireForm title="Request for Free Site Visit" setOpen={setOpen} />
                </div>
            </Dialog>
        </>
    )
}

export default ClubZaira