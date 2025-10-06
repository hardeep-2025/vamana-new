import floorPlan1 from '../../../assests/images/flrpln/3bhk.webp';
import floorPlan2 from '../../../assests/images/flrpln/3+1bhk.webp';
import floorPlan3 from '../../../assests/images/flrpln/4+1BHK.webp';
import { useState } from "react";
import { Dialog } from '@mui/material';
import EnquireForm from '../../Layouts/EnquireForm/EnquireForm';
import './floorplan.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import Lightbox from "yet-another-react-lightbox";
import { Fullscreen, Zoom } from "yet-another-react-lightbox/plugins";

const FloorPlan = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [openPlan1, setOpenPlan1] = useState(false);
    const [openPlan2, setOpenPlan2] = useState(false);
    const [openPlan3, setOpenPlan3] = useState(false);

    return(
        <>
        <section className="home-floorplan-section py-16 px-2.5" id="floorplan">
            <div className='max-w-6xl m-auto'>
                <div className="flex flex-col text-left gap-5">
                    <h3 className="text-2xl sm:text-4xl font-semibold text-center mb-3">Floor Plan</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-5 p-2.5">
                        {/* Plan 1 */}
                       <div> <div className="border-primary-yellow border-2 flex flex-col gap-5 items-center justify-between">
                            <img
                                src={floorPlan1}
                                alt="3 BHK (2325 sq. feet)"
                                className="p-2.5 cursor-pointer"
                                onClick={() => setOpenPlan1(true)}
                            />
                            <Lightbox
                                open={openPlan1}
                                close={() => setOpenPlan1(false)}
                                slides={[
                                    { src: floorPlan1 }
                                ]}
                                controller={{ closeOnBackdropClick: true }}
                                plugins={[Fullscreen, Zoom]}
                                carousel={{ finite: 1 }}
                                render={{
                                    buttonPrev: undefined,
                                    buttonNext: undefined,
                                }}
                                styles={{slide: { marginTop: "20px" },  toolbar: {background: '#00000054', width: '100%'}, icon:{color: '#fff'} }}
                                zoom={{
                                    maxZoomPixelRatio: 3,
                             }}
                                className="single-lightbox"
                            />
                            <button className="w-full bg-primary-yellow text-white font-bold uppercase text-xs tracking-widest py-3.5 px-8" onClick={() => setOpenPlan1(true)}>3 BHK (2325 sq. feet)</button>

                            </div>
                            <button tabIndex='-1' className="w-max mt-5 m-auto flex text-primary-yellow border-2 border-primary-yellow  hover:bg-primary-yellow   hover:text-white self-center  font-bold uppercase text-xs tracking-widest py-2.5 sm:py-3.5 px-3.5 sm:px-[22px] 1xl:px-8" onClick={handleOpen}>Download Price List</button> </div>
                       

                        {/* Plan 2 */}
                 <div>      <div className="border-primary-yellow border-2 flex flex-col gap-5 items-center justify-between">
                            <img
                                src={floorPlan2}
                                alt="3+1 BHK (2690 sq. feet)"
                                className="p-2.5 cursor-pointer"
                                onClick={() => setOpenPlan2(true)}
                            />
                            <Lightbox
                                open={openPlan2}
                                close={() => setOpenPlan2(false)}
                                slides={[
                                    { src: floorPlan2 }
                                ]}
                                controller={{ closeOnBackdropClick: true }}
                                plugins={[Fullscreen, Zoom]}
                                carousel={{ finite: 1 }}
                                render={{
                                    buttonPrev: undefined,
                                    buttonNext: undefined,
                                }}
                                styles={{slide: { marginTop: "20px" },  toolbar: {background: '#00000054', width: '100%'}, icon:{color: '#fff'} }}
                                zoom={{
                                    maxZoomPixelRatio: 3,
                             }}
                                className="single-lightbox"
                            />
                            <button className="w-full bg-primary-yellow text-white font-bold uppercase text-xs tracking-widest py-3.5 px-8" onClick={() => setOpenPlan2(true)}>3+1 BHK (2690 sq. feet)</button></div> 
                            <button tabIndex='-1' className="w-max mt-5 m-auto flex text-primary-yellow border-2 border-primary-yellow  hover:bg-primary-yellow   hover:text-white self-center  font-bold uppercase text-xs tracking-widest py-2.5 sm:py-3.5 px-3.5 sm:px-[22px] 1xl:px-8" onClick={handleOpen}>Download Price List</button>
                        </div>

                        {/* Plan 3 */}
                  <div className=''>     <div className="border-primary-yellow border-2 flex flex-col gap-5 items-center justify-between">
                            <img
                                src={floorPlan3}
                                alt="4+1 BHK (3685 sq. feet)"
                                className="p-2.5 cursor-pointer"
                                onClick={() => setOpenPlan3(true)}
                            />
                            <Lightbox
                                open={openPlan3}
                                controller={{ closeOnBackdropClick: true }}
                                close={() => setOpenPlan3(false)}
                                slides={[
                                    { src: floorPlan3 }
                                ]}
                                plugins={[Fullscreen, Zoom]}
                                carousel={{ finite: 1 }}
                                render={{
                                    buttonPrev: undefined,
                                    buttonNext: undefined,
                                }}
                                styles={{slide: { marginTop: "20px" },  toolbar: {background: '#00000054', width: '100%'}, icon:{color: '#fff'} }}
                                zoom={{
                                    maxZoomPixelRatio: 3,
                             }}
                                className="single-lightbox"
                            />
                            <button className="w-full bg-primary-yellow text-white font-bold uppercase text-xs tracking-widest py-3.5 px-8" onClick={() => setOpenPlan3(true)}>4+1 BHK (3685 sq. feet)</button></div> 
                            <button tabIndex='-1' className="w-max mt-5 m-auto  flex self-center text-primary-yellow border-2 border-primary-yellow  hover:bg-primary-yellow   hover:text-white font-bold uppercase text-xs tracking-widest py-2.5 sm:py-3.5 px-3.5 sm:px-[22px] 1xl:px-8" onClick={handleOpen}>Download Price List</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
        {/* Popup */}
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

export default FloorPlan