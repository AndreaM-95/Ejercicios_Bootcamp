<h1 align="center"> 💻 TALLER #1 - PRIMERA PLATAFORMA 💻</h1>

# React + Vite + Tailwind

## 🛠️ Creación del proyecto

`Creación del proyecto con react y vite`

1. Creamos el archivo usando: <br> <em>npm create vite@latest</em>
2. Se asigna el nombre al proyecto (En este caso mi nombre del proyecto fue taller-primera-plataforma)
3. Se selecciona el framework que en este caso sería REACT
4. Ingresamos al proyecto creado: <br><em>cd taller-primera-plataforma</em>
5. Instalamos las dependencias de vite al proyecto: <br><em> npm install</em>
6. Desplegamos el proyecto: <br><em>npm run dev</em>
7. Donde dice Local: ahí aprimimos la tecla Ctrl + click para ir a ese enlace
<br>

`Instalaciones adicionales`

1. Agregamos el router ya que este lo necesitaremos para ejecutar las rutas dentro del proyecto haciendo uso del siguiente comando:
<br> <em>npm install react-router-dom</em>

2. Debemos instalar el slick del carrusel para que este pueda ejecutarse correctamente con el siguiente comando:
<br> <em>npm i react-slick slick.carousel</em>

3. Instalamos Tailwind siguiendo las instrucciones del siguiente enlace: https://tailwindcss.com/docs/guides/vite 

<br>

## 📝Desarrollo del proyecto

`Sección de desarrolladores` 
- Importé el slider y recursos necesarios para que funcione el carrusel
- Hice la creación de una lista llamada 'data' en donde asigno url de la foto, nombre del desarrollador, área en la que trabaja, su reseña y los enlaces a sus redes sociales tales como linkedin, youtube y twitter
- Cree el método 'settings' el cual contiene la velocidad de transición de cada tarjeta, cuantas enseña y otras característiocas.
- Cree un método llamado 'OpenPage' el cual se encarga de abrir el enlace en una pestaña extarna el cual es llamado con el evento OnClick en cada botón.
- Dentro del return está la maquetación para la página 'Desarrolladores' el cual contiene un título con el tag de html h1 y un div con el slider en donde hacemos uso de 'map' para acceder a la lista 'data' y así asignar a cada elemento del html sus propiedades tales como d.name, d.area, d.review entre otros.
<br>

`Sección de ejercicios`:
<p>Los componentes descritos acontinuación los declaré en la página Exercises - index.jsx</p>
- El componente 'Board'  contiene un mapeo del arreglo 'emojiList' el cual crea el bloque o tablero que tendrá las tarjetas a girar.
- El componente 'MemoBlock'  contiene cada tarjeta y el emoji que viene dentro de ella para generar las cartas en todo el tablero

`Sección de proyectos`:
<p>Los componentes descritos acontinuación los declaré en la página Projects - index.jsx</p>
- El componente 'Proyectos'  contiene un primer título y un mapeo del archivo json llamado 'proyectos' el cual es asignado a el título, el video, tres tags que muestran la tecnología usada, una breve descripción y el rol que ejercí.

<br>

`Sección sobre mi`:
<p>Los componentes descritos acontinuación los declaré en la página About-Me - index.jsx</p>

- El componente 'Descripción' contiene el título siendo este mi nombre, mi foto de perfil y mi descipción personal.
- El componente 'Experiencia' contiene un segúndo título y un mapeo del archivo json llamado 'experiencia' el cual es asignado al cargo, la empresa, el tiempo que estuve allí, una descripción breve de lo que hice alli y el rol que ejercí.
- El componente 'Formación' contiene un segúndo título y un mapeo del archivo json llamado 'formacion' el cual es asignado a el título, la institución, y el tiempo que estuve allí.
- El componente 'Skills' contiene un segúndo título y un mapeo de dos archivos json llamados 'hard' y 'soft' en donde el primero asigna la tecnología o herramienta que manejo y en el segundo, mis habilidades blandas como profesional

<br>

## 🎨 Visual de secciones
- Desarrolladores: <br>
<img src='https://github.com/AndreaM-95/Ejercicios_Bootcamp/assets/104279565/9968ded2-3c90-4acf-8bf7-1745be89d650' width=600>

- Ejercicios: <br>
<img src='https://github.com/AndreaM-95/Ejercicios_Bootcamp/assets/104279565/467de4d7-5f79-43dd-8255-ad20d914cd1f' width=600>

- Proyectos: <br>
<img src='https://github.com/AndreaM-95/Ejercicios_Bootcamp/assets/104279565/4fb97e73-242e-4407-82eb-21c60b75048d' width=600>

- Sobre mi: <br>
<img src='https://github.com/AndreaM-95/Ejercicios_Bootcamp/assets/104279565/ae00f8a0-8423-4138-be9e-c40a1c714d18' width=600><br>
<img src='https://github.com/AndreaM-95/Ejercicios_Bootcamp/assets/104279565/797c3c8a-cc90-400d-9d20-720bf6493f1c' width=600><br>
<img src='https://github.com/AndreaM-95/Ejercicios_Bootcamp/assets/104279565/409aeb50-b2bf-44ed-8696-b02d162c9ff0' width=600><br>

- Pie de página: <br>
<img src='https://github.com/AndreaM-95/Ejercicios_Bootcamp/assets/104279565/3682276a-8d6e-4207-9727-b56ca85558da' width=600>

<br>

## 🔗 Enlaces
- Instalación de Tailwind en el proyecto: https://tailwindcss.com/docs/guides/vite
- Instalación de Tailwind Animated: https://www.tailwindcss-animated.com/
- Instalación de FontAwesome: https://fontawesome.com/search?o=r&s=solid

<br>

## 📈 Historial de versiones
- 24-02-2024: Agrego carpeta del proyecto y la sección Devs
- 24-02-2024: Creación del Readme y primera modificación
- 03-03-2024: Agrego sección 'About me'
- 04-03-2024: Agrego sección 'Projects'
- 04-03-2024: Agrego sección de ejercicios
- 04-03-2024: Agrego correcciones a la sección de Devs
- 04-03-2024: Agrego animaciones a todas las secciones
- 04-03-2024: Agrego mejoras al código de las secciones
- 04-03-2024: Update Readme
- 04-03-2024: Agrego archivo json para proyectos 
