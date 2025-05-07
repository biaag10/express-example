# source ./requests/workout/cases_error/ERROR_Malformed_Request.sh

# {"message":"Erro ao criar treino: Workout validation failed: exercises: Pelo menos um exercício é obrigatório"}
curl -X POST http://localhost:3000/workouts/register \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODFiYTY3N2Y0MmY0YWVkOWQ0ZTUxYjEiLCJpYXQiOjE3NDY2NDI2MjMsImV4cCI6MTc0NjY0NjIyM30.PUJm4w4oUGSj-wDFvDORHmHwRt7KNXhmxr9v0blzM1o" \
  -H "Content-Type: application/json" \
  -d '{ "title": "Treino sem exercícios" }'