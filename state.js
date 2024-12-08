// Get the state parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
const state = urlParams.get('state');

// State data (you can replace this with data from a database or API)
const stateData = {
    maharashtra: {
        soil: "Black Soil, also called Regur soil, suitable for cotton due to moisture retention",
        weather: "Hot climate, moderate rainfall, deep black soils ideal for cotton",
        crop:"Cotton, Sugarcane, Turmeric",
        fertilizers:"Nitrogen, Potash, Phosphate fertilizers, Micronutrients",
        common:"Water scarcity, bollworm attacks on cotton,low soil fertility",
        treatment:"Drip irrigation for water efficiency, BT cotton to reduce pest attacks"

    },
    gujarat: {
        soil: "Black Soil, rich in lime and magnesium, great for cotton and groundnut",
        weather: "Hot and dry climate, irrigation required for cash crops like cotton",
        crop:"Cotton, Groundnut, Tobacco",
        fertilizers:"Nitrogen and Phosphate fertilizers, Microbial fertilizers",
        common:"Disease outbreaks in cotton, drought conditions reducing yield",
        treatment:"Integrated disease management for cotton, drought-resistant crop varieties"
    },
    punjab: {
        soil: "Alluvial Soil, known for high fertility and suitability for wheat and paddy cultivation",
        weather: "Cool winters for wheat, hot summers with irrigation for rice, moderate rainfall",
        crop:"Wheat, Rice, Maize",
        fertilizers:"Urea, DAP, Potassium nitrate",
        common:"Pest attacks (wheat rust), waterlogging during rice cultivation",
        treatment:"Timely fungicide application for wheat rust, improved drainage for rice fields"
    },
    Haryana: {
        soil: "Alluvial Soil, ideal for rice-wheat rotation systems and rich in potash",
        weather: "Cool winters, waterlogged soils avoided, timely irrigation for rice and wheat",
        crop:"Wheat, Rice, Mustard",
        fertilizers:"Urea, Phosphatic fertilizers, Bio-fertilizers",
        common:"Soil degradation due to excessive irrigation, pest infestations",
        treatment:"Adoption of drip irrigation, application of neem-based bio-pesticides"
    },
    UttarPradesh: {
        soil: "Alluvial Soil, mixed with sandy loam, excellent for sugarcane and wheat production",
        weather: "Hot climate, well-distributed rainfall, high water availability for sugarcane",
        crop:"Sugarcane, Wheat, Rice",
        fertilizers:"Nitrogen-rich fertilizers, Organic compost",
        common:"Soil salinity, pest damage to sugarcane, declining groundwater",
        treatment:"Leaching of salts from saline soils, integrated pest management practices"
    },
    MadhyaPradesh: {
        soil: "Black Soil, retains moisture well, ideal for soybean and wheat crops",
        weather: "Warm climate, moderate water for wheat, well-drained black soils for soybean",
        crop:"Wheat, Soybean, Gram",
        fertilizers:"Potash and Phosphate fertilizers, Green manure",
        common:"Nutrient deficiency, weed infestation in soybean fields",
        treatment:"Balanced fertilizer application, herbicide use for weed control"
    },
    TamilNadu: {
        soil: "Red Soil, acidic and poor in humus, suited for rice and millets",
        weather: "High temperature, consistent monsoon rainfall for rice and millets",
        crop:"Rice, Millets, Coconut",
        fertilizers:"Urea, DAP, Organic compost",
        common:"Weed overgrowth in rice fields, poor nutrient availability in millets",
        treatment:"Weed control using selective herbicides, application of lime for acidic soils"
    },
    WestBengal: {
        soil: "Laterite Soil, nutrient-deficient but supports rice and jute in high rainfall areas",
        weather: "Humid climate, high rainfall for rice, flood-prone areas for jute",
        crop:"Rice, Jute, Pulses",
        fertilizers:"Nitrogen, Phosphate-rich fertilizers, Vermicompost",
        common:"Flooding during monsoon affecting jute, pest infestations",
        treatment:"Flood-resistant rice varieties, use of pheromone traps for pest control"
    },
    Rajasthan: {
        soil: "Desert Soil, sandy and low in fertility, supports bajra with minimal rainfall",
        weather: "Low rainfall, dry conditions, sandy soils suitable for bajra",
        crop:"Bajra, Wheat, Mustard",
        fertilizers:"Potash-based fertilizers, Organic fertilizers",
        common:"Soil erosion due to wind, poor organic matter in desert soils",
        treatment:"Windbreaks to reduce erosion, addition of organic compost to improve fertility"
    },
    Karnataka: {
        soil: "Red Soil, mixed with loamy textures, suitable for ragi and millets",
        weather:"Warm and moderate rainfall, well-drained soils for ragi",
        crop:"Ragi, Millets, Coffee",
        fertilizers:"Organic fertilizers, Potash, Lime",
        common:"Blast disease in ragi, stem borers in millets, poor soil nutrients",
        treatment:"Seed treatment for blast disease, organic pesticides for stem borers"
    },
    AndhraPradesh: {
        soil: "Black soil and Red soil ",
        weather:"Warm temperatures, moderate to high rainfall and irrigation for crops like rice",
        crop:"Rice, Cotton, Tobacco, Groundnuts, and Pulses",
        fertilizers:"Nitrogen, Phosphorous, Potassium [NPK] fertilizers, organic compost, and green manure",
        common:"Soil erosion, and salinity in irrigated areas.",
        treatment:"Addition of organic matter, and gypsum for salinity, contour binding etc."
    },
    Telangana: {
        soil: "Black soil, Red soil, and Laterite Soil ",
        weather:"Tropical climate with ~ 1000 mm rainfall",
        crop:"Cotton, Rice, Maize, and Pulses",
        fertilizers:"Biofertilizers along with phosphate and potash elements.",
        common:"Soil alkalinity and poor organic content ",
        treatment:"Use of gypsum, crop rotation with legumes, and organic mulching of soil."
    },
    Odisha: {
        soil: "Laterite Soil and Alluvial Soil",
        weather:"High rainfall and warm temperatures [up to 1600 mm rainfall and upto 35*C]",
        crop:"Rice, Jute, Sugarcane",
        fertilizers:"Urea, Potash, and Biofertilizers",
        common:"Waterlogging, Soil acidity",
        treatment:"Proper drainage systems and liming for acidic soils."
    },
    Chhattisgarh: {
        soil: "Red Soil and Laterite Soil ",
        weather:"Tropical climate with upto 1400 mm rainfall",
        crop:"Rice, Maize, Oilseeds etc.",
        fertilizers:"Phosphorous-based fertilizers, and green manure",
        common:"Nutrient depletion and soil erosion",
        treatment:"Agroforestry, crop diversification, and organic manure."
    },
    Bihar: {
        soil: "Alluvial Soil for crops like wheat, rice, maida etc.",
        weather:"Moderate rainfall [upto 1500 mm] and fertile plains",
        crop:"Wheat, Rice, Maize, Sugarcane, and Pulses.",
        fertilizers:"Urea, DAP, Organic compost",
        common:"Waterlogging and salinity are the major issues",
        treatment:"Improved drainage and the use of salt-tolerant crop varieties."
    },
    Jharkhand: {
        soil: "Red Soil and Laterite Soil ",
        weather:"Warm climate with rainfall upto 1400 mm",
        crop:"Rice, Maize, Pulses, Oilseeds etc.",
        fertilizers:"Biofertilizers along with phosphate elements.",
        common:"Soil acidity and poor water retention.",
        treatment:"Liming for pH correction, and adding organic mulch to retain moisture in the soil."
    },
    Assam: {
        soil: "Alluvial Soil for crops like rice, jute etc.",
        weather:"High rainfall and humid climate [upto 2500 mm rainfall]",
        crop:"Tea, Rice, Jute, and Sugarcane",
        fertilizers:"Nitrogen-rich fertilizers, Potash for jute",
        common:"Soil erosion due to wind, acidity",
        treatment:"Contour farming, liming for acidic soils, and cover crops"
    },
    ArunachalPradesh: {
        soil: "Red Soil, Forest Soil",
        weather:"Hilly terrains with high rainfall upto 2500 mm",
        crop:"Rice, Maize, Millets, Horticulture crops",
        fertilizers:"Biofertilizers and farmyard manure",
        common:"Soil erosion and acidity ",
        treatment:"Terrace farming and organic mulching of soil"
    },
    Nagaland: {
        soil: "Forest Soil for rice and maize",
        weather:"Humid climate, high rainfall for rice [upto 2500 mm]",
        crop:"Rice, Maize, Millets, Horticulture crops",
        fertilizers:"Organic manure, Potash-based fertilizers",
        common:"Erosion during jhum cultivation",
        treatment:"Shifting to permanent farming methods, and reforestation of the area"
    },
    Meghalaya: {
        soil: "Lateritic Soil, Forest Soil",
        weather:"Mild temperatures with high rainfall upto 3000 mm",
        crop:"Rice, Potato, Turmeric, and Pineapple",
        fertilizers:"Potassium-based and organic fertilizers",
        common:"Soil acidity and leaching",
        treatment:"Liming and controlled irrigation"
    },
    Manipur: {
        soil: "Red Soil, Forest Soil",
        weather:"Tropical monsoon climate with upto 2500 mm rainfall",
        crop:"Rice, Maize, Horticulture crops",
        fertilizers:"Farmyard manure and phosphatic fertilizers",
        common:"Soil eroison on hill slopes",
        treatment:"Terrace farming and organic matter addition"
    },
    Tripura: {
        soil: "Alluvial Soil for crops like rice, jute etc. and Red Soil for the rest",
        weather:"Tropical climate with high rainfall upto 2000 mm",
        crop:"Rice, Jute, Rubber, and Horticulture Crops",
        fertilizers:"NPK fertilizers and organic manure",
        common:"Soil acidity and waterlogging due to poor water retention",
        treatment:"Liming and proper drainage systems"
    },
    Mizoram: {
        soil: "Forest Soil for rice and maize",
        weather:"Rainfall upto 2500 mm with warm and humid climate",
        crop:"Rice, Maize, Oilseeds etc.",
        fertilizers:"Organic manure with nitrogen-rich fertilizers",
        common:"Soil erosion due to shifting cultivation",
        treatment:"Contour farming and additional reforestation"
    },
    Sikkim: {
        soil: "Forest Soil and Red Soil",
        weather:"Temperate climate with high rainfall upto 3000 mm",
        crop:"Cardamom, Maize, Potato, and Ginger",
        fertilizers:"Organic composting and farmyard manure",
        common:"Soil erosion due to wind, acidity",
        treatment:"Terrace farming and organic matter addition"
    },
    HimachalPradesh: {
        soil: "Mountain Soil and Forest Soil",
        weather:"Temperate climate with moderate rainfall upto 1200 mm",
        crop:"Apple, Maize, Wheat and Barley",
        fertilizers:"Organic manure, and Urea for wheat",
        common:"Soil erosion and nutrient depletion",
        treatment:"Reforestation and organic farming practices"
    },
    Uttarakhand: {
        soil: "Mountail Soil and Alluvial Soil",
        weather:"Varied climate with rainfall upto 1500 mm",
        crop:"Wheat, Rice, Sugarcane, and Tea",
        fertilizers:"Nitrogen and Potash-rich biofertilizers",
        common:"Erosion on hill slopes",
        treatment:"Terrace farming and cover crops"
    },
    Kerala: {
        soil: "Lateritic Soil that is good for rubber and coconut",
        weather:"High rainfall upto 3000 mm with a tropically humid climate",
        crop:"Rubber, RRice, Coconut, and Spices",
        fertilizers:"Mainly some Potassic biofertilizers",
        common:"Soil acidity and leaching",
        treatment:"Liming and mulching of soil to reduce leaching"
    },
    Goa: {
        soil: "Lateritic Soil that is good for coconuts",
        weather:"High rainfall upto 3000 mm with tropical climate",
        crop:"Rice, Coconut, Cashew, and Mango",
        fertilizers:"Organic manure and Urea",
        common:"Soil erosion, Salinity of soil",
        treatment:"Proper drainage systems and cover cropping"
    },
    Chandigarh: {
        soil: "Alluvial Soil for crops like rice, wheat etc.",
        weather:"Fertile, well-drained soil suitable for diverse crops",
        crop:"Rice, Wheat, and Vegetables",
        fertilizers:"Chemical fertilizers like Urea, DAP etc. and organic compost",
        common:"Soil salinity and nutrient depletion",
        treatment:"Crop rotation and balanced fertilizer application"
    },
    DadraAndNagarHaveli: {
        soil: "Alluvial Soil for rice and coconut",
        weather:"Fertile, well-drained soil amd tropical climate",
        crop:"Rice, Cashew, Coconut",
        fertilizers:"A mix of organic and chemical fertilizers",
        common:"Soil erosion and nutrient leaching",
        treatment:"Improved drainage and organic amendments"
    },
    DamanAndDiu: {
        soil: "Alluvial Soil for rice and coconut",
        weather:"Fertile, well-drained soil amd tropical climate",
        crop:"Rice, Cashew, Coconut",
        fertilizers:"A mix of organic and chemical fertilizers",
        common:"Soil erosion and nutrient leaching",
        treatment:"Improved drainage and organic amendments"
    },
    Delhi: {
        soil: "Alluvial Soil",
        weather:"Fertile, well-drained soil suitable for various crops",
        crop:"Wheat, Rice, Pulses",
        fertilizers:"Chemical fertilizers like Urea, DAP etc. and organic compost",
        common:"Soil salinity and nutrient depletion",
        treatment:"Crop rotation and balanced fertilizer application"
    },
    Puducherry: {
        soil: "Alluvial Soil for crops like rice, wheat etc.",
        weather:"Fertile, well-drained soil suitable for diverse crops",
        crop:"Rice, Pulses, and Vegetables",
        fertilizers:"Chemical fertilizers like Urea, DAP etc. and organic compost",
        common:"Soil salinity and nutrient depletion",
        treatment:"Crop rotation and balanced fertilizer application"
    },
    JammuAndKashmir: {
        soil: "Alluvial Soil and Mountain Soil",
        weather:"Varies from fertile river valleys to hilly terrains",
        crop:"Rice, Saffron, and Fruits like Apples and Cherries",
        fertilizers:"Organic fertilizers and limited chemical fertilizers",
        common:"Soil erosion and nutrient deficiency",
        treatment:"Terrace farming and afforestation in hilly areas"
    },
    Lakshadweep: {
        soil: "Sandy Soil",
        weather:"Coastal, well-drained soil with high salinity",
        crop:"Coconut and Areca Nut",
        fertilizers:"Organic fertilizers and limited chemical fertilizers",
        common:"Salinity and low fertility",
        treatment:"Use of salt-tolerant crop varieties and organic mulching of soil"
    },
    AndamanAndNicobar: {
        soil: "Lateritic Soil for rubber and coconut",
        weather:"Tropical climate, well-drained soil, and high rainfall",
        crop:"Cocounut, Rubber, and Spices",
        fertilizers:"Organic fertilizers, and NPK fertilizers",
        common:"Soil erosion and nutrient leaching",
        treatment:"Afforestation and organic amendments to improve soil fertility"
    },


   
   
    
};

// Update the page content
if (state && stateData[state]) {
    document.getElementById('state-name').textContent = state.charAt(0).toUpperCase() + state.slice(1);
    document.getElementById('weather-info').textContent = stateData[state].weather;
    document.getElementById('soil-info').textContent = stateData[state].soil;
    document.getElementById('crop-info').textContent = stateData[state].crop;
    document.getElementById('fertilizers-info').textContent = stateData[state].fertilizers;
    document.getElementById('common-info').textContent = stateData[state].common;
    document.getElementById('treatment-info').textContent = stateData[state].treatment;
    
} else {
    document.getElementById('state-name').textContent = "State Not Found";
    document.querySelector('.info-container').innerHTML = "<p>No data available for this state.</p>";
}
