import { IMenu } from '../../models';

export const MENUSIDE: IMenu[] = [
  {
    title: 'Tours',
    isActive: false,
    url: 'tour-management/',
    subMenu: [
      {
        name: 'Create Tour',
        subUrl: 'create',
        isActive: false,
      },
      {
        name: 'List',
        subUrl: 'list',
        isActive: false,
      }
    ]
  },
  {
    title: 'User',
    isActive: false,
    url: 'user-management/',
    subMenu: [
      {
        name: 'Create User',
        subUrl: 'create',
        isActive: false
      },
      {
        name: 'List',
        subUrl: 'list',
        isActive: false,
      }
    ]
  }
]
