import { observable, action, configure } from 'mobx';

configure({ enforceActions: 'observed' });

class UserStore {
  @observable
  users = [
    {
      id: 100,
      name: 'bhavin'
    }
  ];

  @action
  changeUser(data) {
    this.users = data;
  }
}

export default new UserStore();
