const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const OLLAMA_URL = 'http://localhost:11434/api/generate';

app.post('/api/generate-code', async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt ist erforderlich' });
  }

  try {
    const response = await axios.post(OLLAMA_URL, {
      model: 'mistral',
      prompt: `Du bist ein Roblox Lua-Coder. Generiere NUR Lua-Code ohne Erklärung.\n\nAnfrage: ${prompt}\n\nGib NUR den Code aus, keine Kommentare:`,
      stream: false,
      temperature: 0.7
    });

    const generatedCode = response.data.response;
    res.json({ code: generatedCode });
  } catch (error) {
    console.error('Ollama Fehler:', error.message);
    res.status(500).json({ error: 'KI konnte Code nicht generieren' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server läuft auf http://localhost:${PORT}`);
  console.log('Stelle sicher, dass Ollama auf http://localhost:11434 läuft');
});