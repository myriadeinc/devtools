const app = require('./app');

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Proxy server running on localhost:${PORT}`);
});
