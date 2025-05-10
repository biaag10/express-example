# source ./requests/workout/PATCH_Partial_Update_Workout.sh

curl -X PATCH http://localhost:3000/workouts/update-workout/681f9ce54cb6c75a44838d89 \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODFiYTY3N2Y0MmY0YWVkOWQ0ZTUxYjEiLCJpYXQiOjE3NDY5MDIyMDksImV4cCI6MTc0NjkwNTgwOX0.eFZHQpT0XhYO_KWuUNZ2NhRtHQZOyywueapLJvoV54o" \
  -H "Content-Type: application/json" \
  -d '{ "title": "Treino de Peito Parcialmente Atualizado" }'
