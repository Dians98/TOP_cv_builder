import { Avatar, Box } from "@mui/material";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import { useState } from "react";

export default function CvAvatar({ personal_details }) {
  const [imgSource, setImgSource] = useState(
    "/public/avatar/avatar_default.jpg"
  );

  const handleImgSourceChange = (source) => {
    //setImgSource(`/public/avatar/${source}`);

    alert("Fonctionnalité à venir");
  };
  return (
    <Box className="avatar_container">
      <Avatar
        alt={personal_details.full_name}
        sx={{ width: 150, height: 150 }}
        src={imgSource}
      />
      <PhotoUploader handleChange={handleImgSourceChange} />
    </Box>
  );
  
}

function PhotoUploader({ handleChange }) {
  return (
    <>
      <Box className="photo_uploader">
        <label
          style={{
            cursor: "pointer",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CameraAltOutlinedIcon style={{ color: "white", fontSize: "2rem" }} />
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={(e) => handleChange(e.target.files[0].name)}
          />
        </label>
      </Box>
    </>
  );
}
