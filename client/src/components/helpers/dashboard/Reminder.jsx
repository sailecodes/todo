const Reminder = ({ reminder }) => {
  return (
    <p className="todo--reminder" key={reminder}>
      {reminder}
    </p>
  );
};

export default Reminder;
