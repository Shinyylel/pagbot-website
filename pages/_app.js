import '../styles/globals.css'
import img from "../public/spin.png";
import "inter-ui/inter.css";


const commands = [

    {
    name: "Clear",
    description: "Removes all songs in queue"
    },

    {
        name: "Now Playing",
        description: "Shows song that is currently playing"
    },

    {
        name: "Pause",
        description: "Pauses current song"
    },

    {
        name: "Play",
        description: "Plays a song of your choice use /play"
    },

    {
        name: "Queue",
        description: "Gets Queue of all songs in Queue"
    },

    {
        name: "Resume",
        description: "Resumes song currently playing"
    },

    {
        name: "Skip",
        description: "Skips current song"
    },

    {
        name: "Stop",
        description: "Stops playing the song"
    },
    {
        name: "Volume",
        description: "Changes volume of the bot 1-100"
    },

]

function MyApp({ Component, pageProps }) {

  return (
      <>
      <div>

          <nav className="scrollingTop">

        <nav className="nav">
            <img src="spin.png" className="rotate" width="75" height="75"/>
            <h1 className = "titlePag">PAGBOT</h1>

            <div className="topNav">

            <a href="#homePage" className="commandHome">Home</a>
            <a href="#differentText" className="commandHome">Why Us</a>
            <a href="#scrollCommand" className="commandHome">Commands</a>

             </div>

        </nav>

        </nav>
          <p id="homePage"></p>

          <div className="fullBackground">

          <div className="middleText">
              <h2 id="homePage">
                  Music was made to enjoy <br/> and listen to with others
              </h2>
          </div>

            <div className="addDiscord">
                <a href="https://discord.com/oauth2/authorize?client_id=1001866751941808128&scope=bot&permissions=37054528">
                <button className="theButton" >Add To Discord</button>
                </a>
            </div>
        <Component {...pageProps} />
          </div>
      </div>

          <div>
          <div className="whyDifferent">
              <h1 id="differentText">What Makes Us Different?</h1>
          </div>
              <h3 className="lowerText">No Need to Type commands all the time We implemented Buttons!</h3>

          <img src="buttons.png" className="picButton"/>

          </div>
          <img src="spin.png" className="middleRotate" width="250" height="250" id="scrollCommand"/>
          <div className="whyPagbot">
              <h1>Commands</h1>
          </div>
          <div className="box">
              <div className="box1">

                  {commands.map(command => (
                      <div key={command}>

                          <div className="titleBold">
                              {command.name}
                          </div>

                          <div className="description">
                              {command.description}
                          </div>

                      </div>
                  ))}

              </div>
          </div>

          <div className="botFooter">
              <h1>Designed by: $hinyy#4899</h1>
              <h1>Copyright © {new Date().getFullYear()} Pag Bot. All right reserved </h1>
              <img src="25231.png" className="githubIcon" width="75" height="75"/>
          </div>
      </>
  )
}

export default MyApp
