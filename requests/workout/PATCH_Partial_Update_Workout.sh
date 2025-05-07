# source ./requests/workout/PATCH_Partial_Update_Workout.sh

curl -X PATCH http://localhost:3000/workouts/update-workout/681ac9d5b8bbefcbda271110 \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODEzZTM3YTY1YmUxOTdkODA3NGZhY2MiLCJpYXQiOjE3NDY1ODU2MzMsImV4cCI6MTc0NjU4OTIzM30.w0gEdXg6-VqxGIlpaprdQrzdErUADmpAYVbVv8MhT90" \
  -H "Content-Type: application/json" \
  -d '{ "title": "Parcialmente Atualizado" }'
