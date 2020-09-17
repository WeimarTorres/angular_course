import { createAction, props } from '@ngrx/store';

export const Report = createAction('[ADMIN]Report', props<{Person: any}>());