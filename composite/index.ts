import {GalleryComposite} from './gallery.composite';
import {GalleryImage} from './image';

const container = new GalleryComposite('', 'all-galleries');
const gallery1 = new GalleryComposite('Gallery 1', 'gallery-1');
const gallery2 = new GalleryComposite('Gallery 2', 'gallery-2');

const image1 = new GalleryImage('img1.jpg', 'img-1');
const image2 = new GalleryImage('img2.jpg', 'img-2');
const image3 = new GalleryImage('img3.jpg', 'img-3');
const image4 = new GalleryImage('img4.jpg', 'img-4');

gallery1.add(image1);
gallery1.add(image2);

gallery2.add(image3);
gallery2.add(image4);

container.add(gallery1);
container.add(gallery2);

document.body.appendChild(container);