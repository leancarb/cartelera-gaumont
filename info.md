# Cartelera Gaumont

## Inicio

### Navbar

Logo Gaumont / INCAA a la izquierda, ul a la derecha (Cartelera, especiales, precios, botón dark mode, etc)
Dark mode: prefers-color-scheme y local cache

### Main

[Cartelera]
Cartelera con posters y nombre de la pelicula, cuando hover el poste, los demas se ponen fuera de foco (mas oscuro).
Cuando se hace click, se abre un overlay con información de la película

[(Refes)]
https://www.cinemark.com/
https://cineartecacodelphia.com.ar/
https://www.amctheatres.com/

[Sponsors]
Logos sponsors features [INCAA](http://www.incaa.gov.ar/)

[(Refe)]
https://catalogocineargentino.incaa.gob.ar/en/film/trenque-lauquen/

[Footer]
Footer #1
Texto DGPC

Footer #2
Logo Gaumont, dirección, teléfono
Links ul

### Overlay

Cuando se hace click, se abre el overlay.
Fondo con background image negro con opacidad para destacar el overlay.

- Poster
- Titulo (año)
- Duración
- Fechas
- Sala
- Director/a
- Género
- Sinopsis

Botón de trailer
Botón de compra -> Nuevo overlay

[(Refes)]
https://catalogocineargentino.incaa.gob.ar/en/film/trenque-lauquen/
https://www.cinemark.com/movies/taylor-swift-the-eras-tour

### Compra

Se limpia el overlay actual, con un aside con un resumen de la selección y entradas.
Se muestra el precio de la entrada general, jubilados, estudiantes, afiliados, discapacitados, empleados (si no elige general, salta una alerta diciendo que tiene que presentar la documentación).

[(Aside)]
Poster, nombre, día, hora, resumen
Resumen: se actualiza con la información seleccionada (ej: selecciono una entrada general, aparece una entrada general a la derecha y un total con un botón de pagar)

### Checkout

Mensaje diciendo que es solo a modo de simulación, que no ponga datos reales y que no se guarda ningun dato.
Input adentro de la tarjeta de crédito, detecta si es visa, mastercard o amex y cambia el color dependiendo cual sea.
Al poner pagar, se limpia el overlay, se pone que la compra fue exitosa (un porcentaje puede dar error), genera un codigo qr aleatorio.

# Estilos

[Colores]

- Azul INCAA: hsl(240, 100%, 50%);
- Dark blue INCAA: hsl(231, 53%, 34%);
- Darker blue INCAA: hsl(249, 91%, 25%);

- Celeste INCAA: hsl(195, 99%, 41%);
- Azul Gaumont: hsl(225, 62%, 37%);

# Otros

Accessible
Guía de pixeles/medidas
