![](https://img.shields.io/badge/Microverse-blueviolet)

# Hello world with rails-react gem

### Learning objectives

> Implement a connection between a Ruby on Rails back-end and React front-end.
> Understand the pros and cons of different approaches of connecting Ruby on Rails back-end with React front-end.

## Built With

- Ruby `3.1.2`
- Rails `6.1.6`


## Getting Started

### Prerequisites

- Ruby

### Setup

To get a local copy up and running follow this simple step:

- Clone repository to your local machine:

```
$ git@github.com:fed1k/Hello-rails-react.git
```

This will create a directory in the name of the project folder.

- Navigate to project folder using 

```
$ cd hello-rails-react
```

### Install

- Install all gems and dependencies for the project by running:

```
$ bundle install
```


### Create database
- In the `config/` directory, create a new file with the name `local_env.yml` and add the following code:

```
DATABASE_USERNAME: 'Your-PostgreSQL-Username'
DATABASE_PASSWORD: 'Your-PostgreSQL-Password'
```
- Create the database by running: 

```
$ rails db:create
```
```
$ rails db:seed
```

### Usage

- Run `rails s` to start the server
- Open `http://127.0.0.1:3000/` in your browser to use the app


## Author

👤 **Firdavs**

- GitHub: [@fed1k](https://github.com/fed1k)


## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

Mark Hopson for an awesome tutorial on [how to create a Rails project with a React and Redux front-end](https://www.freecodecamp.org/news/how-to-create-a-rails-project-with-a-react-and-redux-front-end-8b01e17a1db/).


## 📝 License

This project is [MIT](./LICENSE) licensed.
