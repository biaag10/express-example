# source ./requests/GET_Protected_Route.sh

# acesso a /protected com token válido {"message":"Acesso autorizado"}
curl --request GET \
  --url 'http://localhost:3000/secure/protected' \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODEzZTM3YTY1YmUxOTdkODA3NGZhY2MiLCJpYXQiOjE3NDYxMzQxNDYsImV4cCI6MTc0NjEzNzc0Nn0.wjefBAsvqWT2-RDhSvvj_MVDMllXtDC8EhTJ0M5cFw8' 

# tentativa de acesso a /protected sem token {"message":"Token não fornecido"}
# curl --request GET \
#   --url 'http://localhost:3000/secure/protected'

# tentativa de acesso a /protected com token inválido {"message":"Token inválido"}
# curl --request GET \
#   --url 'http://localhost:3000/secure/protected' \
#   --header 'Authorization: Bearer <token_inválido>'


