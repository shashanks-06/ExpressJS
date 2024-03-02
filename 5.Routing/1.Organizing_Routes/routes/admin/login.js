export default (req, res) => {
  const { email, password } = req.body;

  if (email === "shash@m.com" && password === "sm0207") {
    req.session.user = "Shashank Surjekar";
    return res.redirect("/admin/dashboard");
  }

  res.redirect("/admin/login");
};
