import {transform} from "../src/romanizer";

describe('romanizer', () => {
    it('should return X', () => {
        const result = transform(10);

        expect(result).toEqual("X");
    });

});