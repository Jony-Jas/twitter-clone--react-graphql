export const data = {
  users: [
    {
      id: "1",
      username: "john_doe",
      name: "John Doe",
      description: "Software Engineer",
      location: "New York",
      joined: "2022-01-01",
      posts: [
        {
          id: "1",
          content:
            "Hello World! 🌍\nThis is an example post.\nHave a great day! 😊",
          postedBy: "1",
          date: "2022-01-02",
        },
        {
          id: "2",
          content:
            "GraphQL is awesome! 💪🔥\nIt simplifies data fetching and manipulation.\nStart using GraphQL today! 🚀",
          postedBy: "1",
          date: "2022-01-03",
        },
      ],
    },
    {
      id: "2",
      username: "jane_smith",
      name: "Jane Smith",
      description: "Web Developer",
      location: "San Francisco",
      joined: "2022-02-01",
      posts: [
        {
          id: "3",
          content:
            "Excited to learn GraphQL! 🎉\nIt's an efficient way to query APIs.\nCan't wait to explore more! 💡",
          postedBy: "2",
          date: "2022-02-02",
        },
        {
          id: "4",
          content:
            "Building cool projects with GraphQL! 💻🌈\nGraphQL has revolutionized my development workflow.\nHighly recommended! 👍",
          postedBy: "2",
          date: "2022-02-03",
        },
      ],
    },
  ],
  posts: [
    {
      id: "1",
      content:
        "Hello World! 🌍\nThis is an example post.\nHave a great day! 😊",
      postedBy: "1",
      date: "2022-01-02",
    },
    {
      id: "2",
      content:
        "GraphQL is awesome! 💪🔥\nIt simplifies data fetching and manipulation.\nStart using GraphQL today! 🚀",
      postedBy: "1",
      date: "2022-01-03",
    },
    {
      id: "3",
      content:
        "Excited to learn GraphQL! 🎉\nIt's an efficient way to query APIs.\nCan't wait to explore more! 💡",
      postedBy: "2",
      date: "2022-02-02",
    },
    {
      id: "4",
      content:
        "Building cool projects with GraphQL! 💻🌈\nGraphQL has revolutionized my development workflow.\nHighly recommended! 👍",
      postedBy: "2",
      date: "2022-02-03",
    },
  ],
};
