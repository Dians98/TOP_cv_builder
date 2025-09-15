import { Box } from "@mui/material";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Pdf from "../Pdf/Pdf"; // ton composant PDF qui prend cvData en props
import { pdf } from "@react-pdf/renderer";

export default function CvPdf({ resume }) {
  const handleOpenPDF = async () => {
    /**UN BLOB (Binary Large Object) est un fichier virtuel en mémoire */
    const pdf = await pdf(<Pdf resume={resume} />).toBlob();

    // Crée une URL pointant vers le blob qu'on a créé
    const url = URL.createObjectURL(pdf);

    window.open(url, "_blank");
  };

  return (
    <Box className="download_pdf" onClick={() => handleOpenPDF()}>
      <PictureAsPdfOutlinedIcon />
    </Box>
  );
}
