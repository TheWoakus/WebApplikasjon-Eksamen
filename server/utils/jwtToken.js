export const sendToken = (user, res) => {
  const token = user.getJwtToken();

  const options = {
    expre: new Date(
      Date.now() + process.env.COOKIE_EXPIRE_TIME * 24 * 60 * 60 * 100
    ),
    httpOnly: true,
    sameSite: true,
  };

  res
    .status(200)
    .cookie('token', token, options)
    .json({
      sucess: true,
      token,
      user: {
        email: user.email,
        role: user.role,
      },
    });
};
