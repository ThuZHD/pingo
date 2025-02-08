import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native";
import { House, Settings, FilePenLine } from "lucide-react-native";
import { useState } from "react";

import Home from "./components/Home";

export default function App() {
  const [state, setState] = useState("home");

  return (
    <View style={styles.container}>
      {state == "home" ? <Home /> : <View />}
      <View style={styles.navbar}>
        <Pressable style={{ flexDirection: "column", alignItems: "center" }}>
          <House color={"black"} size={25}></House>
          <Text>home</Text>
        </Pressable>

        <Pressable style={{ flexDirection: "column", alignItems: "center" }}>
          <FilePenLine color={"black"} size={25}></FilePenLine>
          <Text>packs</Text>
        </Pressable>

        <Pressable style={{ flexDirection: "column", alignItems: "center" }}>
          <Settings color={"black"} size={25}></Settings>
          <Text>settings</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  navbar: {
    width: "100%",
    height: 100,
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingBottom: 10,
  },
});
