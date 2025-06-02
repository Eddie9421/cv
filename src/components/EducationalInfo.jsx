function EducationalInfo() {
  return (
    <section className="d-flex flex-column">
      <label htmlFor="school-name">
        School Name: <input type="text" id="school-name" />
      </label>
      <label htmlFor="title-of-study">
        Title of Study: <input type="text" id="title-of-study" />
      </label>
      <label htmlFor="date-of-study">
        Date of Study: <input type="date" id="date-of-study" />
      </label>
    </section>
  );
}

export default EducationalInfo;
