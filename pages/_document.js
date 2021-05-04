import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head />
                <body>
                <Main />
                <NextScript />
                <script type="text/javascript" src="/js/vendor/jquery-1.12.4.min.js"/>
                <script type="text/javascript" src="/js/popper.min.js"/>
                <script type="text/javascript" src="/js/bootstrap.min.js"/>
                <script type="text/javascript" src="/js/one-page-nav-min.js"/>
                <script type="text/javascript" src="/js/slick.min.js"/>
                <script type="text/javascript" src="/js/ajax-form.js"/>
                <script type="text/javascript" src="/js/wow.min.js"/>
                <script type="text/javascript" src="/js/aos.js"/>
                <script type="text/javascript" src="/js/jquery.counterup.min.js"/>
                <script type="text/javascript" src="/js/skrollr.min.js"/>
                <script type="text/javascript" src="/js/element-in-view.js"/>
                <script type="text/javascript" src="/js/parallax-scroll.js"/>
                <script type="text/javascript" src="/js/paroller.js"/>
                <script type="text/javascript" src="/js/jquery.waypoints.min.js"/>
                <script type="text/javascript" src="/js/jquery.scrollUp.min.js"/>
                <script type="text/javascript" src="/js/jquery.magnific-popup.min.js"/>
                <script type="text/javascript" src="/js/plugins.js"/>
                <script type="text/javascript" src="/js/main.js"/>
                </body>
            </Html>
        )
    }
}

export default MyDocument;
