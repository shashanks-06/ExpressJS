export default (req, res) => {
  res.render("dashboard", {
    user: req.session.user,
    posts: [
      {
        id: 1,
        author: "Joe M.",
        title: "I love Express",
        content: "Express is fun, isnt it?",
      },
    ],
  });
};
