import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'One Punch man',
  webDir: 'dist'
,
    android: {
       buildOptions: {
          keystorePath: 'd:\AndroidStudioProjects\keystore\keystore.jks',
          keystoreAlias: 'ber',
       }
    }
  };

export default config;
