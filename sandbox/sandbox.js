import * as dataHandling from './dataHandling3H5DModule'
 
 const test3H5DForecast = {
    "cod": "200",
    "message": 0,
    "cnt": 40,
    "list": [
        {
            "dt": 1667012400,
            "main": {
                "temp": 14.25,
                "feels_like": 13.66,
                "temp_min": 13.41,
                "temp_max": 14.25,
                "pressure": 1006,
                "sea_level": 1006,
                "grnd_level": 1004,
                "humidity": 74,
                "temp_kf": 0.84
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 83
            },
            "wind": {
                "speed": 6.49,
                "deg": 160,
                "gust": 9.03
            },
            "visibility": 10000,
            "pop": 0.66,
            "rain": {
                "3h": 0.38
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-10-29 03:00:00"
        },
        {
            "dt": 1667023200,
            "main": {
                "temp": 13.84,
                "feels_like": 13.32,
                "temp_min": 13.42,
                "temp_max": 13.84,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 1004,
                "humidity": 78,
                "temp_kf": 0.42
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 92
            },
            "wind": {
                "speed": 7.18,
                "deg": 171,
                "gust": 10.58
            },
            "visibility": 10000,
            "pop": 0.84,
            "rain": {
                "3h": 0.37
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-10-29 06:00:00"
        },
        {
            "dt": 1667034000,
            "main": {
                "temp": 12.87,
                "feels_like": 12.33,
                "temp_min": 12.87,
                "temp_max": 12.87,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 1005,
                "humidity": 81,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 6.92,
                "deg": 169,
                "gust": 12.83
            },
            "visibility": 10000,
            "pop": 0.44,
            "rain": {
                "3h": 0.24
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-10-29 09:00:00"
        },
        {
            "dt": 1667044800,
            "main": {
                "temp": 12.93,
                "feels_like": 12.39,
                "temp_min": 12.93,
                "temp_max": 12.93,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 1008,
                "humidity": 81,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 98
            },
            "wind": {
                "speed": 6.31,
                "deg": 172,
                "gust": 11.03
            },
            "visibility": 10000,
            "pop": 0.48,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-10-29 12:00:00"
        },
        {
            "dt": 1667055600,
            "main": {
                "temp": 12.26,
                "feels_like": 11.66,
                "temp_min": 12.26,
                "temp_max": 12.26,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 1009,
                "humidity": 81,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 70
            },
            "wind": {
                "speed": 5.77,
                "deg": 178,
                "gust": 9.99
            },
            "visibility": 10000,
            "pop": 0.22,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-10-29 15:00:00"
        },
        {
            "dt": 1667066400,
            "main": {
                "temp": 10.61,
                "feels_like": 9.92,
                "temp_min": 10.61,
                "temp_max": 10.61,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 1009,
                "humidity": 84,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 49
            },
            "wind": {
                "speed": 8.92,
                "deg": 176,
                "gust": 13.08
            },
            "visibility": 10000,
            "pop": 0.42,
            "rain": {
                "3h": 0.35
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-10-29 18:00:00"
        },
        {
            "dt": 1667077200,
            "main": {
                "temp": 10.35,
                "feels_like": 9.4,
                "temp_min": 10.35,
                "temp_max": 10.35,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 1011,
                "humidity": 75,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 99
            },
            "wind": {
                "speed": 7.79,
                "deg": 173,
                "gust": 12.66
            },
            "visibility": 10000,
            "pop": 0.41,
            "rain": {
                "3h": 0.13
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-10-29 21:00:00"
        },
        {
            "dt": 1667088000,
            "main": {
                "temp": 11.84,
                "feels_like": 10.54,
                "temp_min": 11.84,
                "temp_max": 11.84,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 1014,
                "humidity": 56,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 69
            },
            "wind": {
                "speed": 7.57,
                "deg": 174,
                "gust": 12.69
            },
            "visibility": 10000,
            "pop": 0.33,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-10-30 00:00:00"
        },
        {
            "dt": 1667098800,
            "main": {
                "temp": 15.18,
                "feels_like": 13.88,
                "temp_min": 15.18,
                "temp_max": 15.18,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 1014,
                "humidity": 43,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 19
            },
            "wind": {
                "speed": 7.92,
                "deg": 195,
                "gust": 11.84
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-10-30 03:00:00"
        },
        {
            "dt": 1667109600,
            "main": {
                "temp": 16.14,
                "feels_like": 14.93,
                "temp_min": 16.14,
                "temp_max": 16.14,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 1014,
                "humidity": 43,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 49
            },
            "wind": {
                "speed": 8.51,
                "deg": 199,
                "gust": 12.63
            },
            "visibility": 10000,
            "pop": 0.05,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-10-30 06:00:00"
        },
        {
            "dt": 1667120400,
            "main": {
                "temp": 15.42,
                "feels_like": 14.38,
                "temp_min": 15.42,
                "temp_max": 15.42,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 1015,
                "humidity": 52,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 71
            },
            "wind": {
                "speed": 8.7,
                "deg": 192,
                "gust": 11.97
            },
            "visibility": 10000,
            "pop": 0.21,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-10-30 09:00:00"
        },
        {
            "dt": 1667131200,
            "main": {
                "temp": 13.5,
                "feels_like": 12.34,
                "temp_min": 13.5,
                "temp_max": 13.5,
                "pressure": 1021,
                "sea_level": 1021,
                "grnd_level": 1018,
                "humidity": 55,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 60
            },
            "wind": {
                "speed": 5.57,
                "deg": 173,
                "gust": 9.39
            },
            "visibility": 10000,
            "pop": 0.03,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-10-30 12:00:00"
        },
        {
            "dt": 1667142000,
            "main": {
                "temp": 11.49,
                "feels_like": 10.39,
                "temp_min": 11.49,
                "temp_max": 11.49,
                "pressure": 1023,
                "sea_level": 1023,
                "grnd_level": 1020,
                "humidity": 65,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 10
            },
            "wind": {
                "speed": 4.66,
                "deg": 162,
                "gust": 8.38
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-10-30 15:00:00"
        },
        {
            "dt": 1667152800,
            "main": {
                "temp": 11.03,
                "feels_like": 9.96,
                "temp_min": 11.03,
                "temp_max": 11.03,
                "pressure": 1022,
                "sea_level": 1022,
                "grnd_level": 1019,
                "humidity": 68,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 25
            },
            "wind": {
                "speed": 3.18,
                "deg": 155,
                "gust": 5.29
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-10-30 18:00:00"
        },
        {
            "dt": 1667163600,
            "main": {
                "temp": 10.8,
                "feels_like": 9.76,
                "temp_min": 10.8,
                "temp_max": 10.8,
                "pressure": 1024,
                "sea_level": 1024,
                "grnd_level": 1020,
                "humidity": 70,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 54
            },
            "wind": {
                "speed": 3.04,
                "deg": 158,
                "gust": 6.6
            },
            "visibility": 10000,
            "pop": 0.02,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-10-30 21:00:00"
        },
        {
            "dt": 1667174400,
            "main": {
                "temp": 14.68,
                "feels_like": 13.51,
                "temp_min": 14.68,
                "temp_max": 14.68,
                "pressure": 1025,
                "sea_level": 1025,
                "grnd_level": 1022,
                "humidity": 50,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 39
            },
            "wind": {
                "speed": 4.31,
                "deg": 175,
                "gust": 7.89
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-10-31 00:00:00"
        },
        {
            "dt": 1667185200,
            "main": {
                "temp": 17.44,
                "feels_like": 16.44,
                "temp_min": 17.44,
                "temp_max": 17.44,
                "pressure": 1025,
                "sea_level": 1025,
                "grnd_level": 1022,
                "humidity": 46,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 10
            },
            "wind": {
                "speed": 5.25,
                "deg": 210,
                "gust": 6.2
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-10-31 03:00:00"
        },
        {
            "dt": 1667196000,
            "main": {
                "temp": 18.34,
                "feels_like": 17.46,
                "temp_min": 18.34,
                "temp_max": 18.34,
                "pressure": 1023,
                "sea_level": 1023,
                "grnd_level": 1020,
                "humidity": 47,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 7
            },
            "wind": {
                "speed": 6.75,
                "deg": 217,
                "gust": 7.23
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-10-31 06:00:00"
        },
        {
            "dt": 1667206800,
            "main": {
                "temp": 17.33,
                "feels_like": 16.53,
                "temp_min": 17.33,
                "temp_max": 17.33,
                "pressure": 1023,
                "sea_level": 1023,
                "grnd_level": 1020,
                "humidity": 54,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 6
            },
            "wind": {
                "speed": 7.21,
                "deg": 204,
                "gust": 7.73
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-10-31 09:00:00"
        },
        {
            "dt": 1667217600,
            "main": {
                "temp": 15.56,
                "feels_like": 14.79,
                "temp_min": 15.56,
                "temp_max": 15.56,
                "pressure": 1024,
                "sea_level": 1024,
                "grnd_level": 1021,
                "humidity": 62,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 6
            },
            "wind": {
                "speed": 6.5,
                "deg": 196,
                "gust": 10.26
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-10-31 12:00:00"
        },
        {
            "dt": 1667228400,
            "main": {
                "temp": 13.51,
                "feels_like": 12.51,
                "temp_min": 13.51,
                "temp_max": 13.51,
                "pressure": 1025,
                "sea_level": 1025,
                "grnd_level": 1021,
                "humidity": 61,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 5.78,
                "deg": 170,
                "gust": 9.58
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-10-31 15:00:00"
        },
        {
            "dt": 1667239200,
            "main": {
                "temp": 11.47,
                "feels_like": 10.5,
                "temp_min": 11.47,
                "temp_max": 11.47,
                "pressure": 1024,
                "sea_level": 1024,
                "grnd_level": 1021,
                "humidity": 70,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.56,
                "deg": 149,
                "gust": 6.54
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-10-31 18:00:00"
        },
        {
            "dt": 1667250000,
            "main": {
                "temp": 10.37,
                "feels_like": 9.42,
                "temp_min": 10.37,
                "temp_max": 10.37,
                "pressure": 1024,
                "sea_level": 1024,
                "grnd_level": 1021,
                "humidity": 75,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.69,
                "deg": 130,
                "gust": 4.38
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-10-31 21:00:00"
        },
        {
            "dt": 1667260800,
            "main": {
                "temp": 14.15,
                "feels_like": 13.19,
                "temp_min": 14.15,
                "temp_max": 14.15,
                "pressure": 1025,
                "sea_level": 1025,
                "grnd_level": 1022,
                "humidity": 60,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.39,
                "deg": 131,
                "gust": 3.88
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-11-01 00:00:00"
        },
        {
            "dt": 1667271600,
            "main": {
                "temp": 18.73,
                "feels_like": 17.91,
                "temp_min": 18.73,
                "temp_max": 18.73,
                "pressure": 1024,
                "sea_level": 1024,
                "grnd_level": 1020,
                "humidity": 48,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.4,
                "deg": 227,
                "gust": 3.43
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-11-01 03:00:00"
        },
        {
            "dt": 1667282400,
            "main": {
                "temp": 19.48,
                "feels_like": 18.82,
                "temp_min": 19.48,
                "temp_max": 19.48,
                "pressure": 1021,
                "sea_level": 1021,
                "grnd_level": 1018,
                "humidity": 51,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 1
            },
            "wind": {
                "speed": 6.29,
                "deg": 223,
                "gust": 5.65
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-11-01 06:00:00"
        },
        {
            "dt": 1667293200,
            "main": {
                "temp": 18.19,
                "feels_like": 17.61,
                "temp_min": 18.19,
                "temp_max": 18.19,
                "pressure": 1021,
                "sea_level": 1021,
                "grnd_level": 1018,
                "humidity": 59,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 1
            },
            "wind": {
                "speed": 6.88,
                "deg": 205,
                "gust": 7.4
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-11-01 09:00:00"
        },
        {
            "dt": 1667304000,
            "main": {
                "temp": 16.52,
                "feels_like": 16,
                "temp_min": 16.52,
                "temp_max": 16.52,
                "pressure": 1022,
                "sea_level": 1022,
                "grnd_level": 1019,
                "humidity": 68,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 5.62,
                "deg": 179,
                "gust": 8.86
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-11-01 12:00:00"
        },
        {
            "dt": 1667314800,
            "main": {
                "temp": 15.02,
                "feels_like": 14.3,
                "temp_min": 15.02,
                "temp_max": 15.02,
                "pressure": 1023,
                "sea_level": 1023,
                "grnd_level": 1019,
                "humidity": 66,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.07,
                "deg": 132,
                "gust": 7.38
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-11-01 15:00:00"
        },
        {
            "dt": 1667325600,
            "main": {
                "temp": 13.93,
                "feels_like": 13.26,
                "temp_min": 13.93,
                "temp_max": 13.93,
                "pressure": 1021,
                "sea_level": 1021,
                "grnd_level": 1018,
                "humidity": 72,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.01,
                "deg": 133,
                "gust": 6.46
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-11-01 18:00:00"
        },
        {
            "dt": 1667336400,
            "main": {
                "temp": 13.19,
                "feels_like": 12.58,
                "temp_min": 13.19,
                "temp_max": 13.19,
                "pressure": 1022,
                "sea_level": 1022,
                "grnd_level": 1018,
                "humidity": 77,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.09,
                "deg": 121,
                "gust": 7.19
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-11-01 21:00:00"
        },
        {
            "dt": 1667347200,
            "main": {
                "temp": 17.3,
                "feels_like": 16.73,
                "temp_min": 17.3,
                "temp_max": 17.3,
                "pressure": 1023,
                "sea_level": 1023,
                "grnd_level": 1020,
                "humidity": 63,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.02,
                "deg": 100,
                "gust": 5.99
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-11-02 00:00:00"
        },
        {
            "dt": 1667358000,
            "main": {
                "temp": 22.42,
                "feels_like": 21.87,
                "temp_min": 22.42,
                "temp_max": 22.42,
                "pressure": 1021,
                "sea_level": 1021,
                "grnd_level": 1018,
                "humidity": 44,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 11
            },
            "wind": {
                "speed": 0.94,
                "deg": 141,
                "gust": 2.66
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-11-02 03:00:00"
        },
        {
            "dt": 1667368800,
            "main": {
                "temp": 22.89,
                "feels_like": 22.41,
                "temp_min": 22.89,
                "temp_max": 22.89,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 1016,
                "humidity": 45,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 14
            },
            "wind": {
                "speed": 5.52,
                "deg": 213,
                "gust": 4.63
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-11-02 06:00:00"
        },
        {
            "dt": 1667379600,
            "main": {
                "temp": 21.2,
                "feels_like": 20.76,
                "temp_min": 21.2,
                "temp_max": 21.2,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 1016,
                "humidity": 53,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 75
            },
            "wind": {
                "speed": 7.23,
                "deg": 188,
                "gust": 8.27
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-11-02 09:00:00"
        },
        {
            "dt": 1667390400,
            "main": {
                "temp": 18.58,
                "feels_like": 18.11,
                "temp_min": 18.58,
                "temp_max": 18.58,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 1016,
                "humidity": 62,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 82
            },
            "wind": {
                "speed": 5.31,
                "deg": 159,
                "gust": 9.74
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-11-02 12:00:00"
        },
        {
            "dt": 1667401200,
            "main": {
                "temp": 18.46,
                "feels_like": 17.72,
                "temp_min": 18.46,
                "temp_max": 18.46,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 1016,
                "humidity": 52,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 70
            },
            "wind": {
                "speed": 6.16,
                "deg": 98,
                "gust": 13.95
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-11-02 15:00:00"
        },
        {
            "dt": 1667412000,
            "main": {
                "temp": 16.91,
                "feels_like": 16.2,
                "temp_min": 16.91,
                "temp_max": 16.91,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 1014,
                "humidity": 59,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 51
            },
            "wind": {
                "speed": 7.8,
                "deg": 88,
                "gust": 15.47
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-11-02 18:00:00"
        },
        {
            "dt": 1667422800,
            "main": {
                "temp": 15.65,
                "feels_like": 14.92,
                "temp_min": 15.65,
                "temp_max": 15.65,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 1014,
                "humidity": 63,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 53
            },
            "wind": {
                "speed": 8.01,
                "deg": 81,
                "gust": 16.45
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-11-02 21:00:00"
        },
        {
            "dt": 1667433600,
            "main": {
                "temp": 19.57,
                "feels_like": 18.94,
                "temp_min": 19.57,
                "temp_max": 19.57,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 1015,
                "humidity": 52,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 40
            },
            "wind": {
                "speed": 7.48,
                "deg": 67,
                "gust": 13.5
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-11-03 00:00:00"
        }
    ],
    "city": {
        "id": 2061261,
        "name": "South Perth",
        "coord": {
            "lat": -31.9559,
            "lon": 115.8606
        },
        "country": "AU",
        "population": 11301,
        "timezone": 28800,
        "sunrise": 1666992129,
        "sunset": 1667039895
    }
  }

  const current3H5DForecastData = {
    "cod": "200",
    "message": 0,
    "cnt": 40,
    "list": [
        {
            "dt": 1667174400,
            "main": {
                "temp": 23.93,
                "feels_like": 23.76,
                "temp_min": 23.93,
                "temp_max": 26.12,
                "pressure": 1001,
                "sea_level": 1001,
                "grnd_level": 993,
                "humidity": 53,
                "temp_kf": -2.19
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 11
            },
            "wind": {
                "speed": 7.52,
                "deg": 337,
                "gust": 13.61
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-10-31 00:00:00"
        },
        {
            "dt": 1667185200,
            "main": {
                "temp": 22.31,
                "feels_like": 22.35,
                "temp_min": 22.04,
                "temp_max": 22.31,
                "pressure": 1000,
                "sea_level": 1000,
                "grnd_level": 992,
                "humidity": 67,
                "temp_kf": 0.27
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 67
            },
            "wind": {
                "speed": 8.23,
                "deg": 333,
                "gust": 14.59
            },
            "visibility": 10000,
            "pop": 0.38,
            "rain": {
                "3h": 0.28
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-10-31 03:00:00"
        },
        {
            "dt": 1667196000,
            "main": {
                "temp": 22.26,
                "feels_like": 22.42,
                "temp_min": 22.26,
                "temp_max": 22.26,
                "pressure": 996,
                "sea_level": 996,
                "grnd_level": 988,
                "humidity": 72,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 97
            },
            "wind": {
                "speed": 8.55,
                "deg": 1,
                "gust": 17.58
            },
            "visibility": 10000,
            "pop": 0.07,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-10-31 06:00:00"
        },
        {
            "dt": 1667206800,
            "main": {
                "temp": 19.02,
                "feels_like": 19.33,
                "temp_min": 19.02,
                "temp_max": 19.02,
                "pressure": 997,
                "sea_level": 997,
                "grnd_level": 989,
                "humidity": 90,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.38,
                "deg": 336,
                "gust": 7.56
            },
            "visibility": 10000,
            "pop": 1,
            "rain": {
                "3h": 4.35
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-10-31 09:00:00"
        },
        {
            "dt": 1667217600,
            "main": {
                "temp": 18.36,
                "feels_like": 18.71,
                "temp_min": 18.36,
                "temp_max": 18.36,
                "pressure": 995,
                "sea_level": 995,
                "grnd_level": 987,
                "humidity": 94,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 6.2,
                "deg": 9,
                "gust": 10.79
            },
            "visibility": 10000,
            "pop": 1,
            "rain": {
                "3h": 5.32
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-10-31 12:00:00"
        },
        {
            "dt": 1667228400,
            "main": {
                "temp": 18.78,
                "feels_like": 19.17,
                "temp_min": 18.78,
                "temp_max": 18.78,
                "pressure": 990,
                "sea_level": 990,
                "grnd_level": 982,
                "humidity": 94,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.83,
                "deg": 1,
                "gust": 9.83
            },
            "visibility": 10000,
            "pop": 1,
            "rain": {
                "3h": 5.59
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-10-31 15:00:00"
        },
        {
            "dt": 1667239200,
            "main": {
                "temp": 18.31,
                "feels_like": 18.26,
                "temp_min": 18.31,
                "temp_max": 18.31,
                "pressure": 990,
                "sea_level": 990,
                "grnd_level": 982,
                "humidity": 79,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 8.37,
                "deg": 312,
                "gust": 17.48
            },
            "visibility": 10000,
            "pop": 1,
            "rain": {
                "3h": 4.64
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-10-31 18:00:00"
        },
        {
            "dt": 1667250000,
            "main": {
                "temp": 15.99,
                "feels_like": 15.42,
                "temp_min": 15.99,
                "temp_max": 15.99,
                "pressure": 994,
                "sea_level": 994,
                "grnd_level": 987,
                "humidity": 68,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 7.94,
                "deg": 290,
                "gust": 16.17
            },
            "visibility": 10000,
            "pop": 0.79,
            "rain": {
                "3h": 0.51
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-10-31 21:00:00"
        },
        {
            "dt": 1667260800,
            "main": {
                "temp": 19.16,
                "feels_like": 18.33,
                "temp_min": 19.16,
                "temp_max": 19.16,
                "pressure": 994,
                "sea_level": 994,
                "grnd_level": 986,
                "humidity": 46,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 66
            },
            "wind": {
                "speed": 8.64,
                "deg": 279,
                "gust": 13.53
            },
            "visibility": 10000,
            "pop": 0.54,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-11-01 00:00:00"
        },
        {
            "dt": 1667271600,
            "main": {
                "temp": 21.1,
                "feels_like": 20.36,
                "temp_min": 21.1,
                "temp_max": 21.1,
                "pressure": 993,
                "sea_level": 993,
                "grnd_level": 985,
                "humidity": 42,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 35
            },
            "wind": {
                "speed": 7.44,
                "deg": 291,
                "gust": 11.37
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-11-01 03:00:00"
        },
        {
            "dt": 1667282400,
            "main": {
                "temp": 19.91,
                "feels_like": 19.16,
                "temp_min": 19.91,
                "temp_max": 19.91,
                "pressure": 992,
                "sea_level": 992,
                "grnd_level": 984,
                "humidity": 46,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 53
            },
            "wind": {
                "speed": 8.23,
                "deg": 307,
                "gust": 12.5
            },
            "visibility": 10000,
            "pop": 0.01,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-11-01 06:00:00"
        },
        {
            "dt": 1667293200,
            "main": {
                "temp": 15.1,
                "feels_like": 14.18,
                "temp_min": 15.1,
                "temp_max": 15.1,
                "pressure": 995,
                "sea_level": 995,
                "grnd_level": 987,
                "humidity": 58,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "clouds": {
                "all": 24
            },
            "wind": {
                "speed": 8.56,
                "deg": 304,
                "gust": 16.39
            },
            "visibility": 10000,
            "pop": 0.17,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-11-01 09:00:00"
        },
        {
            "dt": 1667304000,
            "main": {
                "temp": 12.82,
                "feels_like": 11.83,
                "temp_min": 12.82,
                "temp_max": 12.82,
                "pressure": 996,
                "sea_level": 996,
                "grnd_level": 988,
                "humidity": 64,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 27
            },
            "wind": {
                "speed": 8.9,
                "deg": 299,
                "gust": 16.62
            },
            "visibility": 10000,
            "pop": 0.12,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-11-01 12:00:00"
        },
        {
            "dt": 1667314800,
            "main": {
                "temp": 11.43,
                "feels_like": 10.17,
                "temp_min": 11.43,
                "temp_max": 11.43,
                "pressure": 996,
                "sea_level": 996,
                "grnd_level": 988,
                "humidity": 59,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 35
            },
            "wind": {
                "speed": 10.01,
                "deg": 286,
                "gust": 19.69
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-11-01 15:00:00"
        },
        {
            "dt": 1667325600,
            "main": {
                "temp": 10.52,
                "feels_like": 9.3,
                "temp_min": 10.52,
                "temp_max": 10.52,
                "pressure": 998,
                "sea_level": 998,
                "grnd_level": 990,
                "humidity": 64,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 28
            },
            "wind": {
                "speed": 9.29,
                "deg": 280,
                "gust": 18.42
            },
            "visibility": 10000,
            "pop": 0.01,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-11-01 18:00:00"
        },
        {
            "dt": 1667336400,
            "main": {
                "temp": 11.45,
                "feels_like": 10.11,
                "temp_min": 11.45,
                "temp_max": 11.45,
                "pressure": 1002,
                "sea_level": 1002,
                "grnd_level": 994,
                "humidity": 56,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 55
            },
            "wind": {
                "speed": 9.66,
                "deg": 267,
                "gust": 17.47
            },
            "visibility": 10000,
            "pop": 0.02,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-11-01 21:00:00"
        },
        {
            "dt": 1667347200,
            "main": {
                "temp": 13.84,
                "feels_like": 12.48,
                "temp_min": 13.84,
                "temp_max": 13.84,
                "pressure": 1004,
                "sea_level": 1004,
                "grnd_level": 996,
                "humidity": 46,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 43
            },
            "wind": {
                "speed": 10.43,
                "deg": 256,
                "gust": 13.34
            },
            "visibility": 10000,
            "pop": 0.02,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-11-02 00:00:00"
        },
        {
            "dt": 1667358000,
            "main": {
                "temp": 16.54,
                "feels_like": 15.16,
                "temp_min": 16.54,
                "temp_max": 16.54,
                "pressure": 1005,
                "sea_level": 1005,
                "grnd_level": 997,
                "humidity": 35,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 6
            },
            "wind": {
                "speed": 9.24,
                "deg": 252,
                "gust": 11.11
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-11-02 03:00:00"
        },
        {
            "dt": 1667368800,
            "main": {
                "temp": 15.83,
                "feels_like": 14.49,
                "temp_min": 15.83,
                "temp_max": 15.83,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 999,
                "humidity": 39,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 6
            },
            "wind": {
                "speed": 9,
                "deg": 257,
                "gust": 11.18
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-11-02 06:00:00"
        },
        {
            "dt": 1667379600,
            "main": {
                "temp": 13.3,
                "feels_like": 12.1,
                "temp_min": 13.3,
                "temp_max": 13.3,
                "pressure": 1010,
                "sea_level": 1010,
                "grnd_level": 1002,
                "humidity": 54,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 4
            },
            "wind": {
                "speed": 6.04,
                "deg": 266,
                "gust": 10.32
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-11-02 09:00:00"
        },
        {
            "dt": 1667390400,
            "main": {
                "temp": 11.33,
                "feels_like": 10.16,
                "temp_min": 11.33,
                "temp_max": 11.33,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 1005,
                "humidity": 63,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 6
            },
            "wind": {
                "speed": 5.11,
                "deg": 286,
                "gust": 9.75
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-11-02 12:00:00"
        },
        {
            "dt": 1667401200,
            "main": {
                "temp": 10.3,
                "feels_like": 9.14,
                "temp_min": 10.3,
                "temp_max": 10.3,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 1004,
                "humidity": 67,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 4
            },
            "wind": {
                "speed": 5.16,
                "deg": 269,
                "gust": 10.58
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-11-02 15:00:00"
        },
        {
            "dt": 1667412000,
            "main": {
                "temp": 9.87,
                "feels_like": 7.28,
                "temp_min": 9.87,
                "temp_max": 9.87,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 1004,
                "humidity": 69,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 2
            },
            "wind": {
                "speed": 5.39,
                "deg": 269,
                "gust": 11.09
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-11-02 18:00:00"
        },
        {
            "dt": 1667422800,
            "main": {
                "temp": 12.41,
                "feels_like": 11.25,
                "temp_min": 12.41,
                "temp_max": 12.41,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 1006,
                "humidity": 59,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 7.04,
                "deg": 257,
                "gust": 12.11
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-11-02 21:00:00"
        },
        {
            "dt": 1667433600,
            "main": {
                "temp": 17.42,
                "feels_like": 16.31,
                "temp_min": 17.42,
                "temp_max": 17.42,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 1007,
                "humidity": 42,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 5.67,
                "deg": 228,
                "gust": 7.16
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-11-03 00:00:00"
        },
        {
            "dt": 1667444400,
            "main": {
                "temp": 17.81,
                "feels_like": 16.82,
                "temp_min": 17.81,
                "temp_max": 17.81,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 1007,
                "humidity": 45,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 52
            },
            "wind": {
                "speed": 5.25,
                "deg": 162,
                "gust": 5.65
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-11-03 03:00:00"
        },
        {
            "dt": 1667455200,
            "main": {
                "temp": 17.2,
                "feels_like": 16.26,
                "temp_min": 17.2,
                "temp_max": 17.2,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 1008,
                "humidity": 49,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 58
            },
            "wind": {
                "speed": 4.77,
                "deg": 161,
                "gust": 5.44
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-11-03 06:00:00"
        },
        {
            "dt": 1667466000,
            "main": {
                "temp": 15.51,
                "feels_like": 14.66,
                "temp_min": 15.51,
                "temp_max": 15.51,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 1011,
                "humidity": 59,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 51
            },
            "wind": {
                "speed": 3.22,
                "deg": 152,
                "gust": 3.87
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-11-03 09:00:00"
        },
        {
            "dt": 1667476800,
            "main": {
                "temp": 14.48,
                "feels_like": 13.73,
                "temp_min": 14.48,
                "temp_max": 14.48,
                "pressure": 1022,
                "sea_level": 1022,
                "grnd_level": 1014,
                "humidity": 67,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 54
            },
            "wind": {
                "speed": 1.71,
                "deg": 181,
                "gust": 2.08
            },
            "visibility": 10000,
            "pop": 0.27,
            "rain": {
                "3h": 0.22
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-11-03 12:00:00"
        },
        {
            "dt": 1667487600,
            "main": {
                "temp": 12.65,
                "feels_like": 11.93,
                "temp_min": 12.65,
                "temp_max": 12.65,
                "pressure": 1022,
                "sea_level": 1022,
                "grnd_level": 1014,
                "humidity": 75,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 35
            },
            "wind": {
                "speed": 1.97,
                "deg": 243,
                "gust": 2.39
            },
            "visibility": 10000,
            "pop": 0.34,
            "rain": {
                "3h": 0.26
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-11-03 15:00:00"
        },
        {
            "dt": 1667498400,
            "main": {
                "temp": 11.4,
                "feels_like": 10.61,
                "temp_min": 11.4,
                "temp_max": 11.4,
                "pressure": 1023,
                "sea_level": 1023,
                "grnd_level": 1015,
                "humidity": 77,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 30
            },
            "wind": {
                "speed": 2.16,
                "deg": 263,
                "gust": 2.46
            },
            "visibility": 10000,
            "pop": 0.18,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-11-03 18:00:00"
        },
        {
            "dt": 1667509200,
            "main": {
                "temp": 13.65,
                "feels_like": 12.77,
                "temp_min": 13.65,
                "temp_max": 13.65,
                "pressure": 1025,
                "sea_level": 1025,
                "grnd_level": 1017,
                "humidity": 65,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 48
            },
            "wind": {
                "speed": 2.33,
                "deg": 256,
                "gust": 2.51
            },
            "visibility": 10000,
            "pop": 0.19,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-11-03 21:00:00"
        },
        {
            "dt": 1667520000,
            "main": {
                "temp": 17.26,
                "feels_like": 16.58,
                "temp_min": 17.26,
                "temp_max": 17.26,
                "pressure": 1025,
                "sea_level": 1025,
                "grnd_level": 1017,
                "humidity": 59,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 44
            },
            "wind": {
                "speed": 3.01,
                "deg": 123,
                "gust": 2.59
            },
            "visibility": 10000,
            "pop": 0.28,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-11-04 00:00:00"
        },
        {
            "dt": 1667530800,
            "main": {
                "temp": 17.47,
                "feels_like": 16.89,
                "temp_min": 17.47,
                "temp_max": 17.47,
                "pressure": 1025,
                "sea_level": 1025,
                "grnd_level": 1017,
                "humidity": 62,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 35
            },
            "wind": {
                "speed": 4.43,
                "deg": 115,
                "gust": 3.79
            },
            "visibility": 10000,
            "pop": 0.06,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-11-04 03:00:00"
        },
        {
            "dt": 1667541600,
            "main": {
                "temp": 17.51,
                "feels_like": 16.94,
                "temp_min": 17.51,
                "temp_max": 17.51,
                "pressure": 1024,
                "sea_level": 1024,
                "grnd_level": 1016,
                "humidity": 62,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 37
            },
            "wind": {
                "speed": 4.69,
                "deg": 90,
                "gust": 4.67
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-11-04 06:00:00"
        },
        {
            "dt": 1667552400,
            "main": {
                "temp": 15.83,
                "feels_like": 15.32,
                "temp_min": 15.83,
                "temp_max": 15.83,
                "pressure": 1026,
                "sea_level": 1026,
                "grnd_level": 1018,
                "humidity": 71,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 53
            },
            "wind": {
                "speed": 3.19,
                "deg": 72,
                "gust": 4.44
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-11-04 09:00:00"
        },
        {
            "dt": 1667563200,
            "main": {
                "temp": 15.55,
                "feels_like": 15.04,
                "temp_min": 15.55,
                "temp_max": 15.55,
                "pressure": 1027,
                "sea_level": 1027,
                "grnd_level": 1019,
                "humidity": 72,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 47
            },
            "wind": {
                "speed": 2.6,
                "deg": 46,
                "gust": 3.43
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-11-04 12:00:00"
        },
        {
            "dt": 1667574000,
            "main": {
                "temp": 15.36,
                "feels_like": 14.88,
                "temp_min": 15.36,
                "temp_max": 15.36,
                "pressure": 1026,
                "sea_level": 1026,
                "grnd_level": 1018,
                "humidity": 74,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 50
            },
            "wind": {
                "speed": 1.37,
                "deg": 2,
                "gust": 2.35
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-11-04 15:00:00"
        },
        {
            "dt": 1667584800,
            "main": {
                "temp": 15.19,
                "feels_like": 14.72,
                "temp_min": 15.19,
                "temp_max": 15.19,
                "pressure": 1026,
                "sea_level": 1026,
                "grnd_level": 1018,
                "humidity": 75,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 67
            },
            "wind": {
                "speed": 0.3,
                "deg": 306,
                "gust": 1.26
            },
            "visibility": 10000,
            "pop": 0.2,
            "rain": {
                "3h": 0.18
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-11-04 18:00:00"
        },
        {
            "dt": 1667595600,
            "main": {
                "temp": 16.77,
                "feels_like": 16.33,
                "temp_min": 16.77,
                "temp_max": 16.77,
                "pressure": 1027,
                "sea_level": 1027,
                "grnd_level": 1019,
                "humidity": 70,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 73
            },
            "wind": {
                "speed": 1.37,
                "deg": 46,
                "gust": 2.19
            },
            "visibility": 10000,
            "pop": 0.26,
            "rain": {
                "3h": 0.18
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-11-04 21:00:00"
        }
    ],
    "city": {
        "id": 2147714,
        "name": "Sydney",
        "coord": {
            "lat": -33.8698,
            "lon": 151.2083
        },
        "country": "AU",
        "population": 1000000,
        "timezone": 39600,
        "sunrise": 1667156169,
        "sunset": 1667204478
    }
}

console.log(dataHandling.separate3H5DDataToDays(test3H5DForecast));

