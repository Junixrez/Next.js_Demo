function login() {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-2xl gap-2">
      <label htmlFor="name">Name</label>
      <input
        placeholder=""
        className="input"
        name="text"
        type="text"
        id="name"
      />

      <label htmlFor="email">Email</label>
      <input
        placeholder=""
        className="input"
        name="text"
        type="email"
        id="email"
      />
    </div>
  );
}

export default login;
