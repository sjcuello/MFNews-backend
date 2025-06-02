# MFNews Backend

This is the backend for the MFNews app. 

## How to run the app
__Note:__ You need to have NodeJS (v20) installed in your machine to run this app. Also a Postgres (v15) database is required.

1. Clone the repository
    ```bash
    git clone https://github.com/sjcuello/MFNews-backend.git
    ```
2. Enter the project directory
    ```bash
    cd MFNews-backend
    ```
3. Copy the `.env.example` file and rename it to `.env`. You can do this easily by running:
    ```bash
    cp .env.example .env
    ```
    >__Note:__ You need to fill the `.env` file with your own database credentials. Change the `DATABASE_URL` variable to point to your Postgres database or a docker container running Postgres.
    
4. Install the dependencies
    ```bash
    npm install
    ```
5. Generate the database
    ```bash
    npx prisma generate
    ```
6. Run the migrations
    ```bash
    npx prisma migrate dev
    ```
7. Run the seed
    ```bash
    npx prisma db seed 
    ```
8. Start the server
    ```bash
    npm run dev
    ```
### Accessing the server
The server will be running on `http://localhost:3000`
The documentation will be available on `http://localhost:3000/docs`

## Testing
If you want to run the tests, you can do so with:
```bash
npm run test
```

## Technologies Used
- NodeJS
- Express
- Prisma
- Postgres
- TypeScript
- Swagger
- Joi
- Jest