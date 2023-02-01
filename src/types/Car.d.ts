export type Car = {
  _id: number;
  mispar_rechev: string;
  tozeret_cd: string;
  sug_degem: string;
  tozeret_nm: string;
  degem_cd: string;
  degem_nm: string;
  ramat_gimur: string;
  ramat_eivzur_betihuty: string;
  kvutzat_zihum: string;
  shnat_yitzur: string;
  degem_manoa: string;
  mivchan_acharon_dt: string;
  tokef_dt: string;
  baalut: string;
  misgeret: string;
  tzeva_cd: string;
  tzeva_rechev: string;
  zmig_kidmi: string;
  zmig_ahori: string;
  sug_delek_nm: string;
  horaat_rishum: string;
  moed_aliya_lakvish: string;
  kinuy_mishari: string;
  rank: number;
};

export interface Res {
  result: {
    records: Car[];
  };
}

