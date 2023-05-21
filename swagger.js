const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Swagger configuration options
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Weather API',
      version: '1.0.0',
      description: 'Weather API RESTful using NodeJS',
    },
  },
  apis: ['./routes/*.js'], // Path to the API routes in your project
};

// Initialize Swagger-jsdoc
const specs = swaggerJsdoc(options);

// Export a function to set up Swagger documentation
module.exports = function (app) {
  // Swagger UI route
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};
