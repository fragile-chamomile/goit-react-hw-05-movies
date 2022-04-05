# React homework template

Этот проект был создан при помощи
[Create React App](https://github.com/facebook/create-react-app). Для знакомства
и настройки дополнительных возможностей
[обратись к документации](https://facebook.github.io/create-react-app/docs/getting-started).

## Подготовка нового проекта

1. Убедись что на компьютере установлена LTS-версия Node.js.
   [Скачай и установи](https://nodejs.org/en/) её если необходимо.
2. Склонируй этот репозиторий.
3. Измени имя папки с `react-homework-template` на имя своего проекта.
4. Создай новый пустой репозиторий на GitHub.
5. Открой проект в VSCode, запусти терминал и свяжи проект с GitHub-репозиторием
   [по инструкции](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories#changing-a-remote-repositorys-url).
6. Установи базовые зависимости проекта командой `npm install`.
7. Запусти режим разработки, выполнив команду `npm start`.
8. Перейди в браузере по адресу [http://localhost:3000](http://localhost:3000).
   Эта страница будет автоматически перезагружаться после сохранения изменений в
   файлах проекта.

## Деплой
1. Создаём файл `netlify.toml` с настройками.
2. В терминале прописываем `npm install netlify-cli -g`
3. Далее выполняем команду `netlify login`, чтобы получить права доступа работы со своим Netlify-аккаунтом через терминал. В браузере откроется вкладка, где необходимо подтвердить авторизацию. Подтверждаем и закрываем вкладку. В терминале видно, что пользователь залогинился и получил необходимые права доступа.
4. Далее в файле `package.json` добавим npm-скрипты для деплоя, чтобы гн писать команды каждый раз вручную.
5. Если в файле `package.json` осталось свойство `homepage`, это свойство необходимо удалить.
6. Нажимаем `npm run deploy`. Вручную делаем настройки
7. Перейти по созданной ссылке можно вручную или использовать команду `netlify open --site`
