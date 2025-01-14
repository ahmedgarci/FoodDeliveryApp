import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";

function SuccessCompo({ msg }) {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
  };

  return (
    show && (
      <Alert
        icon={<CheckIcon fontSize="inherit" />}
        severity="success"
        action={
          <button
            onClick={handleClose}
            className="text-white font-bold"
          >
            X
          </button>
        }
      >
        {msg}
      </Alert>
    )
  );
}

export default SuccessCompo;
