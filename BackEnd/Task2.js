//Console log data về thời tiết hà nội từ api của openweathermap
//Tránh trường hợp lỗi API hoặc apiKey hết hạn e sẽ để 1 ảnh tên "Task2_dataThoiTietHaNoi" e đã lấy data thành công trong folder backEnd
const axios = require("axios");

const getWeatherData = async (city) => {
    const apiKey = "d362c7f1a209d06c96feea9bde2cf47f"; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await axios.get(url);
        const data = response.data;

        return {
            city: data.name,
            temperature: data.main.temp,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            timestamp: new Date().toISOString(),
        };
    } catch (error) {
        console.error("Lỗi:", error.message);
        return { error: "Lỗi API" };
    }
};


const fetchWeather = async () => {
    const result = await getWeatherData("Hanoi");
    console.log(result);
};

fetchWeather();

