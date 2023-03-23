import { useState, useEffect } from "react";
import MeetupList from "../componentes/meetups/MeetupList";

function AllMeetupPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetup, setLoadedMeetup] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-getting-started-4b0a5-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetup(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All meetups</h1>
      <MeetupList meetup={loadedMeetup} />
    </section>
  );
}
export default AllMeetupPage;
