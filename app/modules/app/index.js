/**
 * Created by ridel1e on 10/11/2016.
 */

import module from './module';

/* place to import and include your angular providers */
import routes from './routes';
routes(module);

/* each module in index should return a module name */
export default module.name;