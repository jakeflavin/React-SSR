export default app => {
  app.get('/health', function(req, res) {
    return res.status(200).send('OK');
  });
};
