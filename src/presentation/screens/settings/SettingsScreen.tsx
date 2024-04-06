import {Text, View} from "react-native";
import HomeScreen from "../home/HomeScreen.tsx";
import { StackActions, useNavigation } from "@react-navigation/native";
import { globalStyles } from "../../theme/theme.tsx";
import PrimaryButton from "../../components/PrimaryButton.tsx";

const SettingsScreen = () => {

  const  navigator = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Text style={{marginBottom: 10}}>Settings-Screen</Text>

      <PrimaryButton label="Regresar" onPress={()=>navigator.goBack()}/>
      <PrimaryButton label="Home" onPress={()=>navigator.dispatch(StackActions.popToTop())}/>
    </View>
  )
}

export default SettingsScreen;
