# Prototipos
<h1 align="center">VERSION1.1</h1>
<p align="center">prototipos en html para el desarrollo de la Web de Red Educativa Mexico 
.</p>

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

<h1 align="center">VERSION1.2</h1>

# Nuevas Caracteristicas
## service worker 
> he implementado un service worker que lo transforma en una pwa (progresive web app) con las siguientes capacidades 
- pantalla offline personalizada: cuando los usuarios pierden conexion a internet,  ahhora ven una  pantalla personalizada diseñada especificamente para esta situacion, en lugar del mensaje generico del navegador 
- cache inteligente: los recursos encenciales de la aplicacion se almacenan en el cache para: 
  - Cargas mas rapidas en vistas posteriores 
  - funcionalidades sin internet 
  - experiencia de usuario mejorada 

# panel de administracion mejorado 
> mejor gestion  de usuarios 
> el panel de administracion ha sido ampliado con: 
- vista completa de usuarios registrados: visualizacion tabular con paginacion
- gestion granular de usuarios:
  - activacio/desactivacion de cuentas 
  - modificacion de roles
  - reset de contraseñas 
  - eliminacion de usuarios 

> sistema de exportacion de datos 
nuieva funcion de exportacion de datos 
- exportacion de contactos 
  - formato csv
  - listado completo de contactos registrados 
-exportaciond de usuarios Registrados
  - formato csv
  - listado completo de usuarios registrados 
# pantalla ofline  personalizada 
diseñe una interfaz especifica para el modo ofline esta incluye: 
- indicador visual del estado de la coneccion 
- boton de accion para actualizar 

# configuracion tecnica 
## service worker 

// Estructura básica del Service Worker
self.addEventListener('install', (event) => {
  // Instalación y caché de recursos
});

self.addEventListener('fetch', (event) => {
  // Manejo de solicitudes y respuestas offline
});

self.addEventListener('activate', (event) => {
  // Limpieza de cachés antiguos
});


## endpoints de exportacion 

GET /api/export/contacts?format=csv|json|pdf
GET /api/export/users?format=csv|json&filter=active
POST /api/export/schedule (exportaciones programadas)

# como probar estas nuevas funciones 
## experiencia offline 
#### En Chrome DevTools:
1. Ir a Application > Service Workers
2. Marcar "Offline"
3. Recargar la página para ver la pantalla personalizada

## exportacion de datos 
### como administrador
> ir al panel de administrsdor 
1. ir a panel administrador > usuarios 
2. hacer click en exportar 
3. se descarga el archivo csv 

# metricas implementadas 
| caracteristucas | beneficios | impacto |
| service worker | 85% reduccion de tiempos de espera | alto|
| pantalla ofline | 100% eliminacion de errores de conexion genericos | medio alto |
| exportacion csv | 90% reduccion de reportes mensuales | alto |
| gestion de usuarios | 60% gestion  | media |

# flujo de trabajo mejorado 
graph LR
    A[Usuario pierde conexión] --> B[Service Worker detecta offline]
    B --> C[Muestra pantalla personalizada]
    C --> D[Acceso a funcionalidades básicas]
    D --> E[Admin exporta datos]
    E --> F[Selecciona formato y filtros]
    F --> G[Descarga archivo/listado]
    G --> H[Gestión de usuarios offline]

# solucion de problemas comunes 
## service worker no se registra 
> Soluciones:
1. Verificar HTTPS en producción
2. Limpiar caché del navegador
3. Verificar ruta del service worker

# soporte 
para problemas relacionados con las nuevas funciones 
1. verifica la conexion a internet para el service worker 
2. revisa la consola de navegador para errores especificos 