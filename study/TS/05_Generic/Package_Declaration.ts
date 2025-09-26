// <reference path="./경로" /> <- 사용할 땐 ///
import _ from 'lodash'

const str = 'the'

console.log(_.camelCase(str))
console.log(_.snakeCase(str))
console.log(_.kebabCase(str))