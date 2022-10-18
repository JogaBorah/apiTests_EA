/// <reference types="cypress"/>

import eafestivalschema from "../../fixtures/eaFestivalsSchema.json"
import TestFilter from "../../support/TestFilter"
import "../../support/getFestivals"
import Ajv from "ajv"
const ajv = new Ajv()

TestFilter(["reg","api","all"], ()=>{
    describe("[API] Test for the Festivals API", () =>{
        before(()=>{
            cy.clearCookies({domain: null});
            cy.clearLocalStorage({domain: null});
        });

        it("JSON response schema should be valid",()=>{
            cy.getFestivalsDetails().then((resp)=>{
                cy.fixture('eaFestivalsSchema').then((eaFestivalsSchema)=>{
                    const validateSchema = ajv.compile(eaFestivalsSchema)
                    const isValid = validateSchema(resp)
                    expect(isValid).to.be.true

                })
            })
        })

        it("Response status should be 200 for successful get request on Festivals API",()=>{
            cy.getFestivalsDetails().then((resp)=>{
                    expect(resp.status).to.eq(200)

            })
        })
        it("Response should have at least 1 Festival in the API get request",()=>{
            cy.getFestivalsDetails().then((resp)=>{
                expect(resp.body.length).to.be.gt(0)

            })
        })


    })

})
