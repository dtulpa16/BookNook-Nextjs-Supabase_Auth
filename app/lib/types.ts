// Cars Example Type
export type Car = {
  id: string;
  make: string;
  model: string;
  year: number;
};





//Google Books API Response types - Do not modify! -------------------------------------
export type GoogleBooksApiResponse = {
  items: BookVolume[];
};

export type BookVolume = {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: VolumeInfo;
  saleInfo: SaleInfo;
  accessInfo: AccessInfo;
  searchInfo: SearchInfo;
};

export type VolumeInfo = {
  title: string;
  authors: string[];
  publisher: string;
  publishedDate: string;
  description: string;
  industryIdentifiers: IndustryIdentifier[];
  readingModes: ReadingModes;
  pageCount: number;
  printType: string;
  categories: string[];
  averageRating: number;
  ratingsCount: number;
  maturityRating: string;
  allowAnonLogging: boolean;
  contentVersion: string;
  panelizationSummary: PanelizationSummary;
  imageLinks: ImageLinks;
  language: string;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
};

type IndustryIdentifier = {
  type: string;
  identifier: string;
};

type ReadingModes = {
  text: boolean;
  image: boolean;
};

type PanelizationSummary = {
  containsEpubBubbles: boolean;
  containsImageBubbles: boolean;
};

type ImageLinks = {
  smallThumbnail: string;
  thumbnail: string;
};

type SaleInfo = {
  country: string;
  saleability: string;
  isEbook: boolean;
};

type AccessInfo = {
  country: string;
  viewability: string;
  embeddable: boolean;
  publicDomain: boolean;
  textToSpeechPermission: string;
  epub: EpubPdfInfo;
  pdf: EpubPdfInfo;
  webReaderLink: string;
  accessViewStatus: string;
  quoteSharingAllowed: boolean;
};

type EpubPdfInfo = {
  isAvailable: boolean;
  acsTokenLink?: string;
};

type SearchInfo = {
  textSnippet: string;
};
