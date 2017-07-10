let isSymmetric = require('../checkForSymetry').isSymmetric;

let expect = require('chai').expect;

describe("Check for symetry tests.", function () {
    it("Non array input should return false.", function () {
        expect(isSymmetric('pesho')).to.be.false;
    });

    it("[1,2,1] should return true.", function () {
        expect(isSymmetric([1, 2, 1])).to.be.true;
    });

    it("[1] should return true.", function () {
        expect(isSymmetric([1])).to.be.true;
    });

    it("[1,2,2,1] should return true.", function () {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    });

    it("[] should return true.", function () {
        expect(isSymmetric([])).to.be.true;
    });

    it("[1,2,3,1] should return false.", function () {
        expect(isSymmetric([1, 2, 3, 1])).to.be.false;
    });

    it("[1,'pesho','pesho',1] should return true.", function () {
        expect(isSymmetric([1,'pesho','pesho',1])).to.be.true;
    });

    describe("Check for symetry tests.", function () {
        it("Non array input should return false.", function () {
            expect(isSymmetric('pesho')).to.be.false;
        });

        it("[1,2,1] should return true.", function () {
            expect(isSymmetric([1, 2, 1])).to.be.true;
        });

        it("[1] should return true.", function () {
            expect(isSymmetric([1])).to.be.true;
        });

        it("[1,2,2,1] should return true.", function () {
            expect(isSymmetric([1, 2, 2, 1])).to.be.true;
        });

        it("[] should return true.", function () {
            expect(isSymmetric([])).to.be.true;
        });

        it("[1,2,3,1] should return false.", function () {
            expect(isSymmetric([1, 2, 3, 1])).to.be.false;
        });

        it("[5,'hi',{a:5},new Date(),{a:5},'hi',5] should return true", function() {
            let symmetric = isSymmetric([5,'hi',{a:5},new Date(),{a:5},'hi',5] );
            expect(symmetric).to.be.equal(true);
        });
    });
});