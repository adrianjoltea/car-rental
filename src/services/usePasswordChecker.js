export function checkPassword(password) {
  // const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@.#$!%*?&^])$/;
  // const regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])$/;
  // const regex =
  //   /^(?=.*\d.*\D)(?=.*[!@#$%^&*].*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])$/;
  const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).*$/;

  return regex.test(password);
}
