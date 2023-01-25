import { Parallax } from 'react-parallax';
import two from '../image/imagetwo.jpg'

const Imageone = () => (
    <Parallax className='image1'  bgImage={two}  strength={900}>
      <div className='content'>
        <span className='img-text'>a trip to space </span>
      </div>
    </Parallax>
);
export default Imageone