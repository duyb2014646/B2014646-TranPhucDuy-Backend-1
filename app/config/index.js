const config = {
    db: {
        uri: process.env.MONGODB_URI || "mongodb+srv://test:test@cluster0.olrqmwy.mongodb.net/",
    },

    app: {
        port: process.env.PORT || 3000,
    }
};

module.exports = config;