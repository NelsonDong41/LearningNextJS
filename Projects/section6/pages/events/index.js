import { getAllEvents } from "../../helpers/api-utils";
import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/events-search";
import { useRouter } from "next/router";

function AllEventsPage(props) {

  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullpath = `/events/${year}/${month}`;
    router.push(fullpath);
  }

  return (
    <>
      <EventsSearch onSearch ={findEventsHandler}/>
      <EventList items={props.events}/>
    </>
  );
}


export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events : events
    },
    revalidate: 60
  }
}


export default AllEventsPage;
