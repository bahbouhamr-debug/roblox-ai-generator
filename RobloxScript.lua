local HttpService = game:GetService("HttpService")
local Players = game:GetService("Players")

-- Konfiguration
local AI_SERVER_URL = "http://localhost:3000/api/generate-code"
local COMMAND_PREFIX = "/ai "

-- Funktion um Code zu generieren
local function generateCode(prompt)
    local success, response = pcall(function()
        return HttpService:PostAsync(
            AI_SERVER_URL,
            HttpService:JSONEncode({prompt = prompt}),
            Enum.HttpContentType.ApplicationJson,
            false
        )
    end)
    
    if success then
        local decoded = HttpService:JSONDecode(response)
        return decoded.code
    else
        return "Fehler: " .. response
    end
end

-- Chat-Listener für Commands
local function setupChatListener()
    Players.PlayerAdded:Connect(function(player)
        player.Chatted:Connect(function(message)
            if message:sub(1, #COMMAND_PREFIX) == COMMAND_PREFIX then
                local prompt = message:sub(#COMMAND_PREFIX + 1)
                print("🤖 KI generiert Code für: " .. prompt)
                
                local generatedCode = generateCode(prompt)
                print("✅ Generierter Code:")
                print(generatedCode)
                print("---")
            end
        end)
    end)
end

setupChatListener()
print("🎮 AI Command Handler aktiv! Nutze: /ai [befehl]")