import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.hoodmood.app',
  appName: 'HoodMood',
  webDir: 'dist/hoodmood/browser',
  server: {
    androidScheme: 'https'
  }
};

export default config;
