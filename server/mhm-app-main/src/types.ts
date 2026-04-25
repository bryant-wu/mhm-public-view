export type Screen = 
  | 'onboarding' 
  | 'psychology' 
  | 'baseline' 
  | 'target' 
  | 'potential' 
  | 'dashboard' 
  | 'settings' 
  | 'social'
  | 'training';

export interface AppState {
  screen: Screen;
  responses: Record<string, boolean>;
  height: number;
  target: number;
}
