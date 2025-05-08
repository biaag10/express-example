Invoke-WebRequest -Uri http://localhost:3000/users/logout `
  -Method POST `
  -WebSession $session
