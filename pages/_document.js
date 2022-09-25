import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
    return (
        <Html>
            <Head>
                <meta charset="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <title> Ayanonize</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="manifest" href="site.webmanifest" />
                <link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon.ico" />


                <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
                <link rel="stylesheet" href="assets/css/owl.carousel.min.css" />
                <link rel="stylesheet" href="assets/css/slicknav.css" />
                <link rel="stylesheet" href="assets/css/flaticon.css" />
                <link rel="stylesheet" href="assets/css/progressbar_barfiller.css" />
                <link rel="stylesheet" href="assets/css/gijgo.css" />
                <link rel="stylesheet" href="assets/css/animate.min.css" />
                <link rel="stylesheet" href="assets/css/animated-headline.css" />
                <link rel="stylesheet" href="assets/css/magnific-popup.css" />
                <link rel="stylesheet" href="assets/css/fontawesome-all.min.css" />
                <link rel="stylesheet" href="assets/css/themify-icons.css" />
                <link rel="stylesheet" href="assets/css/slick.css" />
                <link rel="stylesheet" href="assets/css/nice-select.css" />
                <link rel="stylesheet" href="assets/css/style.css" />
            </Head>
            <body>
                <Main />
                <NextScript />
                <Script src="/assets/js/vendor/modernizr-3.5.0.min.js" strategy='beforeInteractive'></Script>

                <Script src="/assets/js/vendor/jquery-1.12.4.min.js" strategy='beforeInteractive'></Script>
                <Script src="/assets/js/popper.min.js" strategy='beforeInteractive'></Script>
                <Script src="/assets/js/bootstrap.min.js" strategy='beforeInteractive'></Script>

                <Script src="/assets/js/jquery.slicknav.min.js" strategy='beforeInteractive'></Script>


                <Script src="/assets/js/owl.carousel.min.js" strategy='beforeInteractive'></Script>
                <Script src="/assets/js/slick.min.js" strategy='beforeInteractive'></Script>

                <Script src="/assets/js/wow.min.js" strategy='beforeInteractive'></Script>
                <Script src="/assets/js/animated.headline.js" strategy='beforeInteractive'></Script>
                <Script src="/assets/js/jquery.magnific-popup.js" strategy='beforeInteractive'></Script>


                <Script src="/assets/js/gijgo.min.js" strategy='beforeInteractive'></Script>

                <Script src="/assets/js/jquery.nice-select.min.js" strategy='beforeInteractive'></Script>
                <Script src="/assets/js/jquery.sticky.js" strategy='beforeInteractive'></Script>

                <Script src="/assets/js/jquery.barfiller.js" strategy='beforeInteractive'></Script>


                <Script src="/assets/js/jquery.counterup.min.js" strategy='beforeInteractive'></Script>
                <Script src="/assets/js/waypoints.min.js" strategy='beforeInteractive'></Script>
                <Script src="/assets/js/jquery.countdown.min.js" strategy='beforeInteractive'></Script>
                <Script src="/assets/js/hover-direction-snake.min.js" strategy='beforeInteractive'></Script>


                <Script src="/assets/js/contact.js" strategy='beforeInteractive'></Script>
                <Script src="/assets/js/jquery.form.js" strategy='beforeInteractive'></Script>
                <Script src="/assets/js/jquery.validate.min.js" strategy='beforeInteractive'></Script>
                <Script src="/assets/js/mail-script.js" strategy='beforeInteractive'></Script>
                <Script src="/assets/js/jquery.ajaxchimp.min.js" strategy='beforeInteractive'></Script>


                <Script src="/assets/js/plugins.js" strategy='beforeInteractive'></Script>
                <Script src="/assets/js/main.js" strategy='beforeInteractive'></Script>


            </body>
        </Html>
    )
}