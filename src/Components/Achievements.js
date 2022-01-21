import "../styles.css";

export default function AchievementComp({ count, setCount, progress }) {
  const achivements = [
    { name: "Goodbye Earth!", value: 1, text: "Travel 1 Kilometer", img: "" },
    {
      name: "Goodbye Moon!",
      value: 400,
      text: "Travel 400 Kilometers",
      img: ""
    },
    {
      name: "Hello Venus!",
      value: 61000000,
      text: "Travel 61,000,000 Kilometers",
      img: ""
    },
    {
      name: "Hello Mercury!",
      value: 77000000,
      text: "Travel 77,000,000 Kilometers",
      img: ""
    },
    {
      name: "Hello Sun!",
      value: 150000000,
      text: "Travel 150,000,000 Kilometers",
      img: ""
    }
  ];

  return (
    <div className="achievements container">
      {achivements.map((a) => (
        <div
          className={
            "btn " +
            (progress >= a.value ? "achievements-on" : "achievements-off")
          }
        >
          {a.img}{" "}
          {progress >= a.value ? (
            <>
              {a.name} <br /> {a.text}
            </>
          ) : (
            "🔒"
          )}
        </div>
      ))}
    </div>
  );
}
