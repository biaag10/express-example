# acesso a /protected com token válido {"message":"Acesso autorizado"}
curl --request GET \
  --url 'http://localhost:3000/secure/protected' \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODExYTUxY2Y3YzI3ZGYxODI5ZTExN2EiLCJpYXQiOjE3NDU5OTEwMjQsImV4cCI6MTc0NTk5NDYyNH0.y7hVUkZFzkA00tl-c89holLtADzbBJ0SOPC2UgJpjEI' 

# tentativa de acesso a /protected sem token {"message":"Token não fornecido"}
# curl --request GET \
#   --url 'http://localhost:3000/secure/protected'

# tentativa de acesso a /protected com token inválido {"message":"Token inválido"}
# curl --request GET \
#   --url 'http://localhost:3000/secure/protected' \
#   --header 'Authorization: Bearer <token_inválido>'


