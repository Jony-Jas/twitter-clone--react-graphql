import { data } from "./data.js";

const typeDefs = `
    type User {
        id: String!
        username: String!
        name: String!
        description: String
        location: String
        joined: String!
        posts: [Post]
    }

    type Post {
        id: String!
        content: String!
        date: String!
        username: String!
        name: String!
    }

    type Query {
        user(id: String):User
        post: [Post]
    }

`;

const resolvers = {
  Query: {
    user: (parent, args, context, info) => {
      return data.users.find((user) => user.id === args.id);
    },
    post: () => {
      const posts = [];
      data.users.forEach((user) => {
        user.posts.forEach((post) => {
          const newPost = {...post, name: user.name, username: user.username};
          posts.push(newPost);
        });
      });
      return posts;
    },
  },
};

export { typeDefs, resolvers };
