describe("Petstore test api post-put-delete", () => {

  it("Create new user, get user", () => {
    let userID = 1111111
    let userName = "Maria"
    cy.request('POST', '/user', {
      id: userID,
      username: userName,
      firstName: "Maria",
      lastName: "Petrova",
      email: "maria@email.com",
      password: "maria",
      phone: "+79170000000",
      userStatus: 1
    }).then((response) => {
      expect(response.status).be.eql(200)
      expect(response.body.message).be.eql('1111111')
    })
  })

  it("Create new user, get user", () => {
      let userID = 12345678
      let userName = "PetrovI"
      cy.request('POST', '/user', {
        id: userID,
        username: userName,
        firstName: "Ivan",
        lastName: "Petrov",
        email: "email@email.com",
        password: "password",
        phone: "+79150000000",
        userStatus: 1
      }).then((response) => {
        expect(response.status).be.eql(200)
        expect(response.body.message).be.eql('12345678')
      })
      cy.request(`/user/${userName}`).then((response) => {
        expect(response.status).be.eql(200)
        expect(response.body).be.eql({
          id: userID,
          username: userName,
          firstName: "Ivan",
          lastName: "Petrov",
          email: "email@email.com",
          password: "password",
          phone: "+79150000000",
          userStatus: 1
        })
      })
    })
    
    it("Create new user, delete user", () => {
        let userID = 12345678
        let userName = "PetrovI"
        cy.request('POST', '/user', {
          id: userID,
          username: userName,
          firstName: "Ivan",
          lastName: "Petrov",
          email: "email@email.com",
          password: "password",
          phone: "+79150000000",
          userStatus: 1
        }).then((response) => {
          expect(response.status).be.eql(200)
          expect(response.body.message).be.eql('12345678')
          cy.request(`/user/${userName}`).then((response) => {
          expect(response.status).be.eql(200)
          })
           cy.request({
            method: 'DELETE',
            url: `/user/${response.body.userName}`,
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).be.eql(404)
          })
          cy.request({
            method: 'DELETE',
            url: `/user/${userName}`,
          }).then((response) =>
            expect(response.body.code).be.eql(200))
        })
  })
})
