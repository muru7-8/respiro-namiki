import { writable } from "svelte/store";

export const count = writable(0);
export const isLoading = writable(true);
export const color = writable('400');
export const dataResponse = writable([])
export const date = writable();

export const dataInfo = [
  {
    id: 1,
    name: "ACHIRA",
    userName: 'Nic Motta',
    fetchId: 'dispositivo-1',
    city: 'San Fernando, Buenos Aires',
    country: 'AR.',
    valueCo2: 0
  },
  {
    id: 2,
    name: "SEMILLAS",
    userName: 'Claudia Valente',
    fetchId: 'dispositivo-2',
    city: 'Jose C. Paz, Buenos Aires',
    country: 'AR.',
    valueCo2: 0,
  },
  {
    id: 3,
    name: "BRUS",
    model: 'brus',
    userName: 'Lupita Chavez',
    fetchId: 'dispositivo-3',
    city: 'Tepic, Nayarit',
    country: 'MX.',
    valueCo2: 0,
  }
];