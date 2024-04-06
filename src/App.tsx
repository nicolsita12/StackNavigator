import 'react-native-gesture-handler';
import {Text, View} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from "./presentation/route/StackNavigator.tsx";
const App = () => {
  return (
    <NavigationContainer>
      {/*<Text>App</Text>*/}
        <StackNavigator/>
    </NavigationContainer>
  )
}

export default App;
