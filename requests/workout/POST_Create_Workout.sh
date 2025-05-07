# source ./requests/workout/POST_Create_Workout.sh

curl -X POST http://localhost:3000/workouts/register \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODEzZTM3YTY1YmUxOTdkODA3NGZhY2MiLCJpYXQiOjE3NDY1ODU2MzMsImV4cCI6MTc0NjU4OTIzM30.w0gEdXg6-VqxGIlpaprdQrzdErUADmpAYVbVv8MhT90" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Treino de Peito",
    "exercises": [
      {
        "name": "Supino Reto",
        "series": [
          { "reps": 10, "weight": 60 },
          { "reps": 8, "weight": 65 }
        ]
      },
      {
        "name": "Crucifixo",
        "series": [
          { "reps": 12, "weight": 20 }
        ]
      }
    ]
  }'
