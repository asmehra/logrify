# Logrify

Logrify is a small utility library for printing console logs in a colorful and easy-to-read format and also print the timestamp of logs. It provides four methods for logging different types of messages: `Log.success()`, `Log.error()`, `Log.warning()`, and `Log.info()`.

## Installation

To use **Logrify** in your project, simply install it via npm:

```sh
npm install logrify
```

## Usage

To use **Logrify** in your project, you need to import it first:

```js
import Log from 'logrify';
```

After importing Logrify, you can use the following methods to log messages in different colors and styles:

### Log.success()

Use `Log.success()` to log success messages in green color with a timestamp:

```js
Log.success('Data saved successfully!');
```

Output:

![enter image description here](https://logrify.files.wordpress.com/2023/05/log.success.png)

### Log.error()

Use `Log.error()` to log error messages in red color with a timestamp:

```js
Log.error('Something went wrong!');
```

Output:

![enter image description here](https://logrify.files.wordpress.com/2023/05/log.error_.png)

### Log.warning()

Use `Log.warning()` to log warning messages in yellow color with a timestamp:

```js
Log.warning('This action cannot be undone!');
```

Output:

![enter image description here](https://logrify.files.wordpress.com/2023/05/log.warning.png)

### Log. info()

Use `Log.info()` to log informative messages in blue color with a timestamp:

```js
Log.info('A new library has been released.');
```

Output:

![enter image description here](https://logrify.files.wordpress.com/2023/05/log.info_.png)

## Contributing

If you find any issues or have suggestions for improvements, please open an issue or pull request on the [Logrify GitHub repository](https://github.com/asmehra/logrify). We welcome contributions from the community!

## License

Logrify is released under the [MIT License](https://opensource.org/licenses/MIT).
