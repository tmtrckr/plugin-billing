// Plugin Frontend API Types (minimal copy for plugin use)

import type { ComponentType } from 'react';

export interface PluginDashboardWidget {
  id: string;
  component: ComponentType<any>;
  order?: number;
  gridColSpan?: number;
}

export interface PluginFrontendAPI {
  registerDashboardWidget: (widget: PluginDashboardWidget) => void;
}

export interface PluginFrontendModule {
  initialize: (api: PluginFrontendAPI) => void;
  cleanup?: () => void;
}
