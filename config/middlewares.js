module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      origin: (origin, callback) => {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        
        // Define allowed specific origins
        const allowedOrigins = [
          'http://localhost:8080',
          'https://www.consultorfamiliar.com.br',
          'https://consultorfamiliar.com.br',
        ];
        
        // Check if origin matches specific allowed origins
        if (allowedOrigins.includes(origin)) {
          return callback(null, true);
        }
        
        // Check if origin matches https://*.lovable.app pattern
        if (origin.match(/^https:\/\/.*\.lovable\.app$/)) {
          return callback(null, true);
        }
        
        // Reject all other origins
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
