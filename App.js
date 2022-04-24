import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from "./BottomTab";

export default function App() {
  return (
    // <SafeAreaView style={styles.container}>
    //   <Text>Hey!</Text>
    //   <Image source={require("./assets/favicon.png")}>
    //   </Image>
    //   Modified
    //   <Button title="Login" onPress={()=>console.log("Button Tapped")}/>
    //   <StatusBar style="auto" />
    // </SafeAreaView>
    <NavigationContainer>
      <BottomTab/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

