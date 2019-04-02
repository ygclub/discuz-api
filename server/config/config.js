import path from 'path';
import constants from '../../config/constants';

// Upload file settings.
const upload = {
  savePath: path.join(process.cwd(), 'static', 'file'),
  urlPath: 'file',
};

export default {
  upload,
  ...constants,
};
