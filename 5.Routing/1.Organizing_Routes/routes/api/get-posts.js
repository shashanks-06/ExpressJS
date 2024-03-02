export default (req, res) => {
  const posts = [
    {
      id: 1,
      title: "First Post",
    },
    {
      id: 2,
      title: "Second Post",
    },
  ];

  res.json({
    posts,
  });
};
