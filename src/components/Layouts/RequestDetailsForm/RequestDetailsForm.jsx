import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EnquireForm from "../EnquireForm/EnquireForm";
import { useFormContext } from "../../FormContext";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { Dialog } from "@mui/material";

const RequestDetailsForm = () => {

  const { isRequestFormOpen, closeRequestForm } = useFormContext();

  return (

    <Dialog
      open={isRequestFormOpen}
      onClose={(event, reason) => {
        // Prevent closing when clicking outside or pressing Esc
        if (reason !== "backdropClick" && reason !== "escapeKeyDown") {
          closeRequestForm();
        }
      }}
      className="form_popup"
      aria-hidden="false"
      sx={{
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "100%",
            maxWidth: "450px",
            borderRadius: "8px",
            backgroundColor: "#fff",
            border: '1px solid #644630',
            padding: "15px",
          },
        },
      }}
      aria-modal="true"
    >
      <div className="flex flex-col popup-form">
        <div className="flex justify-end ">
          <FontAwesomeIcon icon={faClose} className="text-2xl cursor-pointer" onClick={closeRequestForm} />
        </div>
        <EnquireForm title="Request For Brochure" button="Submit Now" formId={"request"} />
      </div>
    </Dialog>
  );
}

export default RequestDetailsForm;
