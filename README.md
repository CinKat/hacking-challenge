# Cotizador Seguro Vehicular

Este proyecto fue creado con React Js.
### `seguro-vehicular`
web: [seguro-vehicular](https://seguro-vehicular.netlify.app/)

## Librerias, componentes o bibliotecas usados

### `Emotion`
[Emotion](https://emotion.sh/docs/introduction) es una libreria diseñada para escribir estilos CSS en JS, proporciona una composición de estilos predecible.

- En este caso use emotion ya que me permite crear CSS usando Javascript, de esta forma evito separar los archivos CSS. Además los estilos que se inyectan se están ocupando de manera automática, quiero decir que los usuarios cargaran menor cantidad de código.
- Cuando se define los estilos, realmente estamos creando componentes en React, ahora al estar todo en un solo componente, es más fácil darle mantenimiento.

### `React Router`

[React Router](https://reactrouter.com/docs/en/v6/getting-started/overview) es una colección de componentes de navegación la cual podemos usar en web o en móvil con React Native. Con esta librería vamos a obtener un enrutamiento dinámico gracias a los componentes, en otras palabras tenemos unas rutas que renderizan un componente.

- Use react router porque me permite crear rutas fijas, ya sea mostranto un formulario, lista o tablas de datos, etc. También me permite crear rutas dinámicas, para mostrar datos de un cliente o producto en específico, etc.

## Estructura de creación del proyecto

1. Primero realice la carpeta de estilos agregue el [reset] de CSS, agregue la fuente de letras, 
los estilos globales que van el body, los objetos de typografia, para poder identificar los diferentes uso en los textos y los objetos de colores. Agregue la carpeta assets, donde se encuentra las imágenes e iconos que se van usando en el proyecto, esto lo fue agregando segun como avanzaba con los componentes.

2. Empece con la maquetación, primero con la página Login, para ello empece a crear los componentes para porder reutilizar en diferentes vistas.Ya teniendo los componentes necesario para la pagina Login, empece armar la primera página, en este caso empece con el diseño Mobile Firts y luego lo adapte el diseño a desktops.

3. Luego de terminar de maquetar la primera pagina, empece con las validaciones del formulario y luego realice la solicitud de datos del API.Mi lógica para usar la api despues de realizar el requerimiento de data fue la siguiente:
- En este caso en el formulario se tenia que validar el DNI del usuario para que en la siguiente página pueda mostrar sus datos, en este caso como en la listas de usuario de la API no tenia la propiedad DNI, la validación lo realice con el número de celular. Entonces el usuario que ingrese debe colocar el numero de celular correcto para poder validar sus datos.
- Ejm: phone: 1-770-736-8031 x56442
- Teniendo en cuenta ello, al momento de llamar la lista de usuario y tener los datos ingresados del usuario, he realizado un filtro a la lista de usuario, en este caso si el telefono ingresado coincide con algunos de los telefonos que tenemos en la lista de usuarios, extrae al usuario que tiene el numero de telefono. Ahora a esta data que tenemos le agregamos la propieda placa(que es la información que ingreso el usuario), y ya agregando ello, es con esta lista de objetos que trabajaremos.
- Mi intención con ello es que la data filtrada que extraemos sea agregada a la base de datos que pueda tener la empresa.
- Ahora si el numero de telefono no coincide, manda mensaje de aviso que los datos no son correctos para que el usuario pueda volver a validar sus datos.

