const chai=require("chai");
const chaiHTTP=require("chai-http");
const expect=require("chai").expect;
chai.use(chaiHTTP);
const app=require("../index.js").app;
const url="http://localhost:3000";


describe ("Inserte nombre y precio",()=>{
    it("Esperamos un nombre y un precio",(done)=>{
        chai.request(url)
        .post("/api/v1/productos")
        .send({name:'Computer',price:2000})
        .end((err, res)=>{
            console.log(res.body)
            expect(res).to.have.status(200)
            done()
        })
    })
})


// describe ("Suite de pruebas e2e", ()=>{
//     it("esperamos un hola mundo",(done)=>{
//         chai.request("http://localhost:3000")
//             .get("/")
//             .end ((err, res)=>{
//                 console.log("A");
//                 chai.assert.equal(res.text, "Hola mundo");
//                 done();
//             })
//         console.log("B");
//     })
// })