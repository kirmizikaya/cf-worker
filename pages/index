import { GetServerSideProps } from 'next';

type Props = {
  isMobile: boolean;
};

export default function Home({ isMobile }: Props) {
  return (
    <div style={{
      fontFamily: 'sans-serif',
      textAlign: 'center',
      marginTop: '4rem',
    }}>
      <h1>{isMobile ? '📱 Mobile Layout' : '🖥️ Desktop Layout'}</h1>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const deviceType = req.headers['x-device-type'] || 'desktop';
  return {
    props: {
      isMobile: deviceType === 'mweb',
    },
  };
};
