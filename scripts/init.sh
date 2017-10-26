# Url to running API
API=http://localhost:8080

# Create hero
http POST $API/heroes < hero.json

# Create 1st day
http POST $API/days