module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      origin: (origin, callback) => {
        if (!origin) {
          return callback(null, true);
        }
        
        const allowedOrigins = [
          'http://localhost:8080',
          'https://www.consultorfamiliar.com.br',
          'https://consultorfamiliar.com.br',
        ];
        
        if (allowedOrigins.includes(origin)) {
          return callback(null, true);
        }
        
        if (origin.match(/^https:\/\/[a-zA-Z0-9\-\.]+\.lovable\.app$/)) {
          return callback(null, true);
        }
        
        return callback(new Error('Not allowed by CORS'));
      },
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      keepHeaderOnError: true,
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
