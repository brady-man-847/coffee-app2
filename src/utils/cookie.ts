import { deleteCookie } from 'cookies-next';

export const getRootDomain = (url: string) => url.split('.').slice(-2).join('.');

export const removeCookie = (name: string) => {
  deleteCookie(name, {
    path: '/',
    domain: getRootDomain(window.location.hostname),
  });
};
