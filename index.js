//import renderApi from '@api/render-api';

const express = require('express');
const axios = require('axios'); // נשתמש ב-axios כדי לבצע בקשות HTTP
const app = express();
const PORT = process.env.PORT || 3000;

 
app.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://api.render.com/v1/services', {
            headers: {
                'Authorization': `Bearer rnd_BpM1lOoMBKP9mOIWrZsRDX6svCkE`, 
                'Content-Type': 'application/json'
            }
        });

        // מחזירים את רשימת האפליקציות
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



// renderApi.auth('rnd_BpM1lOoMBKP9mOIWrZsRDX6svCkE');
// renderApi.listServices({includePreviews: 'true', limit: '20'})
//   .then(({ data }) => console.log(data))
//   .catch(err => console.error(err));
