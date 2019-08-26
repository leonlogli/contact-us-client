import axios from 'axios';

const BASE_URL = 'https://engice-contactus.herokuapp.com'
const MESSAGES_URL = `${BASE_URL}/contacts`;

const messageService = {
  saveMessage(message) {
    return axios.post(MESSAGES_URL, message);
  },

  getMessages() {
    return axios.get(MESSAGES_URL);
  }
}

export default messageService;