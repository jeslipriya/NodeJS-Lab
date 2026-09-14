
const mongoose = require("mongoose");

async function main() {
    await mongoose.connect(
        "mongodb://127.0.0.1:27017/testdb"
    );

    console.log("Connected");

    const schema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },

        email: {
            type: String,
            match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        }
    });

    const Model = mongoose.model("Test", schema);

    const data = new Model({
        name: "Smith",
        email: "sk@gmail.com"
    });

    try {
        await data.save();
        console.log("Saved Successfully");
    } catch (err) {
        console.log(err.message);
    }

    await mongoose.disconnect();
}

main().catch(console.error);