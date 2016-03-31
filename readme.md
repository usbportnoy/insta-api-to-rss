# Requirements
* Git installed (https://git-scm.com/download/win)
* Node installed (https://nodejs.org/en/)


# Versions
* npm 3.3.12
* node 5.4.1

# Configure Instagram
* Set redirect uri in your client configuration to `http://localhost:8080/login`

# Install
1. Open git bash if on windows, or your terminal on linux/mac
2. `git clone https://github.com/usbportnoy/insta-api-to-rss.git`
3. `cd insta-api-to-rss`
4. `npm install`
5. replace `your_client_id` & `your_client_secret` in `keys.js`
6. `node server.js`
7. navigate to `http://localhost:8080`
8. Click link
9. Login to instagram
10. Server will be initialized 
11. Use web-browser to view feed at `http://localhost:8080/rss`

# Reading
* https://nodejs.org/dist/latest-v4.x/docs/api/
* http://expressjs.com/
* https://www.npmjs.com/package/instagram-node
* http://www.restapitutorial.com/lessons/httpmethods.html


