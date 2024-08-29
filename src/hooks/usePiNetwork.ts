import { useState, useEffect } from 'react';
import WebSocket from 'ws';

interface PiNetwork {
  connected: boolean;
  message: string | null;
}

const usePiNetwork = (): PiNetwork => {
  const [connected, setConnected] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const ws = new WebSocket('wss://example.com/pi-network');

    ws.onopen = () => {
      setConnected(true);
    };

    ws.onmessage = (event) => {
      setMessage(event.data);
    };

    ws.onerror = (event) => {
      console.error(event);
    };

    ws.onclose = () => {
      setConnected(false);
    };

    return () => {
      ws.close();
    };
  }, []);

  return { connected, message };
};

export default usePiNetwork;
