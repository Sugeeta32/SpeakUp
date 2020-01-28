import axios from "axios";

export default {
  //Display all forums
  getForums: function() {
    return axios.get(`/api/forums`);
  },
  //Display all posts in a given forum
  getForum: function(forum) {
    return axios.get(`/api/forums/${forum}`);
  },
  //Deletes a forum (along with all its posts)
  deleteForum: function(forum) {
    return axios.delete(`/api/forums/${forum}`);
  },
  //Creates a new forum with an opening post
  newForum: function(forumData) {
    return axios.post("/api/forums", forumData);
  }
};