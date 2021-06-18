export default function sendActiveUser(req, res) {
  const { email, username } = req.user;
  res.json(
    {
      data: {
        email: email,
        first_name: username,
        last_name: 'vyaguta',
      },
    }
  )
}