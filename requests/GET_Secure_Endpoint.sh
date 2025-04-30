# retorna {"message":"Token não fornecido"}
# curl --request GET \
#   --url 'http://localhost:3000/secureExampleRoute/' \
#   --header 'Content-Type: application/json' 

# retorna {"message":"Token inválido"}
# curl --request GET \
#   --url 'http://localhost:3000/secureExampleRoute/' \
#   --header 'Authorization: Bearer <token>' 

# retorna {"message":"Esse é um endpoint seguro"}
curl --request GET \
  --url 'http://localhost:3000/secureExampleRoute/' \
  --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODExOTA4ZDRjY2I5YTU3MDBkNzEwMDIiLCJpYXQiOjE3NDU5ODQwNTksImV4cCI6MTc0NTk4NzY1OX0.PJn-jeJJkOFutOmophyF3DN1EijbMiLzMgQPONXHdL4' 