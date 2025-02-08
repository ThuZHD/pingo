import {
  StyleSheet,
  Text,
  View,
  Animated,
  Pressable,
  Vibration,
} from "react-native";
import { useRef } from "react";

type ButtonType = {
  backBackground: string;
  background: string;
  textColor: string;
  text: string;
  width: any;
  height: any;
  marginTop: any;
  border: number;
  distance: number;
  func: () => void;
};

export default function Duo_Button({
  backBackground,
  background,
  text,
  textColor,
  width,
  height,
  marginTop,
  border,
  distance,
  func,
}: ButtonType) {
  const animation = useRef(new Animated.Value(0)).current;

  const pressIn = () => {
    Vibration.vibrate([2, 2]);
    func;
    Animated.timing(animation, {
      toValue: 1,
      duration: 100,
      useNativeDriver: false,
    }).start(() => {});
  };

  const pressOut = () => {
    Vibration.vibrate([1, 1]);
    Animated.timing(animation, {
      toValue: 0,
      duration: 100,
      useNativeDriver: false,
    }).start(() => {});
  };

  return (
    <Pressable
      style={[
        styles.container,
        {
          width: width,
          height: height + distance,
          paddingTop: distance,
          marginTop: distance + marginTop,
        },
      ]}
      onPressIn={() => {
        pressIn();
        func();
      }}
      onPressOut={() => {
        pressOut();
      }}
    >
      <View
        style={{
          backgroundColor: backBackground,
          height: height - distance,
          width: "100%",
          borderRadius: border,
        }}
      ></View>
      <Animated.View
        style={[
          styles.topContainer,
          {
            transform: [
              {
                translateY: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-distance, 0],
                }),
              },
            ],
            backgroundColor: background,
            width: "100%",
            height: height,
            borderRadius: border,
          },
        ]}
      >
        <Text style={[styles.text, { color: textColor }]}>{text}</Text>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {},
  topContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
