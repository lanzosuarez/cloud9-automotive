export let API_URL = "http://localhost:5000/api/v1";

export const setUrl = () => {
  if (process.env.NODE_ENV === "production") {
    API_URL = "https://delivery-bot-api.herokuapp.com/api/v1";
  }
};
