# Requirements
* Git installed (https://git-scm.com/download/win)
* Node installed (https://nodejs.org/en/)


# Configure Instagram
* Set redirect uri in your client configuration to `http://localhost:8080/login`

# Install
1. Open git bash
2. `git clone https://github.com/usbportnoy/insta-api-to-rss.git`
3. `cd insta-api-to-rss`
4. `npm install`
5. replace `client_id` & `client_secret` in `server.js`
6. `node server.js`
7. navigate to `http://localhost:8080/authorize_user`
8. Login to instagram, and when page returns "Works" check your bash console and you'll see your API key