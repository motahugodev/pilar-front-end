import AppInput from '@/components/atoms/AppInput.vue'

it('renders a component app-input', () => {
  cy.mount(AppInput, {
    props: {
      modelValue: 'Rei Leão',
      disabled: false,
      value: 'Rei Leão'
    }
  }).then(({ wrapper }) => {
    cy.get('button').click()
    cy.then(() => {
      expect(wrapper.emitted('search')).to.have.length
      expect(wrapper.emitted('search')[0][0]).to.deep.eq()
    })

    cy.get('input').click()
    cy.then(() => {
      expect(wrapper.emitted('update:modelValue')).to.have.length
    })
  })
})
