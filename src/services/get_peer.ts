import Peer from 'peerjs';

export const getPeer = async (): Promise<Peer> => {
  const peer = new Peer(undefined, { debug: 2 });

  return new Promise((resolve) => {
    peer.on('open', (): void => {
      resolve(peer);
    });
  });
};
