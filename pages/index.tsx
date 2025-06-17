import { headers } from 'next/headers';

export default function HomePage() {
  const device = headers().get('x-device');

  return (
    <div className="text-center mt-20 text-2xl font-bold">
      {device === 'mobile' && '📱 Mobile Layout'}
      {device === 'tablet' && '📲 Tablet Layout'}
      {device === 'desktop' && '🖥️ Desktop Layout'}
      {!device && '🤷‍♂️ Device Unknown'}
    </div>
  );
}
