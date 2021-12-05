export interface Leaseholder {
  id:number,
  name:string,
  lastName:string,
  dni: number,
  age:number,
  address: string,
  type:string,
  password:string,
  imageProfile:string,
  numberPhone:number,
  email:string,
  licensePlate:string,
  district: string,
  postalCode:number,
  experience:string,
  recomends:string,
  driverlicense:number,
  payMethods: string
}
export interface Leaseholder {
  content:          userleaseholder[];
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

interface userleaseholder {
  id:            number;
  name:          string;
  lastName:      string;
  dni:           number;
  age:           number;
  address:       string;
  type:          string;
  imageProfile:  string;
  numberPhone:   number;
  email:         string;
  licensePlate:  string;
  district:      string;
  postalCode:    number;
  experience:    string;
  recomends:     string;
  password:      string;
  driverlicense: number;
  payMethods:    string;
}

interface Pageable {
  sort:       Sort;
  offset:     number;
  pageNumber: number;
  pageSize:   number;
  unpaged:    boolean;
  paged:      boolean;
}

interface Sort {
  empty:    boolean;
  sorted:   boolean;
  unsorted: boolean;
}
