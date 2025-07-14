# Rikuya-Thing-Backend

Rikuya-Thing-Backend is a backend application built with [Fastify](https://www.fastify.io/) and TypeScript. This project is designed to provide a modular and scalable structure.

## Key Features

- **Framework**: Fastify for high performance.
- **TypeScript**: Utilizes TypeScript for safer development.
- **Modular Structure**: Components are separated into folders such as controllers, models, routes, etc.
- **Plugins**: Supports Fastify plugins for handling authentication, configuration, etc.
- **Testing**: Includes unit and integration testing.

## Todo

- [x] make request validator
- [x] apply request validator to all existing endpoint
- [x] refactor existing code
- [x] better auth
- [ ] unit testing
- [ ] add rate limit

## Folder Structure

```plaintext
Rikuya-Thing-Backend/
├── src/
│   ├── controllers/       # Controllers to handle request logic
│   │   ├── user-controller.ts
│   │   ├── product-controller.ts
│   │   └── ...
│   ├── models/            # Models for data and database schemas
│   │   ├── user-model.ts
│   │   ├── product-model.ts
│   │   └── ...
│   ├── routes/            # Application routing
│   │   ├── user-routes.ts
│   │   ├── product-routes.ts
│   │   └── ...
│   ├── services/          # Core business logic
│   │   ├── user-service.ts
│   │   ├── product-service.ts
│   │   └── ...
│   ├── plugins/           # Fastify plugins (e.g., authentication)
│   │   ├── auth-plugin.ts
│   │   └── ...
│   ├── schema/           # Request / Response validator
│   │   ├── user-schema.ts
│   │   └── ...
│   ├── config/            # Application configuration (e.g., database connection)
│   │   ├── db-config.ts
│   │   └── ...
│   ├── utils/             # Utility functions such as logger
│   │   ├── logger.ts
│   │   └── ...
│   ├── types/             # All Type Store
│   │   ├── web.ts
│   │   └── ...
│   ├── index.ts           # Application entry point
│   ├── server.ts          # Fastify server
│   └── app.ts             # Application initialization
├── tests/                 # Testing files
│   ├── unit/              # Unit testing
│   │   ├── userController.test.ts
│   │   ├── productService.test.ts
│   │   └── ...
│   ├── integration/       # Integration testing
│   │   ├── userRoutes.test.ts
│   │   └── ...
│   └── ...
├── .env                   # Environment configuration file
├── .gitignore             # Git ignore file
├── .eslintrc.json         # ESLint configuration
├── .prettierrc            # Prettier configuration
├── LICENSE                # Project license
├── package.json           # NPM configuration file
├── nodemon.json           # Nodemon configuration
├── README.md              # Project documentation
└── tsconfig.json          # TypeScript configuration
```

## Scripts

Here are the available scripts in the `package.json` file:

```json
"scripts": {
  "build": "tsc && tsc-alias",
  "dev": "npx nodemon",
  "start": "node dist/index.js",
  "format": "prettier --write \"src/**/*.ts\" \"test/**/*.ts\"",
  "lint": "eslint \"{src,apps,libs,test}/**/*.ts\" --fix"
}
```

- `build`: Compiles the TypeScript code and resolves path aliases.
- `dev`: Starts the development server using Nodemon.
- `start`: Runs the application in production mode.
- `format`: Formats the code using Prettier.
- `lint`: Lints and fixes the code using ESLint.

## How to Run the Project

### Prerequisites

Ensure you have the following installed:

- Node.js (latest version recommended)
- NPM or Yarn

### Steps

1. Clone this repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd Rikuya-Thing-Backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file based on the `.env.example` file (if provided).
5. Run the application in development mode:
   ```bash
   npm run dev
   ```
6. Access the application at `http://localhost:3000` (default).

## Contribution

If you'd like to contribute to this project, please create a new branch and submit a pull request. Make sure to follow the coding standards defined.

## License

This project is licensed under the [MIT License](./LICENSE).
