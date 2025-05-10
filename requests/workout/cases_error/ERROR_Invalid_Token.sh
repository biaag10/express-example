# source ./requests/workout/cases_error/ERROR_Invalid_Token.sh

# {"message":"Token inválido"}
curl -X GET http://localhost:3000/workouts/all-workouts \
  -H "Authorization: Bearer token_invalido"
