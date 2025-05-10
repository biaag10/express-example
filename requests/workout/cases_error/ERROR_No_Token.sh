# source ./requests/workout/cases_error/ERROR_No_Token.sh

# {"message":"Token não fornecido"}
curl -X GET https://express-backend-mongodb.vercel.app/workouts/all-workouts
