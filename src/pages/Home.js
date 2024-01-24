import EventCard from "../components/EventCard";
import RegisterBtn from "../components/RegisterButton";
import axiosInstance from "../axios";
import { useEffect,useState } from "react";
import "./Home.css";

export default function Home() {
  const [eventsData, updateEvent] = useState([]);

  useEffect(() => {
    axiosInstance.get("events/event/1/").then((res) => {
      updateEvent(res.data.sub_event);
      console.log(eventsData);
    });
  }, []);
  return (
    <>
      <h1 className="custom-font title">EVENTS</h1>
      {eventsData.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
      <RegisterBtn />
    </>
  );
}
