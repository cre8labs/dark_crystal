## Dark Crystal

It's a board game.

This version (branch) is using AngularJS as a JavaScript framework.
Server is based on NodeJS.


( this is still under heavy development )


## Development Environment

### Mac OSX

* Install [XCode](https://developer.apple.com/xcode/)
* Once XCode is installed open it and install component: "Command Line Tools"
* Install [Homebrew](http://brew.sh/)
* Once homebrew (brew) is installed:

```
brew install node
npm install -g yo
npm install -g generator-angular
```

* Install RVM & Ruby using [GUI](http://jewelrybox.unfiniti.com/) or :

```
curl -L https://get.rvm.io | bash -s stable --ruby
```

* Clone this repository
* Navigate to the folder using terminal and install Ruby Gems into created gemset:

```
cd PATH_TO_PROJECT
bundle
```

* Install all of the necessary 3rd party modules

```
npm install
bower install
```

* Start server

```
grunt server
```

* Enjoy!

## Technology stack

* JavaScript
* CoffeeScript
* SCSS
* AngularJS Framework
* NodeJS
* Ruby (RVM) - used by Compass
* Yeoman
* Grunt
* Bower
* Twitter Bootstrap


## License

MIT
