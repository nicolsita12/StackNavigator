import {Text, View} from "react-native";
import HomeScreen from "../home/HomeScreen.tsx";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParams } from "../../route/StackNavigator.tsx";
import { globalStyles } from "../../theme/theme.tsx";
import { useEffect } from "react";

const ProductScreen = () => {

  const  params = useRoute<RouteProp<RootStackParams, 'Product'>>().params;

  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions(
      {
        title: params.name,
      }
    )
  }, []);

  return (
    <View style={globalStyles.container}>
      <Text>Product-Screen</Text>
      <Text style={{
        fontSize : 20,
        textAlign: 'center',
        marginTop: 20,
      }}>
       Category: {params.category}
      </Text>

      <Text style={{
        fontSize : 20,
        textAlign: 'center',
        marginTop: 20,
      }}>
        Product: {params.id} - {params.name}
      </Text>
      <Text style={{
        fontSize : 20,
        textAlign: 'center',
        marginTop: 20,
      }}>
        Price: US {params.price}
      </Text>
    </View>
  )
}

export default ProductScreen;
