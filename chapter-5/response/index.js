module.exports = {
  success: (response, message) => {
    response.json({
      status: 'success',
      message,
    });
  },
  fail: (response, message) => {
    response.json({
      status: 'error',
      message,
    });
  },
};
