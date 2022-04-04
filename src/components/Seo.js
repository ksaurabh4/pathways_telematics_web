import Head from 'next/head';
import { useRouter } from 'next/router';
import { openGraph } from '@libs/helper';

const defaultMeta = {
    title: 'Pathways Telematics',
    siteName: 'pathwaystelematics.com',
    description: "Pathways Telematics is a renowned wholesaler, supplier and service provider of advance gps tracking system.",
    url: 'http://pathwaystelematics.com',
    image: 'https://pathwaystelematics.com/favicon/logo.png',
    type: 'website',
    robots: 'follow, index',
};


export default function Seo(props) {
    const router = useRouter();
    const meta = {
        ...defaultMeta,
        ...props,
    };
    meta['title'] = props.templateTitle
        ? `${props.templateTitle} | ${meta.siteName}`
        : meta.title;

    // Use siteName if there is templateTitle
    // but show full title if there is none
    meta.image = openGraph({
        description: meta.description,
        siteName: props.templateTitle ? meta.siteName : meta.title,
        templateTitle: props.templateTitle,
        banner: props.banner,
        isBlog: props.isBlog,
    });

    return (
        <Head>
            <title>{meta.title}</title>
            <meta name='robots' content={meta.robots} />
            <meta content={meta.description} name='description' />
            <meta property='og:url' content={`${meta.url}${router.asPath}`} />
            <link rel='canonical' href={`${meta.url}${router.asPath}`} />
            {/* Open Graph */}
            <meta property='og:type' content={meta.type} />
            <meta property='og:site_name' content={meta.siteName} />
            <meta property='og:description' content={meta.description} />
            <meta property='og:title' content={meta.title} />
            <meta name='image' property='og:image' content={meta.image} />
            {/* Twitter */}
            <meta name='twitter:card' content='summary_large_image' />
            <meta name='twitter:site' content='@th_clarence' />
            <meta name='twitter:title' content={meta.title} />
            <meta name='twitter:description' content={meta.description} />
            <meta name='twitter:image' content={meta.image} />
            {meta.date && (
                <>
                    <meta property='article:published_time' content={meta.date} />
                    <meta
                        name='publish_date'
                        property='og:publish_date'
                        content={meta.date}
                    />
                    <meta
                        name='author'
                        property='article:author'
                        content='Theodorus Clarence'
                    />
                </>
            )}

            {/* Favicons */}
            {favicons.map((linkProps) => (
                <link key={linkProps.href} {...linkProps} />
            ))}
            <meta name='msapplication-TileColor' content='#ffffff' />
            <meta
                name='msapplication-TileImage'
                content='/favicon/ms-icon-144x144.png'
            />
            <meta name='theme-color' content='#ffffff' />
        </Head>
    );
}



const favicons = [
    {
        rel: 'apple-touch-icon',
        sizes: '57x57',
        href: '/favicon/apple-icon-57x57.png',
    },
    {
        rel: 'apple-touch-icon',
        sizes: '60x60',
        href: '/favicon/apple-icon-60x60.png',
    },
    {
        rel: 'apple-touch-icon',
        sizes: '72x72',
        href: '/favicon/apple-icon-72x72.png',
    },
    {
        rel: 'apple-touch-icon',
        sizes: '76x76',
        href: '/favicon/apple-icon-76x76.png',
    },
    {
        rel: 'apple-touch-icon',
        sizes: '114x114',
        href: '/favicon/apple-icon-114x114.png',
    },
    {
        rel: 'apple-touch-icon',
        sizes: '120x120',
        href: '/favicon/apple-icon-120x120.png',
    },
    {
        rel: 'apple-touch-icon',
        sizes: '144x144',
        href: '/favicon/apple-icon-144x144.png',
    },
    {
        rel: 'apple-touch-icon',
        sizes: '152x152',
        href: '/favicon/apple-icon-152x152.png',
    },
    {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicon/apple-icon-180x180.png',
    },
    {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/favicon/android-icon-192x192.png',
    },
    {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon/favicon-32x32.png',
    },
    {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: '/favicon/favicon-96x96.png',
    },
    {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon/favicon-16x16.png',
    },
    {
        rel: 'icon',
        type: 'image/png',
        sizes: '70x70',
        href: '/favicon/ms-icon-70x70.png',
    },
    {
        rel: 'icon',
        type: 'image/png',
        sizes: '144x144',
        href: '/favicon/ms-icon-144x144.png',
    },
    {
        rel: 'icon',
        type: 'image/png',
        sizes: '150x150',
        href: '/favicon/ms-icon-150x150.png',
    },
    {
        rel: 'icon',
        type: 'image/png',
        sizes: '310x310',
        href: '/favicon/ms-icon-310x310.png',
    },
    {
        rel: 'manifest',
        href: '/favicon/manifest.json',
    },
];