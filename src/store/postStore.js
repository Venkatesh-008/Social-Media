import { makeAutoObservable } from "mobx";

class PostStore {
  posts = [
    {
      id: 1,
      content: "Welcome to our social platform! 🎉 Start posting now!",
      author: "Admin",
      image: "/public/assets/pic-1.jpg",
      likes: 0,
      dislikes: 0,
      comments: [],
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  addPost(username, content, image) {
    this.posts = [
      {
        id: Date.now(),
        username: username, 
        content: content,
        image: image,
        likes: 0,
        dislikes: 0,
        comments: [],
      },
      ...this.posts, 
    ];
}

  

  likePost(id) {
    const post = this.posts.find((p) => p.id === id);
    if (post) post.likes++;
  }

  dislikePost(id) {
    const post = this.posts.find((p) => p.id === id);
    if (post) post.dislikes++;
  }

  deletePost(id) {
    this.posts = this.posts.filter((p) => p.id !== id);
  }
  removeImage(id) {
    const post = this.posts.find((p) => p.id === id);
    if (post) post.image = null; 
  }
  addComment(id, commentText) {
    const post = this.posts.find((p) => p.id === id);
    if (post) {
      post.comments.push({ id: Date.now(), text: commentText });
    }
  }
  
  
}

const postStore = new PostStore();
export default postStore;
