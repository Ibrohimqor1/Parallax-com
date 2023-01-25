import { Parallax } from 'react-parallax';
import three from '../image/imagethree.jpg'

const Imageone = () => (
    <Parallax className='image1'  bgImage={three}  strength={900}>
      <div className='content'>
        <span className='img-text'>a trip to space </span>
      </div>
    </Parallax>
);
export default Imageone