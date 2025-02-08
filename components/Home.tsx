import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Duo_Button from "./Duo_Button";

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={require("../assets/icon.png")}
        style={styles.greetingImage}
      />
      <Text style={styles.greetingText}>
        Hello Bruno, what about learning some packs today?
      </Text>
      <View style={{ width: "100%", alignItems: "center" }}>
        <Duo_Button
          backBackground="#0077B6"
          background="#0096C7"
          text="quickstart"
          textColor="#ADE8F4"
          width={200}
          height={75}
          marginTop={20}
          border={15}
          distance={10}
          func={() => {
            console.log("here");
          }}
        />
      </View>
      <Text
        style={{
          color: "black",
          fontSize: 25,
          fontWeight: "600",
          marginTop: 10,
        }}
      >
        recently learned
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    paddingRight: "5%",
    paddingLeft: "5%",
  },
  greetingImage: {
    width: 250,
    height: 250,
    resizeMode: "contain",
    top: 0,
    alignSelf: "center",
  },
  greetingText: {
    color: "black",
    fontSize: 25,
    textAlign: "center",
    marginTop: 10,
    fontWeight: "600",
  },
});
