import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './clique.html';
import { name as PartiesList } from "../partiesList/partiesList";

class Clique {}
const name = 'clique';

export default angular.module(name, [
  angularMeteor,
  PartiesList
]).component(name, {
  template,
  controllerAs: name,
  controller: Clique
});
