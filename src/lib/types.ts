export type User = {
  id: string;
  name: string;
  avatarUrl: string;
  title: string;
};

export type Topic = {
  id: string;
  name: string;
  slug: string;
  description: string;
};

export type Tag = {
  id: string;
  name: string;
};

export type Post = {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
  imageHint?: string;
  createdAt: string;
  author: User;
  topic: Topic;
  tags: Tag[];
  stats: {
    likes: number;
    views: number;
    comments: number;
  };
};

export type Question = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  author: User;
  tags: Tag[];
  stats: {
    votes: number;
    answers: number;
    views: number;
  };
};

export type Answer = {
  id: string;
  questionId: string;
  content: string;
  createdAt: string;
  author: User;
  votes: number;
};
