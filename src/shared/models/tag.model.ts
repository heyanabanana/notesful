import { INote } from 'shared/models/note.model';

export type ITag = {
  name: string;
  notes?: INote[];
};
