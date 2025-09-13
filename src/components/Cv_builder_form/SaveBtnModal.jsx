import { Button } from "@mui/material";
import SaveAsIcon from "@mui/icons-material/SaveAs";
export default function SaveBtnModal({
  onChange,
  modalObj,
  index,
  handleClose,
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
        onChange(modalObj, index);
        handleClose();
      }}
    >
      <SaveAsIcon /> Save
    </Button>
  );
}
