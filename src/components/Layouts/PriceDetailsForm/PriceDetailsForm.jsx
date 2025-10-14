import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EnquireForm from "../EnquireForm/EnquireForm";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { Dialog } from "@mui/material";
import logo from '../../../assests/images/logo.png';
import { useFormContext } from "../../FormContext";

const PriceDetailsForm = () => {
  const { isPriceFormOpen, closePriceForm } = useFormContext();

  return (

    <Dialog
      open={isPriceFormOpen}
      onClose={(event, reason) => {
        // Prevent closing when clicking outside or pressing Esc
        if (reason !== "backdropClick" && reason !== "escapeKeyDown") {
          closePriceForm();
        }
      }}
      className="price_list_popup_dialog"
      aria-hidden="false"
      sx={{
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "100%",
            borderRadius: "8px",
            borderColor:'#fff',
            backgroundColor: "#fff",
            boxShadow: '0px 0px 4px 0px #644630'
          },
        },
      }}
      aria-modal="true"
    >
      <div className="price_list_heading_block">
        <img src={logo} alt="Ananta Aspire Logo" className="form_logo" />
        <FontAwesomeIcon icon={faClose} className="text-2xl cursor-pointer" onClick={closePriceForm} />
      </div>
      <div className="price_list_form_flex">
        <p className="price_list_heading">Vamana Residence Exclusive Price List!</p>
        <p className="price_list_subtext">Explore Comprehensive and Updated Price Information for Vamana Residences</p>
        <div className="price_list_form_col">
          <EnquireForm  formId={"download"} title="Download Price List" button="Check Latest Pricing" />
        </div>
      </div>
    </Dialog>
  );
}

export default PriceDetailsForm;
