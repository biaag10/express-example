# source ./requests/workout/PATCH_Partial_Update_Workout.sh

curl -X PATCH http://localhost:3000/workouts/update-workout/681ba737f42f4aed9d4e51b4 \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODFiYTY3N2Y0MmY0YWVkOWQ0ZTUxYjEiLCJpYXQiOjE3NDY2NDI2MjMsImV4cCI6MTc0NjY0NjIyM30.PUJm4w4oUGSj-wDFvDORHmHwRt7KNXhmxr9v0blzM1o" \
  -H "Content-Type: application/json" \
  -d '{ "title": "Treino de Peito Parcialmente Atualizado" }'
