import { required, digits, email, max, regex } from "vee-validate/dist/rules";
import {
    extend,
    setInteractionMode,
} from "vee-validate";
import Vue from "vue";
import VeeValidate from 'vee-validate'

setInteractionMode("eager");

extend("digits", value =>{
  if(value > 0){
    return true
  }
    return "o campo precisa ter {length} digitos ({_value_})"
});

extend("required", {
    ...required,
    message: "o campo não pode estar vazio!!",
});

extend("max", {
    ...max,
    message: "o campo não pode ser maior que {length} caractéres",
});

extend("email", {
    ...email,
    message: "Email tem que ser valido",
});


