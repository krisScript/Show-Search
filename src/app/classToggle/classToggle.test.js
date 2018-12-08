import classToggle from './classToggle';
describe('classToggle',() => {
    document.body.innerHTML = '<button class="target-btn"></button>'
    const targetBtn = document.querySelector('.target-btn');
    beforeAll(() => {
        classToggle(targetBtn,'target')
    })
    it("should add target class if targetBtn dosn't have it",() => {
        expect(targetBtn.className).toBe('target-btn target')
    })
    it('should remove target class if targetBtn has it',() => {
        targetBtn.classList.add('target');
        classToggle(targetBtn,'target')
        expect(targetBtn.className).toBe('target-btn')
    })
})