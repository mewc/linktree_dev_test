const expect = require('chai').expect;
const config = require('config');
const request = require('supertest');
const server = require('../src/app.js');
const testSpecs = require('./app.test.specs');
const debug = require('debug')('server:debug')

describe('Server', () => {
    it('tests that server is running current port', async () => {
        expect(server.port).to.equal(config.get('port'))
    })
});

describe('Link types active', () => {
    it('tests the correct link types are active', async () => {
        const activeLinks = require('../src/config/links');
        expect(JSON.stringify(config.activeLinks)).to.equal(JSON.stringify(activeLinks));
    });

})

describe('GET /link:uuid', () => {
    it('should return all active links for valid user', (done) => {
        request(server)
            .get(`/link/${testSpecs.validUid}`)
            .set('Accept', 'application/json')

            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                // debug(res.body);
                expect(res.body).to.have.property("tree");
                expect(res.body).to.have.property("email");
                expect(res.body).to.have.property("joinDate");
                if (Array.isArray(res.body.tree) && res.body.tree.length > 0) done();
                else done(new Error('tree is not present'));
            });
    })
    it('should return empty for invalid user', (done) => {
        request(server)
            .get(`/link/${testSpecs.invalidUid}`)
            .set('Accept', 'application/json')

            .expect(404)
            .end(function (err, res) {
                // debug(res.error);
                expect(res.error).to.have.property('status');
                expect(res.error.status).to.equal(404);
                const errText = JSON.parse(res.error.text);
                expect(errText.message).to.equal(`Tree for user @${testSpecs.invalidUid} is not found`)
                done();
            });
    })
    it('should return sorted active links for user', (done) => {
        request(server)
            .get(`/link/${testSpecs.validUid}?sort`)
            .set('Accept', 'application/json')

            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                const sortedTree = res.body.tree.sort((a, b) => {
                    // return new Date(a.dateCreated) - new Date(b.dateCreated); //descending
                    return new Date(b.dateCreated) - new Date(a.dateCreated); //ascending
                });
                const alreadySorted = (JSON.stringify(res.body.tree) === JSON.stringify(sortedTree));
                expect(alreadySorted).to.be.true;
                done();
            });
    })
})

describe('POST /link', () => {
    describe('COMMON TESTS', () => {
        it('should not accept links with titles > 144 chars', (done) => {
            request(server)
                .post('/link')
                .set('Accept', 'application/json')
                .set('Content-Type', 'application/json')
                .send(testSpecs.longTitleLink)

                .expect(422)
                .end(function (err, res) {
                    if (err) return done(err);
                    expect(res.error.text).includes("is longer than the maximum allowed length (144)");
                    done();
                });
        })
        it('should accept links with titles < 144 chars', (done) => {
            request(server)
                .post('/link')
                .send(testSpecs.shortTitleLink)
                .set('Accept', 'application/json')
                .expect(200)
                .end(function (err, res) {
                    if (err) return done(err);
                    done();
                });
        })
        it('should reject invalid link types', (done) => {
            request(server)
                .post('/link')
                .set('Accept', 'application/json')
                .send(testSpecs.invalidLinkType)
                .expect(422)
                .end(function (err, res) {
                    if (err) return done(err);
                    expect(res.error.text).includes(`Link type ${testSpecs.invalidLinkType.type} is not a valid link type`)
                    done();
                });
        })
    });

    describe('CLASSIC LINKS', () => {
        it('should accept a valid link format', (done) => {
            request(server)
                .post('/link')
                .send(testSpecs.classic.validLink)
                .set('Accept', 'application/json')

                .expect(200)
                .end(function (err, res) {
                    if (err) return done(err);
                    done();
                });
        })
        it('should reject an invalid link format', (done) => {
            request(server)
                .post('/link')
                .send(testSpecs.classic.invalidLink)
                .set('Accept', 'application/json')
                .expect(422)
                .end(function (err, res) {
                    if (err) return done(err);
                    expect(res.error.text).to.include(`ClassicLink validation failed: link: Path`)
                    done();
                });
        })
    });
    describe('SHOWS LINKS', () => {
        it('should accept a valid link format', (done) => {
            request(server)
                .post('/link')
                .send(testSpecs.shows.validLink)
                .set('Accept', 'application/json')
                
                .expect(200)
                .end(function (err, res) {
                    if (err) return done(err);
                    done();
                });
        })
        it('should reject an invalid link format', (done) => {
            request(server)
                .post('/link')
                .send(testSpecs.shows.invalidLink)
                .set('Accept', 'application/json')
                
                .expect(200)
                .end(function (err, res) {
                    if (err) return done(err);
                    done();
                });
        })
        it('should accept supported show platforms', (done) => {
            request(server)
                .post('/link')
                .send(testSpecs.shows.supportedShowLink)
                .set('Accept', 'application/json')
                
                .expect(200)
                .end(function (err, res) {
                    if (err) return done(err);
                    done();
                });
        })
        it('should reject unsupported show platforms', (done) => {
            request(server)
                .post('/link')
                .send(testSpecs.shows.unsupportedShowLink)
                .set('Accept', 'application/json')
                
                .expect(200)
                .end(function (err, res) {
                    if (err) return done(err);
                    done();
                });
        })
        it('should detect a show is sold out', (done) => {
            //take link in, make mock call and parse result
            request(server)
                .post('/link')
                .send(testSpecs.shows.supportedShowLinkForSoldout)
                .set('Accept', 'application/json')
                
                .expect(200)
                .end(function (err, res) {
                    if (err) return done(err);
                    done();
                });
        })
        it('should detect a show still has tickets available', (done) => {
            //take link in, make mock call and parse result
            request(server)
                .post('/link')
                .send(testSpecs.shows.supportedShowLinkForHasTickets)
                .set('Accept', 'application/json')
                
                .expect(200)
                .end(function (err, res) {
                    if (err) return done(err);
                    done();
                });
        })
    });
    // describe('MUSIC LINKS', () => {
    //     it('should accept a valid link format', (done) => {
    //         request(server)
    //             .post('/link')
    //             .send(testSpecs.music.validLink)
    //             .set('Accept', 'application/json')
    //             
    //             .expect(200)
    //             .end(function (err, res) {
    //                 if (err) return done(err);
    //                 done();
    //             });
    //     })
    //     it('should reject an invalid link format', (done) => {
    //         request(server)
    //             .post('/link')
    //             .send(testSpecs.music.invalidLink)
    //             .set('Accept', 'application/json')
    //             
    //             .expect(200)
    //             .end(function (err, res) {
    //                 if (err) return done(err);
    //                 done();
    //             });
    //     })
    //     it('should accept supported music platforms', (done) => {
    //         request(server)
    //             .post('/link')
    //             .send(testSpecs.music.invalidLink)
    //             .set('Accept', 'application/json')
    //             
    //             .expect(200)
    //             .end(function (err, res) {
    //                 if (err) return done(err);
    //                 done();
    //             });
    //     })
    //     it('should reject unsupported music platforms', (done) => {
    //         request(server)
    //             .post('/link')
    //             .send(testSpecs.music.invalidLink)
    //             .set('Accept', 'application/json')
    //             
    //             .expect(200)
    //             .end(function (err, res) {
    //                 if (err) return done(err);
    //                 done();
    //             });
    //     })
    //     it('should process and return the embed player resource link', (done) => {
    //         request(server)
    //             .post('/link')
    //             .send(testSpecs.music.invalidLink)
    //             .set('Accept', 'application/json')
    //             
    //             .expect(200)
    //             .end(function (err, res) {
    //                 if (err) return done(err);
    //                 done();
    //             });
    //     })
    // });
})
