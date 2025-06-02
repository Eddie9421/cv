function InfoComponent({ infoFields }) {
  return (
    <section className="d-flex flex-column">
      {infoFields.map((item, i) => (
        <label htmlFor={item.name} key={i}>
          {item.text}
          <input type={item.type} id={item.name} />
        </label>
      ))}
    </section>
  );
}

export default InfoComponent;
