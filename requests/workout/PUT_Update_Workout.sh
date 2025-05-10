# source ./requests/workout/PUT_Update_Workout.sh

curl -X PUT http://localhost:3000/workouts/update-all-workout/681ba737f42f4aed9d4e51b4 \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODFiYTY3N2Y0MmY0YWVkOWQ0ZTUxYjEiLCJpYXQiOjE3NDY2NDI2MjMsImV4cCI6MTc0NjY0NjIyM30.PUJm4w4oUGSj-wDFvDORHmHwRt7KNXhmxr9v0blzM1o" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Treino de Peito Totalmente Atualizado",
    "exercises": [
      {
        "name": "Paralela",
        "series": [
          { "reps": 12, "weight": 0 },
          { "reps": 10, "weight": 5 }
        ]
      }
    ]
  }'
