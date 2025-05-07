# source ./requests/workout/cases_error/ERROR_No_Token.sh

# {"message":"Token não fornecido"}
curl -X GET http://localhost:3000/workouts/all-workouts
