import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const VideoFrame = ({data}) => {
    return(<>
        <div className='video-frame'>
            <iframe  src={`https://www.youtube.com/embed/${data.key}`}></iframe>
        </div>
    </>)
}

export default VideoFrame;