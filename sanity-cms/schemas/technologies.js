// schemas/technologies.js

export default {
    name: 'technologies',
    title: 'Technologies',
    type: 'document',
    fields: [
      {
        name: 'Technologies',
        title: 'Technology',
        type: 'array',
        of: [{ type: 'string' }],
      },
    ],
  };
  