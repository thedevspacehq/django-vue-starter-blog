# Django Vue.js Starter Blog

A simple blog application created using Django, Vue.js and GraphQL.

## Features

- Including recent posts, category, tag, and post page
- User registration and login. Built with JWT and Vuex (migrated to Pinia, which is the recommended package for stores).
- Comment section. Only authenticated users can leave comment, and it won’t show up until approved by the admin.
- User profile page. Guest user can see and edit all comments that belong to that user.
- Like system. Guest user can like posts and comments.

## Coming Soon

- Author verification. Guest user can verify to become authors, who can post new articles.

## Screenshots

Home Page

![Home Page](https://github.com/ericnanhu/django-vue-starter-blog/blob/main/screenshots/Screen%20Shot%202022-02-13%20at%207.13.52%20PM.png?raw=true)

All Categories

![All Categories](https://github.com/ericnanhu/django-vue-starter-blog/blob/main/screenshots/Screen%20Shot%202022-02-13%20at%207.14.07%20PM.png?raw=true)

All Tags

![All Tags](https://github.com/ericnanhu/django-vue-starter-blog/blob/main/screenshots/Screen%20Shot%202022-02-13%20at%207.14.20%20PM.png?raw=true)

Sign In Page

![Sign In Page](https://github.com/ericnanhu/django-vue-starter-blog/blob/main/screenshots/Screen%20Shot%202022-02-13%20at%207.14.34%20PM.png?raw=true)

Sign Up Page

![Sign Up Page](https://github.com/ericnanhu/django-vue-starter-blog/blob/main/screenshots/Screen%20Shot%202022-02-13%20at%207.14.43%20PM.png?raw=true)

Post Page

![Post Page](https://github.com/ericnanhu/django-vue-starter-blog/blob/main/screenshots/Screen%20Shot%202022-02-13%20at%207.15.33%20PM.png?raw=true)

Comment Section

![Comment Section](https://github.com/ericnanhu/django-vue-starter-blog/blob/main/screenshots/Screen%20Shot%202022-02-13%20at%207.15.21%20PM.png?raw=true)

User Profile Page

![User Profile Page](https://github.com/ericnanhu/django-vue-starter-blog/blob/main/screenshots/Screen%20Shot%202022-02-16%20at%2010.20.18%20AM.png?raw=true)

User Profile Page Comment Section

![User Profile Page Comment Section](https://github.com/ericnanhu/django-vue-starter-blog/blob/main/screenshots/Screen%20Shot%202022-02-16%20at%2010.20.36%20AM.png?raw=true)

Django Admin Panel

![Django Admin Panel](https://github.com/ericnanhu/django-vue-starter-blog/blob/main/screenshots/Screen%20Shot%202022-02-13%20at%207.42.00%20PM.png?raw=true)

## Installation

For the backend, first create a virtual environment.

```bash
cd backend
python3 venv env
source env/bin/activate
```

Install required packages.

```bash
pip install -r requirements.txt
```

Run migrations.

```bash
python manage.py makemigrations
python manage.py migrate
```

Start dev server.

```bash
python manage.py runserver
```

For the frontend, install packages.

```bash
cd frontend
npm install
```

Start frontend dev server.

```bash
npm run serve
```
