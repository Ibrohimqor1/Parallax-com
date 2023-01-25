import { Parallax } from 'react-parallax';
import one from '../image/imageone.jpg'

const Imageone = () => (
    <Parallax className='image1'  bgImage={one}  strength={900}>
      <div className='content'>
        <span className='img-text'>a trip to space </span>
      </div>
    </Parallax>
);
export default Imageone