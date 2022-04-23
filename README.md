# Тестовое задание для [Profilance Group](https://profilancegroup.com/).

## Техническое задание

Написать SPA с использованием React, Redux, SCSS и БЭМ.\
В приложении должна быть страница приветствия, а также страница новостей. На странице новостей должны отображаться новости и иметься возможность отфильтровать новости по названию/содержанию.\
Также должны быть три типа "пользователей" приложения - Пользователь, Админ, Гость.\
Пользователь может создать новость (по умолчанию она не одобрена) и просматривать все созданные новости.\
Админ может создать новость, одобрить любую новость, удалить любую новость и просматривать все созданные новости.\
Гость может просматривать только одобренные новости.\
На странице новостей новости должны выводится по 2 на десктопе и по одной на мобильной версии.\
Серверная часть не предусмотрена заданием.\

## Как установить

Для установки вам понадобится [git](https://git-scm.com/downloads), [node.js](https://nodejs.org/en/) и [npm](https://www.npmjs.com/).\
При наличии этих программ создайте в удобном для Вас месте папку и откройте её с помощью терминала ("Командная строка" в Windows).\ Находясь в этой папке, введите команду `git clone git@github.com:zouweninthesky/profilancegroup-test.git`.\
Когда проект скачается, перейдите глубже, в папку проекта, и пропишите команду `npm i` для установки дополнительных программ, обеспечивающих работу проекта.\
Когда установка завершится, пропишите `npm start`.\
После этого приложение откроется в Вашем браузере по умолчанию и Вы сможете им пользоваться.\

## Логин/пароль

Пользователь - логин: user, пароль: pass.\
Админ - логин: admin, пароль: pass1\
