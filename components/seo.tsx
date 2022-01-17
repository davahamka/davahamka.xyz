import Head from 'next/head';

type SeoProps = {
  title?: string;
};

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

const Seo = ({ title }: SeoProps) => {
  const meta = {
    ...defaultMeta,
  };

  return (
    <Head>
      <title>{title ? `${title} - ${meta.title}` : meta.title}</title>
      <meta content={meta.description} name='description' />
      <meta name='robots' content={meta.robots} />
      {/* openGraph */}
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content={meta.siteName} />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta name='image' property='og:image' content={meta.image} />
      {/* Twitter  */}
      <meta name='twitter:card' content='summary_large_image' />

      <link
        rel='apple-touch-icon'
        sizes='120x120'
        href='/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon-16x16.png'
      />
      <link rel='manifest' href='/site.webmanifest' />
      <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
      <meta name='msapplication-TileColor' content='#da532c' />
      <meta name='theme-color' content='#ffffff'></meta>
    </Head>
  );
};

export default Seo;
