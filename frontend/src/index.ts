// Frontend entry point for Billing plugin
// This file registers plugin components with the core app

import type { PluginFrontendModule, PluginFrontendAPI } from './types';
import BillableWidget from './components/BillableWidget';

const initialize: PluginFrontendModule['initialize'] = (api: PluginFrontendAPI) => {
  // Register dashboard widget
  api.registerDashboardWidget({
    id: 'billable-widget',
    component: BillableWidget,
    order: 40,
    gridColSpan: 1,
  });
};

const module: PluginFrontendModule = {
  initialize,
};

export default module;
