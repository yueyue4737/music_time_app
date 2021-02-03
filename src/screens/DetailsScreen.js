import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";

const DetailsScreen = ({ navigation, route }) => {
  console.log(route);
  return (
    <View style={styles.mainView}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Image"
        onPress={() => {
          navigation.navigate("BigImageView");
        }}
      />
      <Button
        title="More Details"
        onPress={() => {
          navigation.push("Details_to_Details");
        }}
      />
      <Button
        title="Go Back Home"
        onPress={() => {
          navigation.popToTop();
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

export default DetailsScreen;

// import React from "react";
// import { Button, View, Text, StyleSheet } from "react-native";

// const DetailsScreen = ({ navigation, route }) => {
//   const { music } = route.params.music;
//   return (
//     <View style={styles.mainView}>
//       <Text>Details Screen</Text>
//       <Text style={{ fontSize: 20 }}>
//         {music.title}({music.release})
//       </Text>
//       <Text style={{ fontSize: 100 }}>{music.screenNumber}</Text>
//       <Button
//         title="Go to Image"
//         onPress={() => {
//           navigation.navigate("BigImageView");
//         }}
//       />
//       <Button
//         title="More Details"
//         onPress={() => {
//           navigation.push("Details_to_Details", {
//             music: music
//           });
//         }}
//       />
//       <Button
//         title="Go Back Home"
//         onPress={() => {
//           navigation.popToTop();
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

// export default DetailsScreen;
