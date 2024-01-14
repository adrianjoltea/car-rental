export function checkPassword(password) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@.#$!%*?&^])$/;

  return regex.test(password);
}
