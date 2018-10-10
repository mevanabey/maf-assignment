import React from 'react';
import NextHead from 'next/head';

import 'shared/styles/global';

const Head = ({ description, title, ...props}) => (
    <NextHead>
        <meta charSet="UTF-8" />
        <title>{ title }</title>
        <meta name="description" content={ description } />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
        <link rel="icon" href="/static/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,600i" rel="stylesheet" />
    </NextHead>
);

export default Head;
