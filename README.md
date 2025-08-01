# Contactos

Este proyecto es un **MVP de contactos telefonicos** construido con React Native y Expo.

## Instalacion de mi proyecto local 

- **Node.js** v22
- **npm** (incluido con Node.js)
- **Android Studio** (AVD) y/o (Simulator)
   - Instalacion de Android Studio https://docs.expo.dev/workflow/android-studio-emulator/ 
- **Expo Go** dispositivo móvil
- **Windows PowerShell**

> [!IMPORTANT]
> ## Ejecucion de mi proyecto Local
> - Al momento de ejecutar el proyecto vamos a la carpeta raiz del proyecto
> - Sosteniendo la tecla SHIFT y click derecho abrimos la opcion de PowerShell
> - Copiamos el comando **code .** para iniciar VisualStudio
> - Con el Comando **npm start** Generamos el codigo QR, el cual escaneamos en nuestra app EXPOGO
  
> [!NOTE]
> Se trabaja sobre el proyecto compartido del profe para guiarme.

## Estructura del proyecto
RepoGit/
├─ App.js

├─ app.json

├─ package.json

├─ node_modules/

├─ assets/

├─ navigation/

│  └─ AppNavigator.jsx

├─ screens/

│  ├─ ListScreen.jsx

│  └─AddContactScreen.jsx

└─ components/

   └─ TaskItem.jsx


- App.js: Punto de entrada. Importa y renderiza AppNavigator.

- navigation/AppNavigator.js: Stack de pantallas (Crea contacto).

- screens/

-- AddContactScreen.jsx: Muestra el listado de contactos

-- components/TaskItem.js: Componente para renderizar cada tarea.

## Como ejecutar la app?

-- npm start
