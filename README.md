# API Documentation

## Get All Items

**Request:**

GET http://localhost:3000/api/items

**Response:**

```json
[
  { "id": 1, "name": "Item One" },
  { "id": 2, "name": "Item Two" },
  { "id": 3, "name": "Item Three" }
]
```

## Get a Single Item by ID

**Request:**

GET http://localhost:3000/api/items/1

**Response:**

```json
{ "id": 1, "name": "Item One" }
```

## Create a New ItemCreate a New Item

**Request:**

POST http://localhost:3000/api/items
Content-Type: application/json

**Body:**

```json
{
  "name": "New Item"
}
```

**Response:**

```json
{ "id": 4, "name": "New Item" }
```

## Update an Item by ID

**Request:**
PUT http://localhost:3000/api/items/1
Content-Type: application/json

**Body:**

```json
{
  "name": "Updated Item One"
}
```

**Response:**

```json
{ "id": 1, "name": "Updated Item One" }
```

## Delete an Item by ID

**Request:**

DELETE http://localhost:3000/api/items/1

```

```
