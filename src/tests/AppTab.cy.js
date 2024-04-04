import AppTab from '@/components/atoms/AppTab.vue'

const periods = [
  { label: 'Hoje', type: 'day' },
  { label: 'Nesta semana', type: 'week' }
]

it('renders a component app-tab', () => {
  cy.mount(AppTab, {
    props: {
      modelValue: 0,
      options: periods
    }
  }).then(({ wrapper }) => {
    cy.get('button').click({ multiple: true })
    cy.then(() => {
      expect(wrapper.emitted()['update:modelValue'][0]).to.deep.eq([0])
    })
  })
})
