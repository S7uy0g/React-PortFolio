import Hotel from "../assets/Hotel.png"
import Game from "../assets/Game.png"
import Pokepedia from "../assets/Pokepedia.png"
import ToDo from "../assets/ToDO.png"

export const PROJECTS=[
    {
        name: "Prapti Niwas", 
        discription: "Frontend project of a hotel booking system with interactive User Interface with various mini details and responsive design capable of adapting in any device",
        tools:["HTML","CSS","JavaScript"],
        photo:Hotel,
        url:"https://s7uy0g.github.io/Prapti-Niwas/",
    },
    {
        name:"Shooting Game",
        discription:"A interactive 2D game of shooting drones and planes which contains scoreboard and life left to show the game progress.",
        tools:["HTML","CSS","JavaScript"],
        photo:Game,
        url:"https://s7uy0g.github.io/Shooting-Game/"
    },,
    {
        name:"Pokepedia",
        discription:"A frontend project of wikepedia like page for pokemons which has a responsive design and shows minor details about pokemons is extracted from an online API.",
        tools:["ReactsJS"],
        photo:Pokepedia,
        url:"https://pokepedia-gules.vercel.app",
    },
    {
        name:"ToDo web app",
        discription:"Interactive to-do application for task management.",
        tools:["ReactsJS","Typescript"],
        photo:ToDo,
        url:"https://to-do-typescript-tau.vercel.app",
    },
];