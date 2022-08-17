export type Errors = {
  show: boolean;
  variant: string;
  message: {
    cname: string;
    cnumber: string;
    cexp: string;
    ccvv: string;
  };
  cname: boolean;
  cnumber: boolean;
  cexp: boolean;
  ccvv: boolean;
};
