# Mãos Entrelaçadas REST API

This is a RESTful API developed using [NestJS](https://nestjs.com), aiming help the NGO "Mãos Entrelaçadas";

## Description

The Mãos Entrelaçadas REST API is a final paper to Systems analysis and development course, aiming help the NGO "Mãos Entrelaçadas" collect funds, implements technology stronger and reach more people with this same technology. It utilizes the NestJS framework, a progressive Node.js framework for building efficient, reliable and scalable server-side applications. 

## Resources

The API offers the following resources:

- **Auth**: Login with user.
- **Announcements**: Management of announcements such as creating, listing, updating and deleting.
- **Events**: Managemet of events such as creating, listing, updating, deleting and sign an user to a specific event.
- **Genders**: Management of genders such as creating, listing and deleting.
- **User**: Management of users such as creating, listing, updating, deleting and get all events signed by the user.
## Installation

Follow the instructions below to set up and run the project on your local environment:

1. Clone this repository to your computer using the command:

```shell
git clone https://github.com/FernandoBrino/maos_entrelacadas.git
```

2. Access the project directory:

```shell
cd maos_entrelacadas
```

3. Install the project dependencies:

```shell
npm install
```

4. Run migrations:

```shell
npm run:migration
```

5. Start the development server:
```shell
npm start:dev
```

6. The server will be running locally at `http://localhost:3000`.

## Usage

After starting the server, you can use the API through Swagger, accessing `_baseURL/api`.

## Contribution

Contributions are welcome! If you find any issues, have suggestions, or want to add new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

---
Created by [Fernando Brino](https://github.com/FernandoBrino)
