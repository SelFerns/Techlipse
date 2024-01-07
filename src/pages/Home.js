import EventCard from "../components/EventCard";


export default function Home() {
    const eventsData = [
        {
            id: 1,
            title: "Event 1",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus accusantium debitis at laudantium omnis odit repellendus dolorum itaque totam aspernatur quas ad modi, provident laborum sapiente fuga sed nam incidunt voluptatibus error ab dolor?",
            imgURL: "/images/code.jpg",
        },

        {
            id: 2,
            title: "Event 2",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus accusantium debitis at laudantium omnis odit repellendus dolorum itaque totam aspernatur quas ad modi, provident laborum sapiente fuga sed nam incidunt voluptatibus error ab dolor?",
            imgURL: "/images/treasure.jpg",

        },

        {
            id: 3,
            title: "Event 3",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus accusantium debitis at laudantium omnis odit repellendus dolorum itaque totam aspernatur quas ad modi, provident laborum sapiente fuga sed nam incidunt voluptatibus error ab dolor?",
            imgURL: "/images/gaming.jpg",

        },
    ];
    return (
        <>
            <h1 style={{ textAlign: "center", marginTop: "30px" }}>EVENTS</h1>
            {eventsData.map((event) => (
                <EventCard key={event.id} event={event} />
            ))}
        </>
    );
}