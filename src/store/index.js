import { persistState } from '@storeon/localstorage';
import { createStoreon } from 'storeon';

import main from './main';
import toast from './toast';

const store = createStoreon([main, toast, persistState(['tags', 'sites'])]);

export default store;
