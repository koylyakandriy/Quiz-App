import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-81d4d.firebaseio.com/'
})