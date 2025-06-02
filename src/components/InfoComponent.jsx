function InfoComponent({ infoFields }) {
  return (
    <section className="d-flex flex-column">
      {infoFields.map((item, i) => {
        <label htmlFor={item.name} key={i}>
          {item.text}
        </label>;
      })}
    </section>
  );
}

return InfoComponent;
