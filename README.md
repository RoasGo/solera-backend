# SOLERA / Module / Test

RESTful API service.

---

# <a name='TableofContents'></a>Table of Contents

<!-- vscode-markdown-toc -->
* [Installation](#Installation)
* [Development](#Development)
* [Ussage](#Ussage)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

## <a name='Installation'></a>Installation

Install the dependencies into your project: 

```ssh
npm install
```

## <a name='Development'></a>Development

- `dev` - Execute the application in development mode
- `build` - compiles and generate a dsitributable in dist folder (for typescript)
- `test` - Execute unitary tests

## <a name='Ussage'></a>Ussage

There are 2 endpoints:

- POST: http://localhost:4000/api/user/full-name

```js
PAYLOAD:
	{
    "username": "admin",
    "password": "admin"
	}
```

- GET: http://localhost:4000/api/user/

---

*Brought to you by [Rodrigo Roa C.](mailto:roasgo@hotmail.com)*