import Head from 'next/head';

const defaultMeta = {
  title: 'Dava Hamka',
  description:
    'A medium or blog by Dava for expressing opinions about website development, software engineering, etc.',
  siteName: 'davahamka.xyz',
  url: 'https://davahamka.xyz',
  type: 'website',
  robots: 'follow, index',
  image: '',
};

const Seo = () => {
  const meta = {
    ...defaultMeta,
  };

  return (
    <Head>
      <title>{meta.title}</title>
      <meta content={meta.description} name='description' />
      <meta name='robots' content={meta.robots} />
      {/* openGraph */}
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content={meta.siteName} />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta name='image' property='og:image' content={meta.image} />
    </Head>
  );
};

export default Seo;
