const fs = require('fs');
const mockFS = require('mock-fs');

describe('jest-mock-fs-bug', () => {

    it('should break', () => {
        mockFS({
            ['/test/someFile.yml']: 'test',
        });

        expect(fs.readFileSync('/test/someFile.yml').toString()).toBe('test');
    });

    afterEach(() => {
        // If this one is not called the weird bug shows
        // mockFS.restore();
    });

});
