// PDFCV.jsx
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

export default function Pdf({ resume }) {
  const styles = StyleSheet.create({
    page: {
      padding: 40,
      fontSize: "14px",
      lineHeight: 1.5,
    },
    cv_header: {
      flexDirection: "row", // met les enfants côte à côte
      justifyContent: "flex-end",
      alignItems: "center",
    },
    cv_header_infos: {
      flex: 1, // prend tout l'espace restant
      justifyContent: "center", // centre verticalement si besoin
      alignItems: "flex-end",
      paddingRight: 10, // aligne le texte à droite
    },
    cv_header_infos_txt: {
      fontWeight: "bold",
      textAlign: "right", // espace entre chaque ligne
    },
    tbc: {
      flexDirection: "row",
      justifyContent: "center",
      margin: "5",
      fontWeight: "BOLD",
    },
  });

  return (
    <>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.cv_header}>
            <View style={styles.cv_header_infos}>
              <Text style={styles.cv_header_infos_txt}>
                {resume.personal_details.full_name}
              </Text>
              <Text style={styles.cv_header_infos_txt}>
                {resume.personal_details.email}
              </Text>
              <Text style={styles.cv_header_infos_txt}>
                {resume.personal_details.phone}
              </Text>
              <Text style={styles.cv_header_infos_txt}>
                {resume.personal_details.position}
              </Text>
            </View>
            <View style={styles.cv_header_img}>
              <Image
                src={window.location.origin + "/avatar/avatar_default.jpg"}
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: 60,
                }}
              />
            </View>
          </View>
          <View>
            <Text style={styles.tbc}>TO BE CONTINUED</Text>
          </View>
        </Page>
      </Document>
    </>
  );
}
