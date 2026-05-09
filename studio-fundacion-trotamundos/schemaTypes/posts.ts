// src/schemaTypes/post.ts
export default {
  name: 'post',
  title: 'Artículos del Blog', // Esto es lo que verá Axel
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título del Artículo',
      type: 'string',
      description: 'Escribe un título llamativo para el blog.',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Enlace (URL)',
      type: 'slug',
      description: 'Haz clic en "Generate" para crear el enlace automáticamente basado en el título.',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Imagen de Portada',
      type: 'image',
      description: 'Esta es la foto principal que saldrá arriba del artículo.',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'publishedAt',
      title: 'Fecha de Publicación',
      type: 'datetime',
      initialValue: (new Date()).toISOString(),
    },
    {
      name: 'excerpt',
      title: 'Resumen Corto (SEO)',
      type: 'text',
      rows: 3,
      description: 'Escribe un resumen breve (2 líneas). Esto es lo que Google mostrará en los resultados de búsqueda.',
    },
    {
      name: 'body',
      title: 'Contenido del Artículo',
      type: 'array',
      description: 'Escribe aquí la historia. Puedes usar el botón (+) para insertar fotos entre los párrafos.',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Descripción de la foto (SEO)',
              description: 'Describe brevemente qué hay en la foto para ayudar a personas con discapacidad visual y a Google.',
            }
          ]
        }
      ]
    },
  ],
}