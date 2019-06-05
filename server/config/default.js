module.exports = {
    mongodb: "mongodb://localhost:27017/living",
    port: 8080,
    session: {
        secret: "living",
        key: "living",
        maxAge: 1000 * 520
    }
}
