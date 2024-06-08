import { DISPOSITIVOS } from "../../constants";

export async function get() {
  const response = await fetch(
    "https://respir0-namiki-default-rtdb.firebaseio.com/data.json"
  );
  const data = await response.json();
  const dataResponse = DISPOSITIVOS.map((dispositivo) => {
    const key = data[dispositivo];
    return key.co2;
  });
  return {
    body: JSON.stringify(dataResponse),
  };
}
