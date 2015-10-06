SparseJS
========
Simply put, SparseJS flattens deeply-nested objects into sparse objects.

Example
========

In

```js
var bar = {
  application: {
    ajax: {
      flag: true,
      number: 73
    },
    gui: {
      flag: false,
      number: 3.14159
    },
    properties: {
      flag: null,
      number: 0
    }
  }
};
```

Out

```js
{
  "application.ajax.flag": true,
  "application.ajax.number": 73,
  "application.gui.flag": false,
  "application.gui.number": 3.14159,
  "application.properties.flag": null,
  "application.properties.number": 0
}
```

Why
========
I had the need for it and thought I'd share the love. I needed to read through a JSON configuration file and flatten it to match a Java properties file.
