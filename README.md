# eslint-plugin-myself

lint eslint-plugin itself

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-myself`:

```
$ npm install eslint-plugin-myself --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-myself` globally.

## Usage

Add `myself` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "myself"
    ]
}
```





