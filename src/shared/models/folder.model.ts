import { INote } from 'shared/models/note.model';

export type IFolder = {
  name: string;
  notes?: INote[];
};
