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

### 🎉 Animation

**.fadeIn(***duration***)** = Gradually increases the opacity of an element.

**.fadeOut(***duration***)** = Gradually decreases the opacity of an element.

**.rollingNumber(***start, end, duration***)** = I don't know how to explain that but it's cool...

**.typeWriter(***text, speed***)** = Animation that writes a text as it goes.

### 📥 Input

**.value()** = Get the value of an input.

**.checked(***bool***)** = Check or uncheck input.

### 🎈 Events

**.on(***action, callback***)** = Add event listener.

**.hover(***callbackIn, callbackOut***)** = Add event `onover` listener.

### 📄 Document

**.addClass(***className***)** = Add class to an element.

**.addId(***idName***)** = Add unique ID to an element.

**.removeClass(***className***)** = Remove class to an element.

**.removeId(***className***)** = Remove ID to an element.

**.innerHTML(***html***)** = Insert HTML in an element.

**.innerText(***text***)** = Insert text in an element.

**.src(***source***)** = Change source of an element.

**.lenght()** = Return lenght of an element.

### 🌆 Window

**.screenHeight()** = Return the current available screen height.

**.screenWidth()** = Return the current available screen width.

**.title(***title***)** = Change the title of the page.

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
