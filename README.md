# Sempre IT API RESTful

![Node](https://img.shields.io/badge/Node-v14.8.0-success?style=flat)
![npm](https://img.shields.io/badge/npm-v6.14.7-success?style=flat)
![Express](https://img.shields.io/badge/Express-v4.17.1-success?style=flat)
![Sequelize](https://img.shields.io/badge/Sequelize-v6.3.5-success?style=flat)

API URL: [https://sempreit-test.herokuapp.com/](https://sempreit-test.herokuapp.com/)

| endpoint                       | description                            | HTTP method | OAuth        |
| ------------------------------ | -------------------------------------- | ----------- | ------------ |
| `/session`                     | Creates a session                      | POST        | Not Required |
| `/signup`                      | Creates a new user                     | POST        | Not Required |
| `/products`                    | Creates a new product                  | POST        | Required     |
| `/me`                          | Returns the logged user's profile      | GET         | Required     |
| `/products`                    | Lists all products                     | GET         | Required     |
| `/products/:id`                | Update a specific product              | PUT         | Required     |
| `/products/:id`                | Delete a specific product              | DELETE      | Required     |

<hr>

## POST /session

Expected values:

```json
"headers": {
  "Content-Type": "application/json"
},
"body": {
  "email":"string - required",
  "password": "string - required"
}
```

## POST /signup

Expected values:

```json
"headers": {
  "Content-Type": "application/json"
},
"body": {
  "name":"string - required",
  "email":"string - required",
  "password": "string - required"
}
```

## POST /products

Expected values:

```json
"headers": {
  "Authorization": "Bearer xxxxxxxxxxxxxxx",
  "Content-Type": "application/json"
},
"body": {
  "description":"string - required",
  "value":"number - required",
}
```

## GET /me

Expected values:

```json
"headers": {
  "Authorization": "Bearer xxxxxxxxxxxxxxx",
  "Content-Type": "application/json"
},
"body": {}
```

## GET /products

Query params:
```
q - Query to filter products by description
Example: /products?q=pen

page - Page number (20 values per page)
Example: /products?page=3

```
Expected values:

```json
"headers": {
  "Authorization": "Bearer xxxxxxxxxxxxxxx",
  "Content-Type": "application/json"
},
"body": {},
"query": {
  "q": "string - optional",
  "page": "number - optional"
}
```

## PUT /products/:id

Params:

```
:id - Product ID to be edited
Example: /products/cd48a156-25e3-4f3b-a024-debb6d5ba76c
```

Expected values:

```json
"headers": {
  "Authorization": "Bearer xxxxxxxxxxxxxxx",
  "Content-Type": "application/json"
},
"body": {
  "description":"string - required",
  "value":"number - required",
}
```

## DELETE /products/:id

Params:

```
:id - Product ID to be deleted
Example: /products/cd48a156-25e3-4f3b-a024-debb6d5ba76c
```

Expected values:

```json
"headers": {
  "Authorization": "Bearer xxxxxxxxxxxxxxx",
  "Content-Type": "application/json"
},
"body": {}
```
