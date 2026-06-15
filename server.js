const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// 🤖 KI Code Generator Endpoint
app.post('/api/generate-code', async (req, res) => {
    try {
        const { prompt } = req.body;
        
        if (!prompt) {
            return res.status(400).json({ error: 'Prompt erforderlich' });
        }
        
        // Rufe OpenAI API auf
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: 'gpt-3.5-turbo',
                messages: [
                    {
                        role: 'system',
                        content: 'Du bist ein Lua-Coder für Roblox. Generiere NUR Lua-Code ohne Erklärungen. Der Code wird in Roblox Studio ausgeführt.'
                    },
                    {
                        role: 'user',
                        content: `Generiere Lua-Code für Roblox: ${prompt}`
                    }
                ],
                temperature: 0.7,
                max_tokens: 500
            },
            {
                headers: {
                    'Authorization': `Bearer ${OPENAI_API_KEY}`
                }
            }
        );
        
        const generatedCode = response.data.choices[0].message.content;
        
        res.json({
            success: true,
            code: generatedCode,
            prompt: prompt
        });
        
    } catch (error) {
        console.error('Fehler:', error.message);
        res.status(500).json({
            error: 'KI-Fehler',
            message: error.message
        });
    }
});

// Health Check
app.get('/health', (req, res) => {
    res.json({ status: 'Server läuft! ✅' });
});

app.listen(PORT, () => {
    console.log(`🚀 AI Server läuft auf: http://localhost:${PORT}`);
    console.log(`📢 Endpoint: http://localhost:${PORT}/api/generate-code`);
});
