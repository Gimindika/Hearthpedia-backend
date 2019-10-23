const formResponse = {
  response: (res, status, response, data) => {
    const result = {
      status,
      data,
      response
    };
    res.json(result);
  }
};

module.exports = formResponse
