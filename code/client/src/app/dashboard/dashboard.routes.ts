import { Route } from '@angular/router';

import { OrderRoutes } from './orders/index';
import { FrequencyRoutes } from './frequencies/index';
import { FineRoutes } from './fines/index';
import { MotorcycleRoutes } from './motorcycles/index';

import { DashboardComponent } from './index';

export const DashboardRoutes: Route[] = [
  	{
    	path: 'dashboard',
    	component: DashboardComponent,
    	children: [
	    	...OrderRoutes,
	    	...FrequencyRoutes,
        ...FineRoutes,
        ...MotorcycleRoutes,
    	]
  	}
];
