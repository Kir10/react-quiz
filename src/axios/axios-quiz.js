import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-add7d.firebaseio.com/'
})