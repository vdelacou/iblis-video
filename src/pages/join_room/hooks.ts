import Peer from 'peerjs';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { getPeer } from '../../services/get_peer';
import { useErrorMessageStore } from '../../stores/error_message_store';

export const useJoinPeer = (): [Peer | undefined, boolean] => {
  const { id } = useParams();
  const [peer, setPeer] = useState<Peer>();
  const [connected, setConnected] = useState<boolean>(false);
  const { setErrorMessage } = useErrorMessageStore();

  // ref callback
  const setErrorMessageRef = useRef(
    useCallback(
      (error: string) => {
        setErrorMessage(error);
      },
      [setErrorMessage]
    )
  );

  // init
  useEffect(() => {
    getPeer().then((peerResult) => {
      setPeer(peerResult);
      peerResult.on('error', (error) => {
        setErrorMessageRef.current(error.message);
      });
    });
  }, []);

  // connect to server
  useEffect(() => {
    if (id && peer) {
      const conn = peer.connect(id, {
        reliable: true,
      });
      conn.on('open', () => {
        setConnected(true);
      });
      conn.on('error', (error) => {
        setErrorMessageRef.current(error.message);
      });
    }
  }, [id, peer]);

  return [peer, connected];
};
