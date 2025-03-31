for (let i = 1; i <= 5; i++) {
    console.log("Iteration:", i);
}


let count = 0;
while (count < 5) {
    console.log("Count:", count);
    count++;
}


let num = 0;
do {
    console.log("Number:", num);
    num++;
} while (num < 5);


let age = 18;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}


let score = 75;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}


const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.send("Hello, World!");
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


const axios = require("axios");
const cheerio = require("cheerio");

async function scrapeWebsite(url) {
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);


        $("h1, h2, h3").each((i, el) => {
            console.log($(el).text().trim());
        });

    } catch (error) {
        console.error("Error scraping website:", error);
    }
}

scrapeWebsite("https://example.com");
