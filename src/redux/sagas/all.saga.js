import getImages from './getImages.saga';
import getTags from './getTags.saga';
import getImageTags from './getImageTags.saga';

const allSagas = {
    'GET_IMAGES' : getImages,
    'GET_TAGS' : getTags,
    'GET_IMAGE_TAGS' : getImageTags,
}

export default allSagas;