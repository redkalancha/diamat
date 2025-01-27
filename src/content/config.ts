// 1. Импортируйте утилиты из astro:content
import { defineCollection } from 'astro:content';
// 2. Определите вашу коллекцию(и)
const blogCollection = defineCollection({ /* ... */ });
// 3. Экспортируйте единственный объект collections, чтобы зарегистрировать вашу коллекцию(и)
// Этот ключ должен совпадать с именем вашего каталога коллекций в "src/content"
export const collections = {
    'blog': blogCollection,
};