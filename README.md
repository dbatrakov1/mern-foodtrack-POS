# project in development phase
# Food track POS
# About :
It is a simple POS web app that allows the owner to collect orders and payments, keep track of orders, and close orders when they are done. Customers can easily place an order and pay with a credit card.
# Notes :
1. Need account on https://app.sendgrid.com/ for password recovery.


# Configuration :
Create a ```config.env``` file in the root directory and fill it with the following informations :

```
PORT=5000

DATABASE_CONNECTION="Your DB URI"

JWT_SECRET="Your JWT Secret key"
JWT_EXPIRE="10min"

#For password Reset :

EMAIL_SERVICE=""
EMAIL_USERNAME=""
EMAIL_PASSWORD=""
EMAIL_FROM=""
```

# Quick Start :
```Javascript
// Install dependencies in a server(main) and client directory
npm install

// Run client & server with concurrently
npm run dev

// Server runs on http://localhost:5000 and client on http://localhost:3000
```
