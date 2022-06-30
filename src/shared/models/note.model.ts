import { IFolder } from 'shared/models/folder.model';
import { ITag } from 'shared/models/tag.model';

export enum ModeNoteEnum {
  WRITE = 'write',
  VIEW = 'view',
  SPLIT = 'split',
}

export type INote = {
  title: string;
  lastModified: string;
  tags?: ITag[];

  pinned?: boolean;
  favorite?: boolean;

  content: string;

  folder: IFolder;
};
