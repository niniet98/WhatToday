Passos comuns per utilitzar pantalles
-------------------------------------

1. npm install @react-navigation/native

2. expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

3. 

   import { NavigationContainer } from '@react-navigation/native';

   ...

   export default function App() {
     return <NavigationContainer>
        ...
     </NavigationContainer>;
   }

Passos per fer servir el BottomTab Navigator
--------------------------------------------

1. npm install @react-navigation/bottom-tabs

2. Importar la funció createBottomTabNavigator

    import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

3. Crear un Tab Navigator:

    // és una variable global
    const Tab = createBottomTabNavigator();

4. Posar l'estructura dels Tabs:

      <Tab.Navigator initialRouteName="home">
        <Tab.Screen name="user" component={UserScreen} />
        <Tab.Screen name="home" component={HomeScreen} />
        <Tab.Screen name="settings" component={SettingsScreen} />
      </Tab.Navigator>

Icones
------

1. Anar a https://icons.expo.fyi/ i buscar la icona.

2. Copiar / pegar.