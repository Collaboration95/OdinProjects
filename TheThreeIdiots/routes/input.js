const express = require('express');
const router = express.Router();
router.post('/get-html', async (req, res) => {
    const { websiteLink } = req.body;
  
    try {
      const response = await axios.get(websiteLink);
      res.send(response.data);
    } catch (error) {
      res.status(500).send('Error fetching HTML content');
    }
  });

module.exports = router;