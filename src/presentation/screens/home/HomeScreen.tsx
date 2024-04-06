import { Pressable, Text, View } from "react-native";
import { globalStyles } from "../../theme/theme.tsx";
import { type NavigationProp, useNavigation } from "@react-navigation/native";
import PrimaryButton from "../../components/PrimaryButton.tsx";
import { type RootStackParams } from "../../route/StackNavigator.tsx";

const HomeScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={globalStyles.container}>

      <PrimaryButton label="Productos" onPress={()=>navigation.navigate('Products')}/>

      <PrimaryButton label="Configuración" onPress={()=>navigation.navigate('Settings')}/>

    </View>
  )
}

export default HomeScreen;
