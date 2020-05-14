module.exports = {
    developtment: {
        client: "sqlite3",
        connection: {
            filename: "./data/hobbits.db3",
        },
        useNullAsDefault: true,
        migrations: {
            directory: "./data/migrations",
        },
        seeds: {
            directory: "./data/seeds",
        },
    },
    testing: {
        client: "sqlite3",
        connection: {
            filename: "./data/hobbits-test.db3",
        },
        useNullAsDefault: true,
        migrations: {
            directory: "./data/migrations",
        },
        seeds: {
            directory: "./data/seeds",
        },
    },
};
// npx knex migrate:latest --env=testing for testing database
// npx knex seed:run --env=testing
