export default {
    name: 'abouts',  // Identificador único para el tipo de documento.
    title: 'Abouts',  // Nombre descriptivo que aparece en la interfaz de usuario.
    type: 'document',  // Especifica que el objeto es un documento.
    fields: [  // Define los campos contenidos en el documento.
        {
            name: 'title',  // Identificador para el campo del título.
            title: 'Title',  // Etiqueta del campo que aparece en la UI.
            type: 'string'  // Tipo de dato para texto corto.
        },
        {
            name: 'description',  // Identificador para el campo de descripción.
            title: 'Description',  // Etiqueta del campo que aparece en la UI.
            type: 'string'  // Tipo de dato para texto largo.
        },
        {
            name: 'imgUrl',  // Identificador para el campo de imagen.
            title: 'ImgUrl',  // Etiqueta del campo que aparece en la UI.
            type: 'image',  // Tipo de dato para imágenes.
            options: {
                hotspot: true,  // Permite ajustar el enfoque de la imagen.
            },
        }
    ]
}
