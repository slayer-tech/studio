import type { User, Post, Question, Tag } from './types';
import { TOPICS } from './constants';
import { PlaceHolderImages } from './placeholder-images';

const users: User[] = [
  { id: 'u1', name: 'Алексей Петров', avatarUrl: PlaceHolderImages.find(p => p.id === 'avatar1')?.imageUrl || '', title: 'Full Stack разработчик' },
  { id: 'u2', name: 'Елена Смирнова', avatarUrl: PlaceHolderImages.find(p => p.id === 'avatar2')?.imageUrl || '', title: 'UI/UX дизайнер' },
  { id: 'u3', name: 'Сэм Уилсон', avatarUrl: PlaceHolderImages.find(p => p.id === 'avatar3')?.imageUrl || '', title: 'DevOps инженер' },
  { id: 'u4', name: 'Мария Гарсия', avatarUrl: PlaceHolderImages.find(p => p.id === 'avatar4')?.imageUrl || '', title: 'Менеджер по продукту' },
];

const tags: Tag[] = [
  { id: 'tag1', name: 'react' },
  { id: 'tag2', name: 'typescript' },
  { id: 'tag3', name: 'nextjs' },
  { id: 'tag4', name: 'tailwind' },
  { id: 'tag5', name: 'figma' },
  { id: 'tag6', name: 'ai' },
];

export const posts: Post[] = [
  {
    id: 'p1',
    title: 'Будущее веб-разработки с Next.js 15',
    content: 'Next.js 15 предлагает множество новых функций, которые изменят то, как мы создаем веб-приложения. От улучшенной производительности до новых API, эта версия — настоящий прорыв для React-разработчиков...',
    imageUrl: PlaceHolderImages.find(p => p.id === 'postImage1')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(p => p.id === 'postImage1')?.imageHint,
    createdAt: '2 дня назад',
    author: users[0],
    topic: TOPICS[1], // Программирование
    tags: [tags[0], tags[2], tags[3]],
    stats: {
      likes: 128,
      views: 4500,
      comments: 32,
    },
  },
  {
    id: 'p2',
    title: 'Проектирование для доступности: полное руководство',
    content: 'Доступность — это не второстепенная задача. В этом посте мы исследуем основные принципы доступного дизайна и даем практические советы по созданию инклюзивного пользовательского опыта в Figma и за ее пределами.',
    imageUrl: PlaceHolderImages.find(p => p.id === 'postImage2')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(p => p.id === 'postImage2')?.imageHint,
    createdAt: '5 дней назад',
    author: users[1],
    topic: TOPICS[2], // Дизайн
    tags: [tags[4]],
    stats: {
      likes: 95,
      views: 2800,
      comments: 15,
    },
  },
  {
    id: 'p3',
    title: 'Генеративный ИИ делает еще один шаг вперед',
    content: 'Сегодня было объявлено о новом прорыве в области генеративного ИИ, который обещает ускорить развитие в различных областях. Модель демонстрирует невероятные возможности в генерации кода и понимании естественного языка.',
    imageUrl: PlaceHolderImages.find(p => p.id === 'postImage3')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(p => p.id === 'postImage3')?.imageHint,
    createdAt: '1 день назад',
    author: users[3],
    topic: TOPICS[0], // Новости
    tags: [tags[5]],
    stats: {
      likes: 256,
      views: 8900,
      comments: 78,
    },
  },
  {
    id: 'p4',
    title: 'Навигация по карьерному пути в IT',
    content: 'IT-индустрия постоянно развивается. Как оставаться востребованным и развивать свою карьеру? В этом посте обсуждаются стратегии непрерывного обучения, нетворкинга и поиска своей ниши.',
    imageUrl: PlaceHolderImages.find(p => p.id === 'postImage4')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(p => p.id === 'postImage4')?.imageHint,
    createdAt: '1 неделю назад',
    author: users[2],
    topic: TOPICS[3], // Карьера
    tags: [],
    stats: {
      likes: 72,
      views: 1500,
      comments: 21,
    },
  },
];

export const questions: Question[] = [
    {
        id: 'q1',
        title: 'Как правильно управлять состоянием в крупных React-приложениях?',
        content: 'Я работаю над большим проектом и борюсь с пробросом пропсов и сложной логикой состояния. Я рассмотрел Redux, Zustand и Context API, но не уверен, что из этого лучше всего подходит. Каковы плюсы и минусы каждого в современной среде React (с хуками)?',
        createdAt: '3 часа назад',
        author: users[0],
        tags: [tags[0], tags[1]],
        stats: {
            votes: 15,
            answers: 4,
            views: 250,
        },
    },
    {
        id: 'q2',
        title: 'Каковы лучшие практики адаптивного дизайна в Tailwind CSS?',
        content: 'Я обнаружил, что пишу много адаптивных служебных классов, таких как `md:`, `lg:` и т. д. Есть ли более эффективный способ структурировать мои компоненты, чтобы они были по своей сути адаптивными? Как вы подходите к дизайну mobile-first с Tailwind?',
        createdAt: '1 день назад',
        author: users[1],
        tags: [tags[3], tags[4]],
        stats: {
            votes: 8,
            answers: 2,
            views: 450,
        },
    }
];

export const getPosts = async () => {
    return posts;
}

export const getQuestions = async () => {
    return questions;
}
