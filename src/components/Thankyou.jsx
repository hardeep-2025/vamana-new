import { useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import './thankyou.css'
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

export default function Thankyou() {
    const location = useLocation();

    const message = location.state?.message || "We'll Reach Out Soon With All the Details.";

    useEffect(() => {
        window.scrollTo(0,0);
     
        // if (window.gtag) {
        //     window.gtag('event', 'conversion', {
        //         'send_to': 'AW-16677697257/DBiSCPzj9MsZEOntxZA-',
        //         'value': 0.0,
        //         'currency': 'INR'
        //     });
        //     console.log('Conversion event sent');
        // } else {
        //     console.error('gtag is not defined');
        // }
    }, []); 

    return (
        <>
            <Helmet>
                <script>{`
                    gtag('event', 'conversion', {
                        'send_to': 'AW-16677697257/DBiSCPzj9MsZEOntxZA-',
                        'value': 1.0,
                        'currency': 'INR'
                    });
                `}</script>
            </Helmet>
            <div className="container thanku-txt-wrapper">
                <div className="row">
                <div className="thankyou-enclose py-10 px-10">
                    <div className="text-white  check"> <FontAwesomeIcon icon={faCheck} /></div>
                    <div className="thankyou-text items-center text-4xl font-semibold my-5 text-primary-yellow  text-center">
                        Thank You
                    </div>
                    <div className='items-center  text-center thankyou-subtxt'>{message}</div>
                    </div>
                </div>
            </div>
        </>
    );
}
