import MeetupList from "../components/meetups/MeetupList";
import { useEffect, useState } from "react";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  // sending a get request
  useEffect(() => {
    fetch(
      "https://react-demo-f66e4-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json"
    )
      .then((response) => {
        // returns a promise
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setLoadedMeetups(data);
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
