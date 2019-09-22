interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  {
    name: 'Painel Gerencial',
    url: '/painel-gerencial',
    icon: 'icon-speedometer'
  }, 
  {
    title: true,
    name: ''
  },
  {
    name: 'Lançamentos',
    url: '/lancamentos',
    icon: 'icon-calculator'
  },
  {
    name: 'Agendamentos',
    url: '/agendamentos',
    icon: 'icon-calendar'
  },
  {
    name: 'Cartões de Crédito',
    url: '/cartoes',
    icon: 'icon-credit-card'
  },
  {
    name: 'Etiquetas',
    url: '/tags',
    icon: 'icon-cursor'
  },
  {
    name: 'Contatos',
    url: '/contatos',
    icon: 'icon-speech'
  },
  {
    name: 'Usuarios',
    url: '/usuarios',
    icon: 'icon-people'
  },
  {
    name: 'Relatório',
    url: '/relatorio',
    icon: 'icon-calculator'
  }
];
