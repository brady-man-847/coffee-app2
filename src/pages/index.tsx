export default function HomePage() {}

export const getServerSideProps = async () => {
  return {
    redirect: {
      destination: '/menu',
      permanent: true,
    },
  };
};
