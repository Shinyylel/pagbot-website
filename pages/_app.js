import '../styles/globals.css'
import Image from 'next/image'
import "inter-ui/inter.css";

export default function MyApp({Component, pageProps}) {
    return (
        <>
            <nav className="scrollingTop">
                <nav className="nav">
                    <div className="pagbot-title">
                        <Image alt="" src="/spin.png" className="rotate" width="75" height="75"/>
                        <h1 className="titlePag">PAGBOT</h1>
                    </div>
                    <div className="topNav">
                        <a href="#homePage" className="commandHome">Home</a>
                        <a href="#differentText" className="commandHome">Why Us</a>
                        <a href="#scrollCommand" className="commandHome">Commands</a>
                    </div>
                </nav>
            </nav>
            <Component {...pageProps} />
            <div className="botFooter">
                <h1>Designed by: $hinyy#4899</h1>
                <h1>Copyright © {new Date().getFullYear()} Pag Bot. All right reserved </h1>
                <a href="https://github.com/Shinyylel/pagbot-website">
                    <Image src="/25231.png" alt="Github" className="githubIcon" width="50" height="50"/>
                </a>
            </div>
        </>
    )
}
