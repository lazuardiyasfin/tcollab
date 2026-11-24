const getEnvVar = (key: string, defaultValue?: string): string => {
  const value = import.meta.env[key] as string | undefined;
  if (value === undefined) {
    if (defaultValue !== undefined) {
      return defaultValue;
    }
    throw new Error(`Environment variable ${key} is not defined`);
  }
  return value;
};

const getBooleanEnvVar = (key: string, defaultValue = false): boolean => {
  const value = import.meta.env[key] as string | undefined;
  if (value === undefined) {
    return defaultValue;
  }
  return value === 'true';
};

const getNumberEnvVar = (key: string, defaultValue?: number): number => {
  const value = import.meta.env[key] as string | undefined;
  if (value === undefined) {
    if (defaultValue !== undefined) {
      return defaultValue;
    }
    throw new Error(`Environment variable ${key} is not defined`);
  }
  const parsed = parseInt(value, 10);
  if (isNaN(parsed)) {
    throw new Error(`Environment variable ${key} is not a valid number`);
  }
  return parsed;
};

export const config = {
  app: {
    name: getEnvVar('VITE_APP_NAME', 'React App'),
    version: getEnvVar('VITE_APP_VERSION', '0.0.0'),
  },
  api: {
    baseUrl: getEnvVar('VITE_API_BASE_URL'),
    timeout: getNumberEnvVar('VITE_API_TIMEOUT', 30000),
  },
  features: {
    analytics: getBooleanEnvVar('VITE_ENABLE_ANALYTICS'),
    debugMode: getBooleanEnvVar('VITE_ENABLE_DEBUG_MODE'),
  },
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,
} as const;

export type Config = typeof config;