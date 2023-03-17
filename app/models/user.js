const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'customer' }
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema)



    
// <div id='map' style='width: 400px; height: 300px;'></div>
// <script>
// mapboxgl.accessToken = 'pk.eyJ1IjoiYWJoYXkxMjExIiwiYSI6ImNsM3lsd3J3aDNmY3MzY29ldmZiMXpwczcifQ.PRWnCa93vyC_coFwmp3w3Q';
// const map = new mapboxgl.Map({
//     container: 'map', // container ID
//     style: 'mapbox://styles/mapbox/streets-v12', // style URL
//     center: [85.67,20.1483], // starting position [lng, lat]
//     zoom: 9, // starting zoom
// });
// </script>