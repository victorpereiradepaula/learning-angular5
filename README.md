# Learning Angular 5

[![Build Status](https://travis-ci.org/victorpereiradepaula/learning-angular5.svg?branch=master)](https://travis-ci.org/victorpereiradepaula/learning-angular5)
[![codebeat badge](https://codebeat.co/badges/00d03e0e-e901-484c-ba8d-4aad7c3f473d)](https://codebeat.co/projects/github-com-victorpereiradepaula-learning-angular5-master)
## Setting up development environment

Firt open command line interface and check if Node.js and npm are istalled by running `node -v && npm -v`.

So run `npm i @angular/cli -g` to install Angular CLI.

After the instalation, you can check if it has been correctly installed by running `ng -v`.

## Getting started

Start a new project by running `ng new <ProjectName> --style=css --routing`, `--style=css` specify a style flag, `--routing` integrate and set up it routing by default.

To use Angular Animations go to the created folder `cd <ProjectName>` and run `npm i @angular/animations@latest --save`.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## References

- <https://angular.io/>
- <https://www.udemy.com/angular-5/>
- <https://github.com/angular/angular-cli>

<hr>

A special thanks to <a href="https://github.com/Renan-B-Dias">@Renan-B-Dias</a> and Isabella Alcântara for the texts review.
