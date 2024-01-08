function FormOption({ carName, key: keyId }) {
  return <option key={keyId}>{carName}</option>;
}

export default FormOption;
