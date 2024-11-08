import "core-js"
import "./scss/index.scss"
import {hello} from "@core/utils"

hello()

const getMessage = () => "Hello World";
console.log(getMessage())

const str = 'Привет Вадим'
console.log(str.includes('Вадим'))