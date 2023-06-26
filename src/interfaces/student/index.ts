import { ParentInterface } from 'interfaces/parent';
import { RenamedclassInterface } from 'interfaces/renamedclass';
import { GetQueryInterface } from 'interfaces';

export interface StudentInterface {
  id?: string;
  first_name: string;
  last_name: string;
  class_id?: string;
  created_at?: any;
  updated_at?: any;
  parent?: ParentInterface[];
  Renamedclass?: RenamedclassInterface;
  _count?: {
    parent?: number;
  };
}

export interface StudentGetQueryInterface extends GetQueryInterface {
  id?: string;
  first_name?: string;
  last_name?: string;
  class_id?: string;
}
