// config.js - figure out what set of credentials to return
import * as prodConfig from './prod.config';
import * as devConfig from './dev.config';

export default process.env.NODE_ENV === 'production' ? prodConfig : devConfig;
