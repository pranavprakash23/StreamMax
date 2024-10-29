export const API_OPTION = {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY,
      "x-rapidapi-host": "",
    },
  };

export const SUPPORTED_LANGUAGE = [
  {identifier: "en", name : "English"},
  {identifier: "hindi", name : "Hindi"},
  {identifier: "spanish", name : "Spanish"}
]