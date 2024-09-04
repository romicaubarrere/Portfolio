export default {
    name: 'brands',  // Identificador único para el tipo de documento 'brands'.
    title: 'Brands',  // Nombre descriptivo que se muestra en la interfaz de usuario.
    type: 'document',  // Define que este esquema configura un documento almacenado.
    fields: [  // Define los campos del documento.
        {
            name: 'imgUrl',  // Campo para almacenar la URL de una imagen de la marca.
            title: 'ImgUrl',  // Etiqueta del campo que aparece en la UI para la imagen.
            type: 'image',  // Tipo de campo para la imagen, permite la carga de imágenes.
            options: {
                hotspot: true,  // Opción que permite definir un área focal en la imagen.
            },
        },
        {
            name: 'name',  // Campo para el nombre de la marca.
            title: 'Name',  // Etiqueta del campo que aparece en la UI para el nombre.
            type: 'string'  // Tipo de dato para texto, almacenando el nombre de la marca.
        }
    ]
}
