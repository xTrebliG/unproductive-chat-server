# UnproductiveChatServer

Unproductive Chat is a chat client thats made to simply distract you from being productive.
This server was created for [UnproductiveChatClient](https://github.com/xTrebliG/unproductive-chat-client).

## Getting Started

Make sure you have:
* [Node.js](http://nodejs.org/) installed
* [UnproductiveChatClient](https://github.com/xTrebliG/unproductive-chat-client)

```sh
git clone git@github.com:xTrebliG/unproductive-chat-server.git # or clone your own fork
cd unproductive-chat-server
npm install
npm start
```

Your app should now be running on [localhost:3000](http://localhost:3000/).

### Prerequisites
Be sure to add your Pusher key to environment.ts
```
// ..src/environments/environment.ts

export const environment = {
  production: false,
  pusher: {
    key: 'ADD_KEY_HERE'
  }
};
```
## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
