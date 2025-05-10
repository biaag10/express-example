# source ./requests/workout/GET_Workout_By_Id.sh

curl -X GET http://localhost:3000/workouts/get-workout-id/681ba737f42f4aed9d4e51b4 \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODFiYTY3N2Y0MmY0YWVkOWQ0ZTUxYjEiLCJpYXQiOjE3NDY2NDI2MjMsImV4cCI6MTc0NjY0NjIyM30.PUJm4w4oUGSj-wDFvDORHmHwRt7KNXhmxr9v0blzM1o" \

# {"message":"Treino não encontrado ou usuário sem permissão"}
# curl -X GET http://localhost:3000/workouts/get-workout-id/681ac9d5b8bbefcbda271110 \
#   -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODE2ODEyYzU0ZmQ3ZDhiMjE0ZGE1ZDMiLCJpYXQiOjE3NDY2MjI1ODQsImV4cCI6MTc0NjYyNjE4NH0.XgwXAx9vnCfb4BRPWFcjyRomPhJ0VyFXRtds2wSm_wo" \
