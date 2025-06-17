import { GetServerSideProps } from 'next';

type Props = {
  device: string | null;
};

export const getServerSideProps: GetServerSideProps<Props> = async ({ req }) => {
  const device = req.headers['x-device'] || null;

  return {
    props: {
      device: typeof device === 'string' ? device : null,
    },
  };
};

export default function Home({ device }: Props) {
  return (
    <div>
      <h1>Gelen cihaz: {device}</h1>
    </div>
  );
}
