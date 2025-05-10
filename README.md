# backend-express-mongodb
# Atividade Avaliativa IV.v2.1.0: crie uma feature para seu projeto individual (CRUD autenticado)

# Link do Vídeo Demonstrativo
https://drive.google.com/file/d/1z9NrHIxlR5ypd8eHcYbgSACFNS4B_Jcw/view?usp=sharing

# Mongo 
https://hub.docker.com/_/mongo

# Mongo Express
https://opulent-pancake-9r7rjvrqx95c79rr-8081.app.github.dev/db/mydatabase/

# MongoDB Atlas
https://cloud.mongodb.com/v2/6810e6b14f5f242cd5bd27d2#/metrics/replicaSet/6810e76a21ff2253f08348ec/explorer/mydatabase/users/find

# teste com vercel
curl --request POST \
  --url https://express-backend-mongodb.vercel.app/users/register \
  --header 'Content-Type: application/json' \
  --data '{
    "name": "Cassia",
    "username": "Cassia12",
    "email": "cassia@gmail.com",
    "password": "Cassia@123"
  }'

curl --request POST \
  --url https://express-backend-mongodb.vercel.app/users/login \
  --header 'Content-Type: application/json' \
  --data '{
    "email": "cassia@gmail.com",
    "password": "Cassia@123"
  }'

curl --request GET \
  --url 'https://express-backend-mongodb.vercel.app/secure/protected' \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODEzZTU0M2JiYTY1MTE0OTUwZTY4NDciLCJpYXQiOjE3NDYxMzQ3NzYsImV4cCI6MTc0NjEzODM3Nn0.Cmv3hB0ge9YvtABTDbjdILeDtkVcSIlBlKOZpe5LIbU' 


# JSON Web Tokens
https://www.npmjs.com/package/jsonwebtoken
- add no package.json "generate-secret-key": "node -e \"console.log(require('crypto').randomBytes(64).toString('hex'))\"" e rodar "npm run generate-secret-key"

# Request
- exemplo de comando: "source ./requests/POST_Register_User.sh"

📌 Nova Funcionalidade: Registro de Treinos

- Esta funcionalidade permite que usuários autenticados criem, visualizem, atualizem e excluam registros de treinos pessoais. Cada treino possui um título (ex: "Treino de Peito"), uma lista de exercícios, e para cada exercício, múltiplas séries com número de repetições e peso utilizado. As rotas são protegidas por autenticação JWT e garantem que cada usuário só possa acessar seus próprios dados. 