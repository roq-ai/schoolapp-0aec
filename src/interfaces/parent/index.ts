import { UserInterface } from 'interfaces/user';
import { StudentInterface } from 'interfaces/student';
import { GetQueryInterface } from 'interfaces';

export interface ParentInterface {
  id?: string;
  user_id?: string;
  student_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  student?: StudentInterface;
  _count?: {};
}

export interface ParentGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  student_id?: string;
}
