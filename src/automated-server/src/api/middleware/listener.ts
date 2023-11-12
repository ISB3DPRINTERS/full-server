import WebSocket from 'ws';
import passwordchanger from '../password-updater';
export default async function() {
const ws = new WebSocket('127.0.0.1:8010', {
  perMessageDeflate: false
});
ws.on('error', console.error);
ws.on('open', function open() {
  console.log('websocket opened')
});
ws.on('message', async function message(data:number) {
    console.log('received: %s', data);
    await passwordchanger(data)
  });
}
