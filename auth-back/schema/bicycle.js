const mongoose = require("mongoose");

const bicycleSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true }, // Ruta de la imagen (puedes almacenar la imagen en algún servicio de almacenamiento y guardar la URL aquí)
});

module.exports = mongoose.model("Bicycle", bicycleSchema);
