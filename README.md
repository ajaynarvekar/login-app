# Login App

This is a simple login app built using express.js framework with Okta OpenID SSO solution. This can be used as a starting point to build real world applications where access control is necessary.

---

### How to use
* Star and download the repository
* run `npm install` to install the needed dependencies
* Copy the file `config.default.js`, rename it to `config.js` and then change its values - this file will store the configuration details for the Okta OpenID API. 

The structure should be the following:
```js
module.exports = {
  issuer: '',
  client_id: '',
  client_secret: '',
  appBaseUrl: '',
  orgUrl: '',
  token: ''
}
```

* Now we're ready! Open up the command prompt and type `npm start` to start the web server.
* To use the application, open the browser and hit: http://localhost:3000
