import { DISPOSITIVOS } from "../../constants/constants";

export async function get() {
  const response = await fetch('https://respir0-namiki-default-rtdb.firebaseio.com/data.json');
  const data = await response.json();
  const dataResponse = DISPOSITIVOS.map((dispositivo) => {
    const key = data[dispositivo];
    const lastId = Object.keys(key)[Object.keys(key).length - 1];
    const newData = data[dispositivo][lastId].co2;
    return newData
  })
  return {
    body: JSON.stringify(dataResponse),
  };
}