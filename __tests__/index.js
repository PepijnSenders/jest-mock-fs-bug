const fs = require('fs');
const mockFS = require('mock-fs');

describe('jest-mock-fs-bug', () => {

    it('should break', () => {
        mockFS({
            'someFile.yml': 'test',
        });

        expect(fs.readFileSync('someFile.yml').toString()).toBe('test');
    });

});
