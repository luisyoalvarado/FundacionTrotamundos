// src/schemaTypes/event.ts
export default {
  name: 'event',
  title: 'Eventos y Misiones', // Título para Axel
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Nombre del Evento',
      type: 'string',
      description: 'Ejemplo: Misión Educativa en Bánica 2026',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Fecha y Hora del Evento',
      type: 'datetime',
      description: 'Asegúrate de poner la fecha correcta. Los eventos con fechas pasadas se moverán automáticamente al archivo histórico en la web.',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'location',
      title: 'Lugar / Ubicación',
      type: 'string',
      description: 'Ciudad, país o lugar específico.',
    },
    {
      name: 'description',
      title: 'Descripción del Evento',
      type: 'text',
      rows: 4,
      description: 'Cuéntale a la comunidad de qué trata este evento.',
    },
    {
      name: 'image',
      title: 'Foto del Evento',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'link',
      title: 'Enlace Externo (Opcional)',
      type: 'url',
      description: 'Si hay un formulario de registro o más info en otra página, pega el link aquí.',
    }
  ],
}