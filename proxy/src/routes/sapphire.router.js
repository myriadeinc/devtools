const router = require('express').Router();

router.get('/', (req, res) => {});

router.post('/', (req, res) => {});

router.put('/', (req, res) => {});

router.delete('/', (req, res) => {});

const forwardRequest = (req, res) => {
  const temp = 'http://localhost:8080/metrics';
};

module.exports = router;
