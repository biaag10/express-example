# source ./requests/workout/GET_Workout_By_Id.sh

curl -X GET http://localhost:3000/workouts/get-workout-id/681f9ce54cb6c75a44838d89 \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODFiYTY3N2Y0MmY0YWVkOWQ0ZTUxYjEiLCJpYXQiOjE3NDY5MDIyMDksImV4cCI6MTc0NjkwNTgwOX0.eFZHQpT0XhYO_KWuUNZ2NhRtHQZOyywueapLJvoV54o" \

# {"message":"Treino não encontrado ou usuário sem permissão"}
# curl -X GET http://localhost:3000/workouts/get-workout-id/681ac9d5b8bbefcbda271110 \
#   -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODEzZTU0M2JiYTY1MTE0OTUwZTY4NDciLCJpYXQiOjE3NDY5MDI0MzgsImV4cCI6MTc0NjkwNjAzOH0.bFCyx5c-RiEKz4kxTdvt84zKVRWuF6NZUhYpD4NWOxg" \
