import img from '../public/spin.png'
import pagbot from '../public/pagbot.png'

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

export default function Home() {
    return (
        <div>
            <div className="fullBackground">
                <div className="middleText">
                    <h2 id="homePage">
                        Music was made to enjoy <br/> and listen to with others
                    </h2>
                </div>

                <div className="addDiscord">
                    <a href="https://discord.com/oauth2/authorize?client_id=1001866751941808128&scope=bot&permissions=37054528">
                        <button className="theButton">Add To Discord</button>
                    </a>
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
        </div>
    )
}
