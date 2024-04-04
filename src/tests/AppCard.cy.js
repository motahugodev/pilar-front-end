import { mount } from 'cypress/vue'
import AppCard from '@/components/atoms/AppCard.vue'

it('renders a component app-card', () => {
  mount(AppCard, {
    props: {
      title: 'Rei Leão',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
      image: 'https://br.web.img3.acsta.net/pictures/19/05/07/20/54/2901026.jpg'
    }
  })
})
