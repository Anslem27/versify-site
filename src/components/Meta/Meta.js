import Head from 'next/head';

const name = 'Poemtopia App';
const twitterHandle = '@anslemAnsy';

export const Meta = ({ title, description, prefix = name }) => {
  const titleText = [prefix, title].filter(Boolean).join(' | ');

  return (
    <Head>
      <title key="title">{titleText}</title>
      <meta key="description" name="description" content={description} />
      <meta name="author" content={name} />

      <meta property="og:title" content={titleText} />
      <meta property="og:site_name" content={name} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:title" content={titleText} />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />

    </Head>
  );
};
