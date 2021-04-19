export interface IActivesProps {
  id: number;
  sensors: Array<string>;
  model: string;
  status: string;
  healthscore: number;
  name: string;
  image: string;
  metrics: {
    totalCollectsUptime: number;
    totalUptime: number;
    lastUptimeAt: string;
  };
  specifications: {
    maxTemp: number;
    rpm: number | null;
    power: number;
  };
  unitId: number;
  companyId: number;
}

export interface ICompaniesProps {
  id: number;
  name: string;
}
export interface IUnitsProps {
  id: number;
  name: string;
  companyId: number;
}
export interface IUsersProps {
  id: number;
  email: string;
  name: string;
  unitId: number;
  companyId: number;
}
