let UserDAO = require('../main/daos/UserDAO');

jest.mock('../main/models/USER', () => () => {
  const SequelizeMock = require("sequelize-mock");
  const dbMock = new SequelizeMock();
  return dbMock.define('user',  {
    userId: 2,
    emailId: 'xyz@abc.com',
    firstName: 'good',
    lastName: 'day',
    creTs: "2019-01-01 13:30:31",
    creUserId: 'dummy'
  })
});


describe("Test Sequelize Mocking", () => {  
  it("Should get value from mock", async () => {
    const user = await UserDAO.getOneUser();
    expect(user.firstName).toEqual('good');
  })
})
  