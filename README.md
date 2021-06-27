# 🥑 Avocado.js

A simple and lightweight JavaScript framework to help you create a web application.

## 📌 Features

- Lightweight
- Well documented 
- Often updated
- Simple of use

```js
Avocado.getById('core').typeWriter('Welcome !', 250);
// or :
$$.getById('core').typeWriter('Welcome !', 250);
```

## 💻 Documentation

### 🔗 Selector

**.getById(***id***)** = Get an element by its ID.

**.getByClass(***class***)** = Get an element by its class name.

**.getByTag(***tag***)** = Get an element by its tag.

**.getByName(***name***)** = Get an element by its name.

### ⚙️ Debug

**.consoleInfo(***text***)** = An alternative to the classic ***console.log()*** function.

**.consoleError(***text***)** = An alternative to the classic ***console.log()*** function.

**.consoleSucess(***text***)** = An alternative to the classic ***console.log()*** function.

**.consoleWarn(***text***)** = An alternative to the classic ***console.log()*** function.

### 🎨 Style

**.style(***objStyle***)** = Add CSS style to an element.
```js
// Exemple :
Avocado.getById('core').style({backgroundColor:'#323232', color:'white'})
```

**.boxShadow(***shadow***)** = Add the CSS `box-shadow` property to an element.

**.display(***type***)** = Add the CSS `display` property to an element.

**.rotate(***deg***)** = Add the CSS `transform: rotate()` property to an element.

### 🎉 Animation

**.fadeIn(***duration***)** = Gradually increases the opacity of an element.

**.fadeOut(***duration***)** = Gradually decreases the opacity of an element.

**.rollingNumber(***start, end, duration***)** = I don't know how to explain that but it's cool...

**.typeWriter(***text, speed***)** = Animation that writes a text as it goes.

**.spin(***time***)** = Animation that make an element spinning.

### 📥 Input

**.value()** = Get the value of an input.

**.checked(***bool***)** = Check or uncheck input.

**.showPassword(***bool***)** = Change the visibility of a password field.

### 🎈 Events

**.on(***action, callback***)** = Add event listener.

**.hover(***callbackIn, callbackOut***)** = Add event `onover` listener.

### 📄 Document

**.addClass(***className***)** = Add class to an element.

**.addId(***idName***)** = Add unique ID to an element.

**.removeClass(***className***)** = Remove class to an element.

**.removeId(***className***)** = Remove ID to an element.

**.copy()** = Copy text of an element to the clipboard.

**.insertHTML(***html***)** = Insert HTML in an element.

**.insertText(***text***)** = Insert text in an element.

**.src(***source***)** = Change source of an element.

**.lenght()** = Return lenght of an element.

### ✒️ Text

**.capitalize(***text***)** = Capitalize your text.

**.lowercase(***text***)** = Lowercase your text.

**.uppercase(***text***)** = Uppercase your text.

**.toCamelCase(***text***)** = Convert text to Camel case.

**.toKebabCase(***text***)** = Convert text to Kebab case.

**.toPascalCase(***text***)** = Convert text to Pascal case.

**.toScreamingSnakeCase(***text***)** = Convert text to Screaming Snake case.

**.toSnakeCase(***text***)** = Convert text to Snake case.

### 🌆 Window

**.screenHeight()** = Return the current available screen height.

**.screenWidth()** = Return the current available screen width.

**.title(***title***)** = Change the title of the page.

**.fullscreen(***bool***)** = Change the window fullscreen mode.

### 🎲 Random 

**.randomBool(***probability***)** = Return random boolean.

**.randomColor()** = Return random hex color.

**.randomGradient(***type***, ***deg***)** = Return random gradient.
```js
// Exemple :
Avocado.getByTag('body').style({background: $$.randomGradient('linear', 54)})
```

**.randomFloat(***min, max***)** = Return random float.

**.randomInt(***min, max***)** = Return random integer.

**.passwordGenerator(***length, strength***)** = Generate a random password.
```js
// Exemple :
var password = $$.passwordGenerator(12, normal);
```
