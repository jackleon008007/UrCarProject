export interface Car{
  id: number;
  image: string;
  title: string;
  price: number;
  description: string;
  likes:number;

  fabricationYear: string;
  idOwner: number;
  modelCar: string;
  numberSeats: number;
  numberDoors: number;
  bootType: string;
  plate: string;
  lessorId:number;
}

 export interface Car {
  content:          Content[];
  pageable:         Pageable;
  last:             boolean;
  totalPages:       number;
  totalElements:    number;
  size:             number;
  number:           number;
  sort:             Sort;
  first:            boolean;
  numberOfElements: number;
  empty:            boolean;
}

interface Content {
  id:              number;
  title:           string;
  description:     string;
  price:           number;
  ownerId:         number;
  content:         string;
  fabricationYear: Date;
  likes:           number;
  modelCar:        string;
  numberSeats:     number;
  numberDoors:     number;
  bootType:        string;
  plate:           string;
  imageurl:        string;
}

interface Pageable {
  sort:       Sort;
  offset:     number;
  pageSize:   number;
  pageNumber: number;
  paged:      boolean;
  unpaged:    boolean;
}

export interface Sort {
  empty:    boolean;
  unsorted: boolean;
  sorted:   boolean;
}
