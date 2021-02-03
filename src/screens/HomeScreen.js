import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";

const HomeScreen = ({ navigation, route }) => {
  console.log(route);
  return (
    <View style={styles.mainView}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          navigation.navigate("Home_to_Details");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default HomeScreen;
// import React from "react";
// import { Button, View, Text, StyleSheet } from "react-native";

// const HomeScreen = ({ navigation }) => {
//   // const navigation = props.navigation;
//   return (
//     <View style={styles.mainView}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Broken Sky"
//         onPress={() => {
//           navigation.navigate("Home_to_Details", {
//             music: { title: "Broken Sky", release: 2020, screenNumber: 1 }
//           });
//         }}
//       />
//       <Button
//         title="Piedra De Arousa"
//         onPress={() => {
//           navigation.navigate("Home_to_Details", {
//             music: { title: "Piedra De Arousa", release: 2021, screenNumber: 1 }
//           });
//         }}
//       />
//       <Button
//         title="New Leaf"
//         onPress={() => {
//           navigation.navigate("Home_to_Details", {
//             music: { title: "New Leaf", release: 2020, screenNumber: 1 }
//           });
//         }}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   mainView: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });

// export default HomeScreen;
