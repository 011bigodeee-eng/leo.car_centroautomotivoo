export const business = {
  name: 'Leo Car Centro Automotivo',
  phone: '(16) 99708-7189',
  whatsapp: '5516997087189',
  address: 'Rua Manoel José Pires, 30',
  city: 'Américo Brasiliense — SP',
  hours: ['Segunda a sexta · 9h às 18h', 'Sábado · 9h às 12h'],
  instagram: 'https://www.instagram.com/leo.car_centroautomotivo/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Rua+Manoel+José+Pires+30+Américo+Brasiliense+SP',
  // Supplied in the project brief. Confirm with the business before publication.
  verified: false,
};
export const whatsapp = (message = 'Olá, equipe Leo Car! Gostaria de solicitar um orçamento para meu veículo.') =>
  `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
export const services = [
  { title: 'Mecânica geral', short: 'Mecânica geral', image: '/images/premium/service-1.webp', description: 'Seu carro merece atenção em cada detalhe. Converse com a nossa equipe sobre os cuidados e a manutenção que ele precisa.', detail: 'CUIDADO DE VERDADE. DO MOTOR AOS DETALHES.' },
  { title: 'Câmbio automático', short: 'Câmbio automático', image: '/images/premium/service-2.webp', description: 'Conheça o atendimento da Leo Car para troca de óleo do câmbio automático. Consulte a equipe sobre as necessidades do seu veículo.', detail: 'ATENÇÃO ESPECIAL PARA CADA TROCA.' },
  { title: 'Suspensão', short: 'Suspensão', image: '/images/premium/service-3.webp', description: 'Barulhos ou desconforto ao dirigir? Conte o que está acontecendo e consulte o atendimento para a suspensão do seu carro.', detail: 'O CUIDADO TAMBÉM ESTÁ NO CAMINHO.' },
  { title: 'Alinhamento e balanceamento', short: 'Alinhamento e balanceamento', image: '/images/premium/service-4.webp', description: 'Converse sobre alinhamento e balanceamento e informe os sinais que você percebe ao dirigir.', detail: 'CADA TRAJETO COMEÇA COM ATENÇÃO.' },
  { title: 'Freios', short: 'Freios', image: '/images/premium/service-5.webp', description: 'O sistema de freios pede atenção. Solicite informações sobre a avaliação e os cuidados disponíveis para seu veículo.', detail: 'ATENÇÃO AO QUE É ESSENCIAL.' },
  { title: 'Troca de óleo do motor', short: 'Troca de óleo', image: '/images/premium/service-6.webp', description: 'Está na hora da troca de óleo? Informe o modelo e o ano do seu carro para conversar com a equipe sobre o serviço.', detail: 'MANUTENÇÃO QUE FAZ PARTE DA ROTINA.' },
  { title: 'Revisão automotiva', short: 'Revisão automotiva', image: '/images/premium/service-7.webp', description: 'Antes da próxima viagem ou na manutenção de rotina, converse com a Leo Car sobre a revisão do seu veículo.', detail: 'UM OLHAR ATENTO PARA SEGUIR EM FRENTE.' },
  { title: 'Limpeza de bicos', short: 'Limpeza de bicos', image: '/images/premium/service-8.webp', description: 'Saiba mais sobre o serviço de limpeza de bicos. Conte os sintomas do veículo para iniciar o atendimento.', detail: 'OS PEQUENOS DETALHES TAMBÉM IMPORTAM.' },
];
export const gallery = [
  { src: '/images/premium/workshop.webp', label: 'O ambiente', className: 'wide' },
  { src: '/images/premium/service-1.webp', label: 'Olhar técnico', className: '' },
  { src: '/images/premium/service-5.webp', label: 'Cada detalhe', className: '' },
  { src: '/images/premium/service-6.webp', label: 'Cuidado em movimento', className: 'wide' },
];
