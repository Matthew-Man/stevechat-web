import Head from 'next/head';
import { ReactNode } from 'react';

import { Box } from '@chakra-ui/react';

interface Props {
  title?: string;
  children: {
    header?: ReactNode;
    body: ReactNode;
    footer?: ReactNode;
  };
}

export default function LayoutFullscreen({
  title,
  children: { header, body, footer },
}: Props) {
  return (
    <>
      <Head>
        <title>{title ? `${title} - SteveChat Web` : "SteveChat Web"}</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      {body}

      <Box position="fixed" top="0" width="100%">
        {header}
      </Box>

      <Box position="fixed" bottom="0" width="100%">
        {footer}
      </Box>
    </>
  );
}
