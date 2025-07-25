# Contactos

Este proyecto es un **MVP de contactos telefonicos** construido con React Native y Expo.

## Instalacion de mi proyecto local 

- **Node.js** v22
- **npm** (incluido con Node.js)
- **Android Studio** (AVD) y/o (Simulator)
- **Expo Go** dispositivo móvil
- **Windows PowerShell**

## Instalación inicial

> ❗️ **Expo CLI** global está deprecado. Usaremos `create-expo-app` vía `npx`.

```bash
# 1. Crea la plantilla Expo
npx create-expo-app@latest task-mvp --template blank

# 2. Entra al directorio del proyecto
cd task-mvp

# 3. Instala dependencias
npm install
# o
yarn

## Dependendencias principales

# React Navigation
npm install @react-navigation/native @react-navigation/stack

# Peers de React Navigation
npm install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

# AsyncStorage para persistencia
npm install @react-native-async-storage/async-storage


## Estructura del proyecto
task-mvp/
├─ App.js

├─ app.json

├─ package.json

├─ node_modules/

├─ assets/

├─ navigation/

│  └─ AppNavigator.jsx

├─ screens/

│  ├─ TaskListScreen.jsx

│  └─ AddTaskScreen.jsx

└─ components/

   └─ TaskItem.jsx


- App.js: Punto de entrada. Importa y renderiza AppNavigator.

- navigation/AppNavigator.js: Stack de pantallas (Lista y Crear tarea).

- screens/

-- TaskListScreen.js: Muestra el listado de tareas.

-- AddTaskScreen.js: Formulario para agregar nuevas tareas.

-- components/TaskItem.js: Componente para renderizar cada tarea.

## Como ejecutar la app?

-- npm start
