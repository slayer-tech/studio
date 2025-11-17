import type { Topic } from './types';

export const TOPICS: Topic[] = [
  { id: 't1', name: 'Новости', slug: 'news', description: 'Последние новости из мира технологий.' },
  { id: 't2', name: 'Программирование', slug: 'programming', description: 'Обсуждения кода, алгоритмов и фреймворков.' },
  { id: 't3', name: 'Дизайн', slug: 'design', description: 'Все о UI/UX, графике и эстетике.' },
  { id: 't4', name: 'Карьера', slug: 'career', description: 'Советы по карьере, вакансии и профессиональный рост.' },
  { id: 't5', name: 'Офф-топик', slug: 'off-topic', description: 'Для всего остального.' },
];
