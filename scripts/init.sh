# Url to running API
API=http://localhost:8080

# Create heroes
http POST $API/heroes < alex.json
http POST $API/heroes < eugen.json

# Create 1st day
http POST $API/days