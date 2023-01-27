export interface Country {
  name:         Name;
  tld:          string[];
  cca2:         string;
  ccn3:         string;
  cca3:         string;
  cioc?:        string;
  independent:  boolean;
  status:       Status;
  unMember:     boolean;
  currencies?:  Currencies;
  idd:          Idd;
  capital?:     string[];
  altSpellings: string[];
  region:       Region;
  subregion?:   string;
  languages:    { [key: string]: string };
  translations: Translations;
  latlng:       number[];
  landlocked:   boolean;
  borders?:     string[];
  area:         number;
  demonyms:     Demonyms;
  maps:         Maps;
  population:   number;
  gini?:        { [key: string]: number };
  car:          Car;
  timezones:    string[];
  continents:   Continent[];
  flags:        flag;
  coatOfArms:   CoatOfArms;
  startOfWeek:  StartOfWeek;
  capitalInfo:  CapitalInfo;
  postalCode?:  PostalCode;
  fifa?:        string;
}

export interface Translations{
  ara: translations
  bre: translations
  ces: translations
  cym: translations
  deu: translations
  est: translations
  fin: translations
  fra: translations
}

export interface translations{
  common: string
}

export interface flag{
  png: string
}

export interface CapitalInfo {
  latlng?: number[];
}

export interface Car {
  signs: string[];
  side:  Side;
}

export enum Side {
  Left = "left",
  Right = "right",
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export enum Continent {
  Africa = "Africa",
  Antarctica = "Antarctica",
  Asia = "Asia",
  Europe = "Europe",
  NorthAmerica = "North America",
  Oceania = "Oceania",
  SouthAmerica = "South America",
}

export interface Currencies {
  GBP?: Afn;
  AUD?: Afn;
  USD?: Afn;
  TWD?: Afn;
  JOD?: Afn;
  EUR?: Afn;
  MMK?: Afn;
  TZS?: Afn;
  MRU?: Afn;
  DZD?: Afn;
  MAD?: Afn;
  TRY?: Afn;
  KZT?: Afn;
  AFN?: Afn;
  IRR?: Afn;
  KMF?: Afn;
  PHP?: Afn;
  SHP?: Afn;
  BAM?: BAM;
  IQD?: Afn;
  XPF?: Afn;
  CHF?: Afn;
  INR?: Afn;
  GHS?: Afn;
  LSL?: Afn;
  ZAR?: Afn;
  DJF?: Afn;
  BMD?: Afn;
  SYP?: Afn;
  AMD?: Afn;
  PKR?: Afn;
  VND?: Afn;
  KES?: Afn;
  THB?: Afn;
  KHR?: Afn;
  LBP?: Afn;
  XCD?: Afn;
  SAR?: Afn;
  TJS?: Afn;
  SDG?: BAM;
  CNY?: Afn;
  SSP?: Afn;
  BSD?: Afn;
  SCR?: Afn;
  KRW?: Afn;
  CZK?: Afn;
  BHD?: Afn;
  UGX?: Afn;
  MVR?: Afn;
  GMD?: Afn;
  SOS?: Afn;
  ETB?: Afn;
  YER?: Afn;
  CLP?: Afn;
  MOP?: Afn;
  XAF?: Afn;
  MKD?: Afn;
  CDF?: Afn;
  HNL?: Afn;
  HKD?: Afn;
  ANG?: Afn;
  NZD?: Afn;
  LAK?: Afn;
  HTG?: Afn;
  BTN?: Afn;
  ALL?: Afn;
  BDT?: Afn;
  TND?: Afn;
  KPW?: Afn;
  HUF?: Afn;
  BWP?: Afn;
  JPY?: Afn;
  BND?: Afn;
  SGD?: Afn;
}

export interface Afn {
  name:   string;
  symbol: string;
}

export interface BAM {
  name: string;
}

export interface Demonyms {
  eng:  Eng;
  fra?: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Idd {
  root?:     string;
  suffixes?: string[];
}

export interface Maps {
  googleMaps:     string;
  openStreetMaps: string;
}

export interface Name {
  common:     string;
  official:   string;
  nativeName: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common:   string;
}

export interface PostalCode {
  format: string;
  regex?: string;
}

export enum Region {
  Africa = "Africa",
  Americas = "Americas",
  Antarctic = "Antarctic",
  Asia = "Asia",
  Europe = "Europe",
  Oceania = "Oceania",
}

export enum StartOfWeek {
  Monday = "monday",
  Saturday = "saturday",
  Sunday = "sunday",
}

export enum Status {
  OfficiallyAssigned = "officially-assigned",
}
