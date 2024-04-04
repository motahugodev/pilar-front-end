import AppButton from '@/components/atoms/AppButton.vue'

it('renders a component app-button', () => {
  cy.mount(AppButton, {
    slots: {
      default: 'Click !'
    }
  })
})
