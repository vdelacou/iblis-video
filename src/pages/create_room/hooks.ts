import Peer from 'peerjs';
import { useCallback, useEffect, useRef, useState } from 'react';
import { getPeer } from '../../services/get_peer';
import { useErrorMessageStore } from '../../stores/error_message_store';

export const useCreatePeer = (): [Peer | undefined] => {
  const [peer, setPeer] = useState<Peer>();
  const { setErrorMessage } = useErrorMessageStore();

  // callback
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
        // eslint-disable-next-line no-console
        console.error('error', error);
        setErrorMessageRef.current(error.message);
      });
    });
  }, []);

  // listen to data
  useEffect(() => {
    if (peer) {
      peer.on('error', (err) => {
        // eslint-disable-next-line no-console
        console.error('error', err);
        setErrorMessageRef.current(err.message);
      });
    }
  }, [peer]);

  return [peer];
};
