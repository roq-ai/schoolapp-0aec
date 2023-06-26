import { StudentInterface } from 'interfaces/student';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface RenamedclassInterface {
  id?: string;
  name: string;
  teacher_id?: string;
  created_at?: any;
  updated_at?: any;
  student?: StudentInterface[];
  user?: UserInterface;
  _count?: {
    student?: number;
  };
}

export interface RenamedclassGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  teacher_id?: string;
}
