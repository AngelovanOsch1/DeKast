export interface user {
  name: string;
  email: string;
  telephoneNumber: string;
  role: string;
}

export interface userInformation {
  birthYear: Date;
  firstName: string;
  lastName: string;
  gender?: string;
  postal: string;
  houseNumber: string;
  addendum: boolean;
  subscription: string;
}

export interface bankDetails {
  ibanNumber: string;
}

export interface courses {
  teacherName: string;
  attendanceList: [
    {
      userid: Map<string, any>;
    }
  ];
}

export interface appointment {
  name: string;
  email: string;
  telephoneNumber: string;
  startDate: Date;
  endDate: Date;
}
