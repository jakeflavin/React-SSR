import https from 'https';

export default app => {
  /**
   * @swagger
   *
   * /weather/{coords}:
   *   get:
   *     description: Returns weather data from darksky.
   *     tags:
   *       - Weather
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: coords
   *         in: path
   *         description: Coordinates to get weather for [lat, long].
   *         required: true
   *     responses:
   *       200:
   *         description: OK
   */
  app.get('/weather/:coords', (req, res) => {
    const url = `https://api.darksky.net/forecast/25fce6161d635c633459c26871258317/${req.params.coords}`;
    https.get(url, resp => {
      let body = '';
      resp.on('data', chunk => (body = body + chunk));
      resp.on('end', () => res.send(body));
    });
  });
};
