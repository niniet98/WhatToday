
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

Passos per utilitzar Stack Navigation
-------------------------------------

1. npm install @react-navigation/stack

2. Importar una funció que es diu 'createStackNavigator'

    import { createStackNavigator } from '@react-navigation/stack';

3. Crear un stack navigator:

    // com a variable global
    const Stack = createStackNavigator();

4. Crear el Stack.Navigator amb les pantalles a dins

    <Stack.Navigator>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="screenone" component={ScreenOne} />
      ...
    </Stack.Navigator>

  (Important posar el nom a cadascuna)


Pas de paràmetres
-----------------

1. A la pantalla que envia les dades:

     navigation.navigate("nompantalla", { /* objecte amb camps */ });

2. Posar el "route" com a prop a la pantalla que rep les dades

3. Extreure els camps de route.params:

      const { missatge } = route.params;

