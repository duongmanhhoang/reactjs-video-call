import React, { useEffect, useRef } from 'react';

const Video = ({ peer, name }) => {
  const refVideo = useRef(null);

  useEffect(() => {
    if (peer) {
      peer.on('stream', (stream) => {
        refVideo.current.srcObject = stream;
      });
    }
  }, [peer]);

  return (
    <div>
      <video className='room__video-container--user-video' muted ref={refVideo} autoPlay playsInline />
      <div className='room__video-container--user-name'>{name}</div>
    </div>
  );
};

export default Video;
