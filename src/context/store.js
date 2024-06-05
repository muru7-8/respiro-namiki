import { writable } from "svelte/store";

export const count = writable(0);
export const isLoading = writable(true);
export const color = writable('400');
export const dataResponse = writable([])
export const date = writable();
export const openModal = writable();

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
    id: 6,
    name: "SEMILLAS",
    userName: 'Claudia Valente',
    fetchId: 'dispositivo-6',
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
  },
  {
    id: 4,
    name: "TORTUGA",
    model: 'tortuga',
    userName: 'Leandro Barbeito',
    fetchId: 'dispositivo-4',
    city: 'Ramos Mejía, Buenos Aires',
    country: 'AR.',
    valueCo2: 0,
  },
  // {
  //   id: 5,
  //   name: "BRUS",
  //   model: 'brus',
  //   userName: 'MUNTREF Tecnópolis',
  //   fetchId: 'dispositivo-5',
  //   city: 'Villa Martelli, Buenos Aires',
  //   country: 'AR.',
  //   valueCo2: 0,
  // },
  // {
  //   id: 7,
  //   name: "SEMILLAS",
  //   userName: 'MUNAR',
  //   fetchId: 'dispositivo-7',
  //   city: 'La Boca, Buenos Aires',
  //   country: 'AR.',
  //   valueCo2: 0,
  // },
];