import classes from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";

function MeetupList(props) {
  return (
    // putting a list through an unordered list
    // auto populate
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
