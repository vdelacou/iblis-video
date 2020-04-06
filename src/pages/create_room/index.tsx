/* eslint-disable jsx-a11y/media-has-caption */
import { Box, Button, CircularProgress, Typography } from '@material-ui/core';
import copy from 'copy-to-clipboard';
import { t } from 'i18n-js';
import { MediaConnection } from 'peerjs';
import React, { FC, useEffect, useRef } from 'react';
import { useCreatePeer } from './hooks';

/*
 * The Create Room Page
 */
export const CreateRoom: FC = () => {
  const [peer] = useCreatePeer();
  const videoMyself = useRef<HTMLVideoElement>(null);
  const videoOthers = useRef<HTMLVideoElement>(null);

  // we received call
  useEffect(() => {
    if (peer) {
      peer.on('call', (mediaConnection: MediaConnection) => {
        navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then((videoStream) => {
          mediaConnection.answer(videoStream);
          if (videoMyself !== null && videoMyself.current !== null) {
            videoMyself.current.srcObject = videoStream;
          }
          mediaConnection.on('stream', (stream: MediaStream) => {
            if (videoOthers !== null && videoOthers.current !== null) {
              videoOthers.current.srcObject = stream;
            }
          });
        });
      });
    }
  }, [peer]);

  const copyToClipbaord = (): void => {
    if (peer) {
      copy(`${window.location.protocol}//${window.location.host}/join-room/${peer.id}`);
    }
  };

  return (
    <Box p={4}>
      {!peer && (
        <Typography align="center" variant="h6">
          <CircularProgress />
        </Typography>
      )}
      {peer && (
        <>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Typography align="center" variant="h6">
              {`${window.location.protocol}//${window.location.host}/join-room/${peer.id}`}
            </Typography>
            <Box p={1}>
              <Button onClick={copyToClipbaord} variant="outlined">
                {t('pages.CreateRoom.copyToClipbaord.button')}
              </Button>
            </Box>
          </Box>
          <Box p={3}>
            <Typography align="center" variant="subtitle2">
              {t('pages.CreateRoom.ready')}
            </Typography>
            <Typography align="center" variant="body2">
              {t('pages.CreateRoom.share')}
            </Typography>
          </Box>
        </>
      )}
      <video style={{ width: '50%' }} ref={videoOthers} autoPlay />
      <video style={{ width: '50%' }} ref={videoMyself} autoPlay />
    </Box>
  );
};
