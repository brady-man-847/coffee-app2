import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { ACCESS_TOKEN } from '@/defines/token';
import { StatusCodes } from 'http-status-codes';

export function withGetLoginGuardMidasWorkspaceServerSideProps(getServersideProps?: GetServerSideProps) {
  const loginGuardGetServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    try {
      const {
        req: { cookies },
      } = context;

      if (!cookies[ACCESS_TOKEN]) {
        return {
          redirect: {
            destination: '/auth',
            statusCode: StatusCodes.TEMPORARY_REDIRECT,
          },
        };
      }

      const serverSideProps = (await getServersideProps?.(context)) as GetServerSidePropsResult<{ [key: string]: any }>;

      return serverSideProps || { props: {} };
    } catch (error) {
      return Promise.resolve({ props: {} });
    }
  };

  return loginGuardGetServerSideProps;
}
