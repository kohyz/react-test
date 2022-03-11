import MeetupList from "../components/meetups/MeetupList";
import { useEffect, useState } from "react";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  // useEffect restrict and define conditions when this code should run
  // will run only when variable state in array changes
  // if not empty array = run once only
  useEffect(() => {
    setIsLoading(true);
    fetch(
      // sending a get request
      "https://react-demo-f66e4-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json"
    )
      .then((response) => {
        // returns a promise
        return response.json();
      })
      .then((data) => {
        // need to change data to object, returning array now

        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
            // copy all key value pairs
          };

          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);
  // use state to wait for API response

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  // infinite loop cause when call state, should re-execute the function whenever state changes
  return (
    <section>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
