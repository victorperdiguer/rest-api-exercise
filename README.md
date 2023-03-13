# TV SHOW REST API 📺

## Description

This is the documentation for the REST API about TV shows.

![](https://ychef.files.bbci.co.uk/976x549/p02fc1jw.jpg)

---

## Instructions

⚠️ After cloning the project, change the name of the <code>sample.env</code> for <code>.env</code> with the values:
```js
PORT=8080
MONGO_URL='mongodb://localhost:27017/tvshow-db'
NODE_ENV='development'
```
Then, run:
```bash
npm install
```
To start the project run:
```bash
npm run start
```

To work on the project and have it listen for changes:
```bash
npm run dev
```

---

## Models

`Show` data model:

```js
  {
    title: "The Simpsons",
    creator: "Matt Groening",
    launched: 1989,
    genre: "comedy",
    image: "https://ychef.files.bbci.co.uk/976x549/p02fc1jw.jpg",
    description: "The series is a satirical depiction of American life, epitomized by the Simpson family, which consists of Homer, Marge, Bart, Lisa, and Maggie. The show is set in the fictional town of Springfield and parodies American culture and society, television, and the human condition."
  }

```

---

## API Endpoints

| Method | Endpoint         | Req.body             | 
|--------|------------------|----------------------|
| GET    | /shows           |                      |           
| GET    | /shows/:id       |                      |           
| POST   | /shows           | { title, creator, launched, genre, image, description }  | { title, creator, launched, genre, image, description }
| PUT    | /shows/:id |          { title, creator, launched, genre, image, description }  | { title, creator, launched, genre, image, description }            |           
| DELETE   | /shows/:id     |  |

---

## Process

1. Create the `model` for the show
2. In the `db/seed.js` file, create an array of 3-4 shows and complete the code for the seed. Afterwards, run `npm run seed` and seed the database
3. Create a `shows.js` file in the folder /routes. Remember to import it on the `app.js`
4. One by one, create the routes according to the endpoints shown above. Before moving to the next one, test it on Postman to make sure it works as expected.

> 💡 Remember the HTTP Status codes on each one of the responses




