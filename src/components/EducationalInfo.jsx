function EducationalInfo() {
  return (
    <section className="d-flex flex-column">
      <label htmlFor="name">
        Name: <input type="text" id="name" />
      </label>
      <label htmlFor="email">
        Email: <input type="email" id="email" />
      </label>
      <label htmlFor="phone-number">
        Phone Number: <input type="tel" id="phone-number" />
      </label>
    </section>
  );
}

export default EducationalInfo;
