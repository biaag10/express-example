# source ./requests/workout/cases_error/ERROR_Invalid_Token.sh

# {"message":"Token inválido"}
curl -X GET https://express-backend-mongodb.vercel.app/workouts/all-workouts \
  -H "Authorization: Bearer token_invalido"
