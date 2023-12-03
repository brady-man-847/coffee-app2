const prefix = 'cutta_';
export const ACCESS_TOKEN = `${prefix}access_token`;
export const REFRESH_TOKEN = `${prefix}refresh_token`;

export const AT_EXPIRES_IN = 30 * 60 * 1000;

export const DOMAIN = process.env.NODE_ENV === 'development' ? 'localhost' : process.env.NODE_ENV === 'production' ? 'github.io' : '';
