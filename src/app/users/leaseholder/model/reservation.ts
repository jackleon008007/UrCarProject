export interface Reservation {
  id:number;
  title:string;
  price:number;
  postId:number;
  lessorId: number;
  leaseHolderId:number;
}

export interface Reservation {
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
  id:            number;
  title:         string;
  price:         number;
  leaseHolderId: number;
  lessorId:      number;
}

interface Pageable {
  sort:       Sort;
  offset:     number;
  pageSize:   number;
  pageNumber: number;
  paged:      boolean;
  unpaged:    boolean;
}

interface Sort {
  empty:    boolean;
  unsorted: boolean;
  sorted:   boolean;
}
