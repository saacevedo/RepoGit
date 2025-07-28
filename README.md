# Contactos

Este proyecto es un **MVP de contactos telefonicos** construido con React Native y Expo.

## Instalacion de mi proyecto local 

- **Node.js** v22
- **npm** (incluido con Node.js)
- **Android Studio** (AVD) y/o (Simulator)
   - Instalacion de Android Studio https://docs.expo.dev/workflow/android-studio-emulator/ 
- **Expo Go** dispositivo móvil
- **Windows PowerShell**

## Estructura del proyecto
RepoGit/
├─ App.js

├─ app.json

├─ package.json

├─ node_modules/

├─ assets/

   └─ icon.png CAMBIO DE IMAGEN

├─ navigation/

│  └─ AppNavigator.jsx

├─ screens/

│  ├─ TaskListScreen.jsx

│  └─ AddTaskScreen.jsx

|  └─ AddContactScreen.jsx

└─ components/

   └─ TaskItem.jsx


- App.js: Punto de entrada. Importa y renderiza AppNavigator.

- navigation/AppNavigator.js: Stack de pantallas (Lista Crear tarea, Crea nuevo Contacto + numero telefonico).

- screens/

-- AddContactScreen.jsx: Muestra la lista de Contactos + el numero

-- TaskListScreen.js: Muestra el listado de tareas.

-- AddTaskScreen.js: Formulario para agregar nuevas tareas y nuevos contactos

-- components/TaskItem.js: Componente para renderizar cada tarea.

## Como ejecutar la app?

-- npm start
