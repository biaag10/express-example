# source ./requests/workout/cases_error/ERROR_Malformed_Request.sh

# {"message":"Erro ao criar treino: Workout validation failed: exercises: Pelo menos um exercício é obrigatório"}
curl -X POST http://localhost:3000/workouts/register \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODFiYTY3N2Y0MmY0YWVkOWQ0ZTUxYjEiLCJpYXQiOjE3NDY5MDIyMDksImV4cCI6MTc0NjkwNTgwOX0.eFZHQpT0XhYO_KWuUNZ2NhRtHQZOyywueapLJvoV54o" \
  -H "Content-Type: application/json" \
  -d '{ "title": "Treino sem exercícios" }'