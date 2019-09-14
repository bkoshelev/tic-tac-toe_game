import io from 'socket.io-client';
import { socketUrl } from '../config';

const socket = io(socketUrl[process.env.NODE_ENV]);

export default socket;
