import { createStoreon } from 'storeon';

import { persistState } from '@storeon/localstorage';

import projects from './projects';

const store = createStoreon([persistState([projects])]);

export default store;
