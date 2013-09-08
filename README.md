## Dark Crystal

It's a board game.

This version (branch) is using AngularJS as a JavaScript framework.
Server is based on NodeJS.


( this is still under heavy development )


## Development Environment

### Mac OSX

1. Install [XCode](https://developer.apple.com/xcode/)
2. Once XCode is installed open it and install component: "Command Line Tools"
3. Install [Homebrew](http://brew.sh/)
4. Once homebrew (brew) is installed:
```Shell
brew install node
npm install -g yo
npm install -g generator-angular
```
5. Install RVM & Ruby using [GUI](http://jewelrybox.unfiniti.com/) or shell:
```Shell
curl -L https://get.rvm.io | bash -s stable --ruby
```
6. Clone this repository
7. Navigate to the folder using terminal and install Ruby Gems into created gemset:
```Shell
cd PATH_TO_PROJECT
bundle
```
8. Install all of the necessary 3rd party modules
```Shell
npm install
bower install
```
9. Start server
```Shell
grunt server
```
10. Enjoy!

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
