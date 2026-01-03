# Prototipos
prototipos en html para el desarrollo de la Web de Red Educativa Mexico 
# Descripcion del proyecto 
Red Educativa Mexico es una plataforma web integral para servicos educativos, especificamente enfocada en la evaluacion ycertificacion  de competencias bajo el acuerdo 286
de la sep, el sistema permite explorar carreras, solicitar informacion, gestionar contactos/dudas mientras que el administrador gestiona los registros desdeun panel
# Caracteristicas prncipales 
## Para usuarios 
> pagina principal(index.html)
- sitio web responsivo con diseño moderno y tema claro y oscuro
- navegacion de pagina unica con tranciciones suaves, entre secciones
- oferta educativa completa con 10 carreras 
- carrusel interactivo para mostrar las carreras destacadas 
- sistema de busqueda y filtrado  de carreras 
- modal de detalles con informacion sobre cada carrera 
- gestion de sucursales
- formulario de contacto con validacion
- seccion de noticias
- informacion detallada sobre el acuerdo 286

## Para administrador 
> panel(admin.html)
- panel de control 
- gestion de contactos recibidos desde el formulario 
- sistema de estados (pendiente, revisado y deshabiulitado)
- glosario contextual 
- exportacion 

## Sistema de authenticacion
> login(login.html)
- registro e inicio secion de usuarios 
- redireccion autoamtica e el panel del administrador

# Tecnologias utilizadas 
## Frontend 
- html5 estructura 
- css estilos con variables css 
- java script interactividad y logica 
- pouchdb base de datos en el navegador local 
- front awesome iconografia 

## caracterusticas tecnicas 
- diseño responsivo
-  modo claro y oscuro 
- validacion de formularios 
- scroll suave 
- optimizacion de rendimiento 


# instalacion y uso 
## requisitos 
- navegador web actual 
- conexion a internet 

## credenciales de prueba 
- Email: admin@gmail.com
- contraseña: admin123

# configuracion 
## personalizacion 
- logo de la empresa 
- colores modificables en las variables en root: 

## base de datos 
### el prototipo utlliza pouch db como almavenamiento local 
- rem-contactos: Almacena formularios de contacto 
- rem-users: Almacena credenciales de administradores

# Seccione del sitio 
## inicio
- hero section 
- carrusel con carreras destacadas 
- grid de noticias recientes 
- informacion sobre ruta286

## noostros 
- mision, vision y valores 
- historia institucional
- logros 

## oferta Educativa 
- 10 carreras categorizadas 
- sistema de busqueda y filtrado 
- modal con detalles 

## ruta 286/ acuerdo 286
- explicacion mas detallada del acuerdo 
- beneficios y requisitos 
- proceso  de implementacion 

## suscursales 
- 4 ubicaciones 
- informacionde contacto por cada sucursal 
- horarios de atencion

## noticias 
- listado de articulos 
- diseño tipo tarjetas 

## contacto 
- formulario con validacion 
- informacion de contacto 
- enlaces a redes sociales 

# roles de usuario 
## visitante 
- explorar carreras 
- leer noticias u articulos 
- consultar informacion de contacto 
- enviar solicitudes de informacion

## administrador 
- gestionar contactos recibidos 
- cambiar estados de solicitudes 
- ver estadisticas de contacto
- acceder a mensajes completos

# base de datos local 
## estructura de documentos 
> contactos 
{
  _id: "contact_TIMESTAMP",
  nombre: "Nombre completo",
  email: "correo@ejemplo.com",
  telefono: "5512345678",
  asunto: "tipo_de_consulta",
  mensaje: "Texto del mensaje",
  status: "pendiente|revisada|deshabilitada",
  createdAt: "ISO fecha"
}
>usuarios 
{
  _id: "user_EMAIL",
  name: "Nombre completo",
  email: "correo@ejemplo.com",
  passwordHash: "hash_sha256",
  createdAt: "ISO fecha"
}

# compatibilidad 
- chrome 
- firefox 
- safari 
- edge 
- opera 
- dispositivos moviles 

# licencia
este proyecto es de uso institucional para Red Educativa Mexico. todos los derechos reservados. 

# soporte 
para soporte tecnico 
- email: admin@rededucativamexico.org
- telefono: 800 0440 189
- horarios: lunes a sabados 9:00 a 18:00 hrs 


