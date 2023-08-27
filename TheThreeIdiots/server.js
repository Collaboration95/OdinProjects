const express = require('express');
const path = require('path');
const axios = require('axios');
require('dotenv').config();
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(express.static('public'));



if (require.main === module) {
  const inputRouter= require('./routes/input');
  app.use('/input', inputRouter);
  app.post('/get-html', async (req, res) => {
    const { websiteLink } = req.body;
  
    try {
      const response = await axios.get(websiteLink);
      const htmlContent = response.data;
  
      // Generate a unique filename using the current timestamp
      const filename = `text/html_${Date.now()}.txt`;
      const pathname = "/Users/speedpowermac/Documents/projects/CODE_MAIN/OdinProject/OdinProjects/TheThreeIdiots/public" + filename;

      // Write the HTML content to a text file inside the text folder
    //   fs.writeFileSync(`text/${filename}`, htmlContent);

    fs.writeFile(pathname, htmlContent, function (err) {    
        if (err) throw err;
        console.log('File is created successfully.');
    }   
    );
  
      res.send('HTML content saved to file.');
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Error fetching and saving HTML content');
    }
  });

  const port = process.env.PORT;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}