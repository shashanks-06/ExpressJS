export default (req, res) => {
  const { name, email, password } = req.body;
  res.json({ status: true });
};
