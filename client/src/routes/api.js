import axios from "axios";

export default {
  //Display all topics
  getTopics: function() {
    return axios.get(`/api/topics`);
  },
  //Displays a topic (along with all of its replies)
  getTopic: function(topic) {
    return axios.get(`/api/topics/${topic}`);
  },
  //Deletes a topic (along with all of its replies)
  deleteTopic: function(topic) {
    return axios.delete(`/api/topics/${topic}`);
  },
  //Creates a new topic with an opening question/issue
  newTopic: function(topicData) {
    return axios.post("/api/topics", topicData);
  },
  //Displays all topics in a given category
  getCategory: function(category) {
    return axios.get(`/api/topics/${category}`);
  },
  //Displays a reply
  getReply: function(reply) {
    return axios.get(`api/replies/${reply}`)
  },
  //Deletes a reply (along with all of its replies)
  deleteReply: function(reply) {
    return axios.delete(`/api/replies/${reply}`);
  },
  //Creates a new reply
  newReply: function(replyData) {
    return axios.post("/api/replies", replyData);
  }
};