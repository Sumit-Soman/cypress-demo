class Settings {
    get title() { return '.container h1'}
    get imageField() { return '[ng-model="$ctrl.formData.image"]'}
    get usernameField() { return '[ng-model="$ctrl.formData.username"]'}
    get bioField() { return '[ng-model="$ctrl.formData.bio"]'}
    get emailField() { return '[ng-model="$ctrl.formData.email"]'}
    get passwordField() { return '[ng-model="$ctrl.formData.password"]'}
    get submitButton() { return 'button[type="submit"]'}
    get logoutButton() { return 'button[ng-click="$ctrl.logout()"]'}
    get errorMessages() { return '.error-messages'}
    get savedBio() {return '[ng-bind*="profile.bio"]'}
    get image() {return '.user-info img'}
    
    updateUserInfo(info) {
        this.updateUsername(info.username)
            .updateBio(info.bio)
            .updateEmail(info.emailId)
            .updateNewPwd(info.password)
            .submit()
    }

    updateUsername() {
        cy.get(this.usernameField).clear().type(info.username)
        return this;
    }

    updateBio(bioField) {
        cy.get(this.bioField).clear().type(bioField)
        return this;
    }

    updateEmail(email) {
        cy.get(this.email).clear().type(email)
        return this
    }

    updateNewPwd(pwd) {
        cy.get(this.passwordField).clear().type(pwd)
        return this;
    }

    updateLogo(logoLink) {
        cy.get(this.imageField).clear().type(logoLink)
        return this
    }

    submit() {
        cy.get(this.submitButton).click()
        return this
    }

    clearFields() {
        cy.get(this.usernameField).clear()
        cy.get(this.emailField).clear()
        cy.get(this.submitButton).click()
        return this
    }
}

export default new Settings;

