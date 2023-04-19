import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,ImageBackground} from 'react-native';
import { useFonts } from "expo-font";
import AppLoading  from "expo-app-loading";
import LandingPage from './pages/landingPage';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Infiniminute from'./pages/Infiniminute';
import VideoPage from './pages/VideoPage';
import Zoomintegration from './pages/Zoomintegration';


export default function App() {
  const Stack = createStackNavigator();
  let [fontsLoaded]=useFonts({
    'abhaya':require('./assets/fonts/Abhaya/AbhayaLibre-Regular.ttf'),
    'nunito':require('./assets/fonts/Nunito/NunitoSans-Light.ttf'),
    'libre':require('./assets/fonts/libre/LibreCaslonText-Regular.ttf'),
    'nunito-r':require('./assets/fonts/Nunito/NunitoSans-Regular.ttf'),
  })
  if(!fontsLoaded){
    return <AppLoading/>
  }
  
  return (
    
    
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="LandingPage">
        <Stack.Screen name="LandingPage" component={LandingPage} options={{headerShown: false }}/>
        <Stack.Screen name="Infiniminute" component={Infiniminute}  options={{headerShown: false }}/>
        <Stack.Screen name="vedioPage" component={VideoPage} options={{headerShown: false }} />
        <Stack.Screen name="ZoomPage" component={Zoomintegration} options={{headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
     
      
   
      
      
    
  );
}

const styles = StyleSheet.create({
  
  
});
