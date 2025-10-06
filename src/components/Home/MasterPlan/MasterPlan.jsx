import Lightbox from 'yet-another-react-lightbox';
import { Dialog } from '@mui/material';
import EnquireForm from '../../Layouts/EnquireForm/EnquireForm';
import siteplan from '../../../assests/images/siteplan2.webp';
import { Fullscreen, Zoom } from 'yet-another-react-lightbox/plugins';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const MasterPlan = () => {
    const [openMaster, setOpenMaster] = useState(false);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <section className="home-masterplan-section py-16 px-2.5" id="masterplan">
                <div className='max-w-6xl m-auto'>
                    <div className="flex flex-col text-left gap-5">
                        <h3 className="text-2xl sm:text-4xl font-semibold text-center mb-3">Master Plan</h3>

                        <div className="flex flex-col md:flex-row items-center gap-8 ">

                            <div className="w-full md:w-1/2 flex flex-col gap-5">
                                <img src={siteplan} alt='Vamana Arvindam - Master Plan' className='w-full h-full object-cover border-4 border-primary-yellow rounded-3xl cursor-pointer' onClick={() => setOpenMaster(true)} />
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

                            <div className="w-full md:w-1/2 flex flex-col gap-5">
                                <p className="text-sm">Nestled amidst 7.77 acres of lush greenery on the vibrant NH-7, Patiala Highway,
                                    Vamana Residences offers a unique blend of modern living and natural serenity
                                    with its luxurious <b>3bhk flats in Zirakpur</b> and <b>4bhk flats in Zirakpur</b>. With 350
                                    thoughtfully designed units, this meticulously planned community provides an
                                    idyllic escape from the city's hustle and bustle.</p>
                                <p className="text-sm">Experience the perfect harmony of nature and luxury as you step into a world of
                                    well-defined residential clusters. Enjoy a plethora of world-class amenities, from
                                    state-of-the-art fitness centers to tranquil recreational spaces. Vamana's prime
                                    location, coupled with dedicated parking and top-tier security, ensures a
                                    convenient and secure lifestyle for its residents.</p>
                                <p className="text-sm">Indulge in the epitome of comfortable living at <b>Vamana
                                    Residences.</b>
                                </p>
                                <button tabIndex='-1' className="w-max text-primary-yellow border-2 border-primary-yellow  hover:bg-primary-yellow mx-auto mt-5 hover:text-white font-bold uppercase text-xs tracking-widest py-2.5 sm:py-3.5 px-3.5 sm:px-[22px] 1xl:px-8" onClick={handleOpen}>Download Price List</button>
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
                    <EnquireForm title="Request For Price List" setOpen={setOpen} />
                </div>
            </Dialog>
        </>
    )
}

export default MasterPlan