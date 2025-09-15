// PDFCV.jsx
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

export default function Pdf({ resume }) {
  const styles = StyleSheet.create({
    page: {
      padding: 40,
      fontSize: 12,
      lineHeight: 1.5,
      fontFamily: "Helvetica",
    },
    section: {
      marginBottom: 15,
    },
    name: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 5,
    },
    title: {
      fontSize: 16,
      fontWeight: "bold",
      marginBottom: 5,
    },
    text: {
      marginBottom: 3,
    },
    skills: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      marginTop: 5,
    },
    skillItem: {
      marginRight: 10,
    },
  });

  return (
    <>
      <Document>
        <Page size="A4" style={styles.page}>
          {/* Informations personnelles */}
          <View style={styles.section}>
            <Text style={styles.name}>{resume.personal_details.full_name}</Text>
            <Text style={styles.text}>{resume.personal_details.position}</Text>
            <Text style={styles.text}>{resume.personal_details.email}</Text>
            <Text style={styles.text}>{resume.personal_details.phone}</Text>
          </View>

          {/* À propos */}
          <View style={styles.section}>
            <Text style={styles.title}>À propos</Text>
            <Text>{resume.aPropos}</Text>
          </View>

          {/* Expériences */}
          {resume.experiences?.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.title}>Expériences</Text>
              {resume.experiences.map((exp, i) => (
                <Text key={i} style={styles.text}>
                  {exp.role} - {exp.company} ({exp.start} - {exp.end})
                </Text>
              ))}
            </View>
          )}

          {/* Compétences */}
          {resume.skills?.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.title}>Compétences</Text>
              <View style={styles.skills}>
                {resume.skills.map((skill, i) => (
                  <Text key={i} style={styles.skillItem}>
                    {skill}
                  </Text>
                ))}
              </View>
            </View>
          )}
        </Page>
      </Document>
    </>
  );
}
