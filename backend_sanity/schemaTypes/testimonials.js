export default {
    // Nombre del modelo de documento utilizado internamente
    name: 'testimonials',

    // Título del modelo que puede aparecer en interfaces de usuario
    title: 'Testimonials',

    // Tipo del modelo, en este caso, un documento
    type: 'document',

    // Array de campos que componen el documento
    fields: [
        {
            // Campo para el nombre de la persona que da el testimonio
            name: 'name',
            title: 'Name',
            type: 'string' // Tipo de datos para texto simple
        },
        {
            // Campo para el nombre de la empresa de la persona que da el testimonio
            name: 'company',
            title: 'Company',
            type: 'string' // Tipo de datos para texto simple
        },
        {
            // Campo para la URL de una imagen, como un retrato o logotipo
            name: 'imageurl',
            title: 'ImgURL',
            type: 'image', // Tipo de datos para imágenes
            options: {
                hotspot: true // Permite definir una zona focal en la imagen
            }
        },
        {
            // Campo para el texto del testimonio
            name: 'feedback',
            title: 'Feedback',
            type: 'string' // Tipo de datos para texto simple
        }
    ]
}
