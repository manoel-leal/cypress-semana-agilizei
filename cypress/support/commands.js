// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('backgroundLogin', () => {
        // background login
        cy.setCookie(
            'PrestaShop-a30a9934ef476d11b6cc3c983616e364',
            'R6xmma6F4U6edNQuu67M0sms02MihwK4dgUJTsAaWAwkRnYh82ybiBZ63MqEVa9VjddGP4HPOpTLAYWEsGwd4WdcWORiSPtKF9CMiRsCJ%2FfFeufCHJ8LDlQfP9yOw0Y5juOngySqVqPC9IZPkVLzaCr%2FKggRktKyQtNQ2JrCIDg1xQmnDHs1etn%2BZpTHxtF%2B9CLtfP7NiPnPt0Wjmv2CHbXGVBPOB1%2BVTMMZ1c%2Fk1l1u%2B79PFpXHv0nQVovbB4YoRMmHez2z%2FO6scdN4ZhhYcCvVq4rlzrWZ5oZk8WxFP8yKL1HmjR3J2E%2BWyxRqlN3Tn4VqK0pE09TFxDMAGUtDaKa9S5s9tu8zg62nBIpmfEZ%2F1TYdQWS3hFufOsAdYqHSq1TQb2h7m53DZPmylKu78KYRonyINwpot2Z5K1MgApH71SnxPSo8%2BePwvyVK6MOZ000324'
        )
})
