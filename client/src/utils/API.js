import axios from "axios";

export default {
  //Display all topics
  getForums: function() {
    return axios.get(`/api/topics`);
  },
  //Display all posts in a given topic
  getForum: function(topic) {
    return axios.get(`/api/topics/${topic}`);
  },
  //Deletes a topic (along with all its posts)
  deleteForum: function(topic) {
    return axios.delete(`/api/topics/${topic}`);
  },
  //Creates a new topic with an opening question/issue
  newForum: function(topicData) {
    return axios.post("/api/topics", topicData);
  }
};