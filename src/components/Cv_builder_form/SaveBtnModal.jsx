import { Button } from "@mui/material";
import SaveAsIcon from "@mui/icons-material/SaveAs";
export default function SaveBtnModal({
  onChange = null,
  modalObj,
  handleClose,
  id = null,
  onAdd = null,
}) {
  return (
    <Button
      variant="outlined"
      sx={{
        color: "#00E6BD",
        borderColor: "#00E6BD",
        width: "5rem",
        display: "flex",
        gap: "0.25rem",
      }}
      onClick={() => {
        if (onChange) {
          onChange(modalObj, id);
        } else {
          console.log("on click : ", modalObj);
          onAdd(modalObj);
        }

        handleClose();
      }}
    >
      <SaveAsIcon /> Save
    </Button>
  );
}
