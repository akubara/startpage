import { persistState } from '@storeon/localstorage';
import { createStoreon } from 'storeon';

import main from './main';

const store = createStoreon([main, persistState(['tags', 'sites'])]);

export default store;
