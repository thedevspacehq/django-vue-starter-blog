# Django Vue.js Starter Blog

A simple blog application created using Django, Vue.js and GraphQL.

---

## Features

- Including recent posts, category, tag, and post page
- User registration and login. Built with JWT and Vuex.
- Comment section. Only authenticated users can leave comment, and it won’t show up until approved by the admin.

## Coming Soon

- User profile page. Guest user can see and edit all comments that belong to that user.
- Like system. Guest user can like posts and comments.
- Author verification. Guest user can verify to become authors, who can post new articles.

## Screenshots

![Home Page](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b55a2516-5a05-4a5f-8946-88307f38a52b/Screen_Shot_2022-02-13_at_7.13.52_PM.png)

Home Page

![All Categories](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/dce12120-4ff6-4eba-8348-8b5826c0ac66/Screen_Shot_2022-02-13_at_7.14.07_PM.png)

All Categories

![All Tags](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/23faa61e-20ef-47b4-8370-28e3d5b3e740/Screen_Shot_2022-02-13_at_7.14.20_PM.png)

All Tags

![Sign In Page](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/dd1495f0-cb49-4805-ac9c-4ad309251c86/Screen_Shot_2022-02-13_at_7.14.34_PM.png)

Sign In Page

![Sign Up Page](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0842548b-29a4-450c-94bc-8f76291d6cca/Screen_Shot_2022-02-13_at_7.14.43_PM.png)

Sign Up Page

![Post Page](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/70daac8c-b7d6-482c-9566-4585c5982059/Screen_Shot_2022-02-13_at_7.15.33_PM.png)

Post Page

![Comment Section](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b6ec656b-9eda-4a53-b4b7-3f78362d5734/Screen_Shot_2022-02-13_at_7.15.21_PM.png)

Comment Section

![Django Admin Panel](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2bb1c1d1-7280-45b2-9d29-a0673d478e68/Screen_Shot_2022-02-13_at_7.31.47_PM.png)

Django Admin Panel

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