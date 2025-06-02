function GeneralInfo() {
  return (
    <div className="d-flex">
      <label htmlFor="name">
        Name: <input type="text" id="name" />
      </label>
      <label htmlFor="email">
        Email: <input type="email" id="email" />
      </label>
      <label htmlFor="">
        <input type="text" />
      </label>
    </div>
  );
}

export default GeneralInfo;
