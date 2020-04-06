import { Box, CircularProgress, Typography } from '@material-ui/core';
import { MediaConnection } from 'peerjs';
import React, { FC, useEffect, useRef } from 'react';
import { useParams } from 'react-router';
import { useJoinPeer } from './hooks';

/*
 * The Join Room Page
 */
export const JoinRoom: FC = () => {
  const { id } = useParams();
  const videoMyself = useRef<HTMLVideoElement>(null);
  const videoOthers = useRef<HTMLVideoElement>(null);
  const [peer, connected] = useJoinPeer();

  // we call directly when connection establish
  useEffect(() => {
    if (peer && id && connected) {
      navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then((videoStream) => {
        const mediaConnection: MediaConnection = peer.call(id, videoStream);
        if (videoMyself !== null && videoMyself.current !== null) {
          videoMyself.current.srcObject = videoStream;
        }
        mediaConnection.on('stream', (stream: MediaStream) => {
          if (videoOthers !== null && videoOthers.current !== null) {
            videoOthers.current.srcObject = stream;
          }
        });
      });
    }
  }, [peer, connected, id]);

  return (
    <Box p={4}>
      {!peer && (
        <Typography align="center" variant="h6">
          <CircularProgress />
        </Typography>
      )}
      <video style={{ width: '50%' }} ref={videoOthers} autoPlay muted />
      <video style={{ width: '50%' }} ref={videoMyself} autoPlay muted />
    </Box>
  );
};
