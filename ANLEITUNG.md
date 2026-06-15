# 🎮 Roblox AI Generator - Schritt für Schritt Anleitung

## Was du brauchst:
1. ✅ Ollama (schon installiert)
2. Node.js (https://nodejs.org)
3. Diesen Code (GitHub Repo)
4. Roblox Studio

---

## 📋 Nur 4 Schritte:

### **SCHRITT 1: Repo runterladen**
1. Gehe zu: https://github.com/bahbouhamr-debug/roblox-ai-generator
2. Klick auf grünen Button "Code"
3. "Download ZIP"
4. Entpacken

### **SCHRITT 2: Terminal öffnen**

**Windows:**
- Drücke: `Windows-Taste + R`
- Tippe: `cmd` und Enter

**Mac:**
- `Cmd + Space` → tippe `Terminal` → Enter

**Linux:**
- Suche "Terminal"

### **SCHRITT 3: Server starten**

Im Terminal:
```bash
cd roblox-ai-generator
npm install
npm start
```

Wenn alles läuft, siehst du:
```
🚀 Server läuft auf http://localhost:3000
```

**⚠️ Dieses Fenster OFFEN LASSEN!**

### **SCHRITT 4: Roblox Script einfügen**

1. **Roblox Studio öffnen**
2. **Explorer** (links) → `ServerScriptService`
3. **Rechtsklick** → **Insert Object** → **LocalScript**
4. **Code aus `RobloxScript.lua` kopieren**
5. **In das Script einfügen**
6. **Spiel starten**

---

## 🎯 TESTEN!

Im Spiel-Chat schreib:
```
/ai create a function that prints hello
```

**Ergebnis:** Code erscheint in Output Console ✅

---

## 🧠 Mehr Beispiele:

```
/ai create a jump function
/ai make a part appear in center
/ai create a teleport function
/ai add a health system
```

---

## ⚠️ Wenn es nicht funktioniert:

| Problem | Lösung |
|---------|--------|
| Terminal zeigt Fehler | Prüf ob Node.js installiert ist |
| Server läuft nicht | `npm install` nochmal versuchen |
| Roblox antwortet nicht | Stelle sicher dass `/ai ` mit Slash anfängt |
| Timeout/Langsam | Warte 30 Sekunden (KI braucht Zeit) |
| "Ollama nicht erreichbar" | Ollama Anwendung öffnen |

---

## ✅ Das war's!

Jetzt kannst du einfach Befehle geben und die KI macht den Code! 🚀
