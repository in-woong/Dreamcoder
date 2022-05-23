const UserService = require('../user_service.js');
const UserClient = require('../user_client.js');
jest.mock('../user_client');

describe('UserService', () => {
  const login = jest.fn(
    async () => [
      { id: 'inwoong', password: '1234', name: 'inwoong', isLogedIn: false },
    ]
    //success
  );
  UserClient.mockImplementation(() => {
    return { login };
  });

  let userService;
  beforeEach(() => {
    userService = new UserService();
  });
  it('calls login() on UserClient when tries to login', async () => {
    await userService.login('abc', 'abc');
    expect(login.mock.calls.length).toBe(1);
  });

  it('should not call login() on UserClient again if already logged in', async () => {
    await userService.login('abc', 'abc');
    await userService.login('abc', 'abc');

    expect(login.mock.calls.length).toBe(1);
  });
});
