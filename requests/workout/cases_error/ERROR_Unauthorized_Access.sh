# source ./requests/workout/cases_error/ERROR_Unauthorized_Access.sh

# {"message":"Treino não encontrado ou usuário sem permissão"}
# token de um usuário usuário (Bianca) tentando deletar treino de outro usuário (Elena)
curl -X DELETE http://localhost:3000/workouts/delete/681ad47ba2d74e77590e2cdf \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODFiYTY3N2Y0MmY0YWVkOWQ0ZTUxYjEiLCJpYXQiOjE3NDY5MDIyMDksImV4cCI6MTc0NjkwNTgwOX0.eFZHQpT0XhYO_KWuUNZ2NhRtHQZOyywueapLJvoV54o"
