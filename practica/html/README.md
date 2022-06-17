# html exercises

In this exercises you will have to complete the missing html or remark what should we include. For example:

What is wrong with this HTML?

```html
<customtag>lorem ipsum dolor</customtab>
```

Answer: It is using a key that does not exists.

## Exercise 1

Add what is missing in our html `<head>` tag.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
</html>
```


## Exercise 2

This html is not semantic what could we do to improve it.

```html
<main class="main">
  <section class="section">
    <ul>
      <li class="list-item">List item</li>
      <li class="list-item">List item</li>
      <li class="list-item">List item</li>
      <li class="list-item">List item</li>
    </ul>
  </section>
  <section class="section">
    <form class="form">
      <label for="description">description</label>
      <input id="description" type="text">
    </form>
  </section>
</main>
```

## Exercise 3

If we want to include two CSS files like `reset.css`, `main.css`, and one javascript file `app.js`. Where should we include it in this html?

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="reset.css">
  <link rel="stylesheet" href="main.css">
  <title>Document</title>
</head>
<body>
  
<script src="app.js"></script>
</body>

</html>

```

## Exercise 4

We need to improve this html form markup. This form will call and endpoint `/register` with the right method. We also have to include the correct input type and mark all fields as required.

```html
<form action="/register">
  <div>
    <label for="name">name</label>
    <input id="name" type="text" required>
  </div>
  <div>
    <label for="surname">surname</label>
    <input id="surname" type="text" required>
  </div>
  <div>
    <label for="phone">phone</label>
    <input id="phone" type="tel" required>
  </div>
  <div>
    <label for="email">email</label>
    <input id="email" type="email" required>
  </div>
  <div>
    <label for="password">password</label>
    <input id="password" type="password" required>
  </div>
  <input type="submit" value="register">
</form>
```
