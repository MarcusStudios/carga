import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../pages/welcome";
import Signin from "../pages/signin";
import Cadastro from "../pages/cadastro";
import Home from "../pages/home";
const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
 
      
      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{ headerShown: false }}
      />
      


      <Stack.Screen
      name="Cadastro"
      component={Cadastro}
      options={{headerShown: false}}
      />

      <Stack.Screen
      name="Home"
      component={Home}
      options={{headerShown: false}}
      />

  

      

     


    </Stack.Navigator>
    
  );
}
